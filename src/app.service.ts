import { Injectable } from '@nestjs/common';
import config from './config';

@Injectable()
export class AppService {
  getHello(): string {
    return `<pre>${JSON.stringify(config, null, 4)}</pre>`;
  }
}
