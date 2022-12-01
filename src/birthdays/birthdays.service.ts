import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateBirthdayDto } from './dto/create-birthday.dto';
import { UpdateBirthdayDto } from './dto/update-birthday.dto';
import { Birthday } from './entities/birthday.entity';

@Injectable()
export class BirthdaysService {
  birthdayPersons: Birthday[] = [];
  birthdaysMonth: Birthday[] = [];

  constructor(
    @InjectRepository(Birthday)
    private birthdayRepository: Repository<Birthday>,
  ) {}

  async create(createBirthdayDto: CreateBirthdayDto) {
    const birthday = this.birthdayRepository.create(createBirthdayDto);
    return await this.birthdayRepository.save(birthday);
  }

  async findAll() {
    return await this.birthdayRepository.find();
  }

  async findForMonth(month: string) {
    await this.birthdayRepository
      .find()
      .then((birthdays) => (this.birthdayPersons = birthdays));

    for (const birthday of this.birthdayPersons) {
      if (birthday.month == month) {
        this.birthdaysMonth.push(birthday);
      }
    }
    return this.birthdaysMonth;
  }
  async findOne(id: number) {
    return await this.birthdayRepository.findOneBy({ id: id });
  }

  async update(id: number, updateBirthdayDto: UpdateBirthdayDto) {
    return await this.birthdayRepository.update(id, updateBirthdayDto);
  }

  async remove(id: number) {
    return await this.birthdayRepository.delete(id);
  }
}
