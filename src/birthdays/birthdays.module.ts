import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BirthdaysController } from './birthdays.controller';
import { BirthdaysService } from './birthdays.service';
import { Birthday } from './entities/birthday.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Birthday])],
  controllers: [BirthdaysController],
  providers: [BirthdaysService],
})
export class BirthdaysModule {}
