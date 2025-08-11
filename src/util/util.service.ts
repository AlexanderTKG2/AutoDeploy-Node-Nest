import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class UtilService {
  public parseId(id: string | null | undefined): number {
    try {
      const intRegex = /^[1-9]+$/;
      if (!id) {
        throw new Error('Invalid id value');
      }

      if (!intRegex.test(id)) {
        throw new Error('Invalid id value');
      }

      const result: number = parseInt(id, 10);

      if (!result) {
        throw new Error('Invalid id value');
      }

      if (isNaN(result)) {
        throw new Error('Invalid id value');
      }

      return result;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: (error.message as string | null | undefined) || 'Bad Request',
        },
        HttpStatus.BAD_REQUEST,
        {
          cause: error,
        },
      );
    }
  }
}
