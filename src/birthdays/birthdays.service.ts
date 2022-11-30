import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateBirthdayDto } from './dto/create-birthday.dto';
import { UpdateBirthdayDto } from './dto/update-birthday.dto';
import { Birthday } from './entities/birthday.entity';

@Injectable()
export class BirthdaysService {
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
    return await this.birthdayRepository.find(month);
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
