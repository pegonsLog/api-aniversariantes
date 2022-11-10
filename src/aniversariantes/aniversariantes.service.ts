import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAniversarianteDto } from './dto/create-aniversariante.dto';
import { UpdateAniversarianteDto } from './dto/update-aniversariante.dto';
import { Aniversariante } from './entities/aniversariante.entity';

@Injectable()
export class AniversariantesService {
  constructor(
    @InjectRepository(Aniversariante)
    private aniversarianteRepository: Repository<Aniversariante>,
  ) {}

  create(createAniversarianteDto: CreateAniversarianteDto) {
    const aniversariante = this.aniversarianteRepository.create(
      createAniversarianteDto,
    );
    return this.aniversarianteRepository.save(aniversariante);
  }

  async findAll() {
    return await this.aniversarianteRepository.find();
  }

  async findOne(id: number) {
    return await this.aniversarianteRepository.findOneBy({ id: id });
  }

  async update(id: number, updateAniversarianteDto: UpdateAniversarianteDto) {
    return await this.aniversarianteRepository.update(
      id,
      updateAniversarianteDto,
    );
  }

  async remove(id: number) {
    return await this.aniversarianteRepository.delete(id);
  }
}
