import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { HttpCodes, messages } from '@/constants/api';
import { checkAdminAccess, createResponseWithError, getUserAndValidate, responseInit } from '@/lib/api-utils';
import { ApiRequestError, ApiRequestZodError } from '@/lib/error';
import { prismaClient } from '@/lib/prisma';
import { userNameSchema } from '@/lib/validations/user';

const routeContextSchema = z.object({
  params: z.object({
    userId: z.string(),
  }),
});

export async function PATCH(req: NextRequest, context: z.infer<typeof routeContextSchema>) {
  try {
    // ルートコンテキストの検証
    const user = await getUserAndValidate(req);
    if (!user) throw new ApiRequestError(messages.userNotFound);

    checkAdminAccess(user?.role?.name);

    const { params } = routeContextSchema.parse(context);

    // bodyの検証
    const body = await req.json();
    const payload = userNameSchema.parse(body);

    // 自分の権限は編集できない
    if (!user || params.userId === user.id) {
      if ('roleId' in payload || 'isSuspended' in payload) {
        throw new ApiRequestError(messages.cantModifyMyself, HttpCodes.UnprocessableEntity);
      }
    }

    // ユーザーの更新
    await prismaClient.user.update({
      where: {
        id: params.userId,
      },
      data: {
        name: payload.name,
        roleId: payload.roleId,
        isSuspended: payload.isSuspended,
        email: payload.email,
        image: payload.image,
      },
    });

    return new NextResponse(null, responseInit);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return createResponseWithError(new ApiRequestZodError(error));
    } else if (error instanceof ApiRequestError) {
      return createResponseWithError(error);
    }

    return createResponseWithError(new ApiRequestError(messages.unknownError));
  }
}
