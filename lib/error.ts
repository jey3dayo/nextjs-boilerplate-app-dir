import { z } from 'zod';
import { HttpCodes } from '@/constants/api';

const defaultErrorStatus = HttpCodes.InternalServerError;

export class ApiRequestError extends Error {
  status: number | undefined;

  constructor(message: string, status: number | undefined = defaultErrorStatus) {
    super(message);
    this.name = 'ApiRequestError';
    this.status = status;
    Object.setPrototypeOf(this, ApiRequestError.prototype);
  }
}

export class ApiRequestZodError extends Error {
  status: number | undefined;

  constructor(zodError: z.ZodError, status: number | undefined = HttpCodes.UnprocessableEntity) {
    const message = JSON.stringify(zodError.issues);
    super(message);
    this.name = 'ApiRequestZodError';
    this.status = status;
    Object.setPrototypeOf(this, ApiRequestError.prototype);
  }
}
