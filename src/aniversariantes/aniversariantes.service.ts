import { Injectable } from '@nestjs/common';
import { CreateAniversarianteDto } from './dto/create-aniversariante.dto';
import { UpdateAniversarianteDto } from './dto/update-aniversariante.dto';
import { Aniversariante } from './entities/aniversariante.entity';

@Injectable()
export class AniversariantesService {
  aniversariantes: Aniversariante[] = [
    { id: 1, name: 'João', birthday: '28/06' },
    { id: 2, name: 'Paulo', birthday: '10/05' },
    { id: 3, name: 'José', birthday: '15/07' },
  ];
  create(createAniversarianteDto: CreateAniversarianteDto) {
    return 'This action adds a new aniversariante';
  }

  findAll() {
    return this.aniversariantes;
  }

  findOne(id: number) {
    return `This action returns a #${id} aniversariante`;
  }

  update(id: number, updateAniversarianteDto: UpdateAniversarianteDto) {
    return `This action updates a #${id} aniversariante`;
  }

  remove(id: number) {
    return `This action removes a #${id} aniversariante`;
  }
}
