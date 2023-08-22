import { Controller, Injectable } from '@nestjs/common';
@Controller('api')
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World Again!';
  }
}
