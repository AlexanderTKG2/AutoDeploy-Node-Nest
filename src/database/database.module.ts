import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from 'src/config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: config.db.dialect,
      database: config.db.storage,
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
})
export class DatabaseModule {}
