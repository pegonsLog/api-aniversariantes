import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BirthdaysModule } from './birthdays/birthdays.module';
import { Birthday } from './birthdays/entities/birthday.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      database: './db.sql',
      type: 'sqlite',
      entities: [Birthday],
      synchronize: true,
      logging: true
    }),
    BirthdaysModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
