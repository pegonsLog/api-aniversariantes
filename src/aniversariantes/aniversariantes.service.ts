import { Injectable } from '@nestjs/common';
import { CreateAniversarianteDto } from './dto/create-aniversariante.dto';
import { UpdateAniversarianteDto } from './dto/update-aniversariante.dto';

@Injectable()
export class AniversariantesService {
  create(createAniversarianteDto: CreateAniversarianteDto) {
    return 'This action adds a new aniversariante';
  }

  findAll() {
    return [{ id: 1, name: 'Pedro', birthday: '28/06' }];
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
