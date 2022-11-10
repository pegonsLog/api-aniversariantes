import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Inject,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { AniversariantesService } from './aniversariantes.service';
import { CreateAniversarianteDto } from './dto/create-aniversariante.dto';
import { UpdateAniversarianteDto } from './dto/update-aniversariante.dto';
import { Aniversariante } from './entities/aniversariante.entity';

@Controller('aniversariantes')
export class AniversariantesController {
  constructor(
    @Inject('ANIVERSARIANTE_REPOSITORY')
    private aniversarianteRepository: Repository<Aniversariante>,
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
