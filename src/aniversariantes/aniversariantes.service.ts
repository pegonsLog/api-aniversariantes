import { Injectable } from '@nestjs/common';
import { CreateAniversarianteDto } from './dto/create-aniversariante.dto';
import { UpdateAniversarianteDto } from './dto/update-aniversariante.dto';
import { Aniversariante } from './entities/aniversariante.entity';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AniversariantesService {
  public readonly API = './api-aniversariantes/db.sql';

  constructor(private http: HttpClient) {}

  create(createAniversarianteDto: CreateAniversarianteDto) {
    return 'This action adds a new aniversariante';
  }

  findAll() {
    return this.http.get<Aniversariante>(this.API);
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
