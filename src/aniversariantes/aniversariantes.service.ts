/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateAniversarianteInput } from './dto/create-aniversariante.input';
import { UpdateAniversarianteInput } from './dto/update-aniversariante.input';

@Injectable()
export class AniversariantesService {
  create(createAniversarianteInput: CreateAniversarianteInput) {
    return 'This action adds a new aniversariante';
  }

  findAll() {
    return [
      { id: 1, name: 'Pedro', birthday: '28/06' },
      { id: 2, name: 'Jânio', birthday: '12/12' },
    ];
  }

  findOne(id: number) {
    return `This action returns a #${id} aniversariante`;
  }

  update(id: number, updateAniversarianteInput: UpdateAniversarianteInput) {
    return `This action updates a #${id} aniversariante`;
  }

  remove(id: number) {
    return `This action removes a #${id} aniversariante`;
  }
}
