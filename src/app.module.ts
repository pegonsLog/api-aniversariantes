import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BirthdaysModule } from './birthdays/birthdays.module';
import { Birthday } from './birthdays/entities/birthday.entity';
import { User } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      database: './db.sql',
      type: 'sqlite',
      entities: [Birthday, User],
      synchronize: true,
      logging: true,
    }),
    BirthdaysModule,
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
