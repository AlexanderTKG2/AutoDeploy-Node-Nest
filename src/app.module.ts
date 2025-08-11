import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from './employee/employee.module';
import { DatabaseModule } from './database/database.module';
import { UtilModule } from './util/util.module';

@Module({
  imports: [DatabaseModule, EmployeeModule, UtilModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
