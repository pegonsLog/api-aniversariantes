import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { AniversariantesService } from './aniversariantes.service';
import { CreateAniversarianteDto } from './dto/create-aniversariante.dto';

import { UpdateAniversarianteDto } from './dto/update-aniversariante.dto';

@Controller('aniversariantes')
export class AniversariantesController {
  constructor(
    private readonly aniversariantesService: AniversariantesService,
  ) {}

  @Post()
  create(@Body() createAniversarianteDto: CreateAniversarianteDto) {
    return this.aniversariantesService.create(createAniversarianteDto);
  }

  @Get()
  findAll() {
    return this.aniversariantesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aniversariantesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAniversarianteDto: UpdateAniversarianteDto,
  ) {
    return this.aniversariantesService.update(+id, updateAniversarianteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aniversariantesService.remove(+id);
  }
}
