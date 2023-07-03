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
