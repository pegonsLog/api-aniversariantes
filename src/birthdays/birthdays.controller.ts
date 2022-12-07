import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { BirthdaysService } from './birthdays.service';
import { CreateBirthdayDto } from './dto/create-birthday.dto';

import { UpdateBirthdayDto } from './dto/update-birthday.dto';
import { Birthday } from './entities/birthday.entity';

@Controller('birthdays')
export class BirthdaysController {
  birthdayPersons: Birthday[] = [];
  constructor(private readonly birthdaysService: BirthdaysService) {}

  @Post()
  create(@Body() createBirthdayDto: CreateBirthdayDto) {
    return this.birthdaysService.create(createBirthdayDto);
  }

  @Get()
  findAll() {
    return this.birthdaysService.findAll();
  }

  @Get('/:month')
  async findForMonth(@Param('month') month: string) {
    return await this.birthdaysService
      .findForMonth(month)
      .then((birthdays) => (this.birthdayPersons = birthdays));
  }

  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.birthdaysService.findOne(+id);
  }

  @Patch('/:id')
  update(
    @Param('id') id: string,
    @Body() updateBirthdayDto: UpdateBirthdayDto,
  ) {
    return this.birthdaysService.update(+id, updateBirthdayDto);
  }

  @Delete('/:id')
  remove(@Param('id') id: string) {
    return this.birthdaysService.remove(+id);
  }
}
