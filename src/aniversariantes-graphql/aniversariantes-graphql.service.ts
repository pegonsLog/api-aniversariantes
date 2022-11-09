import { Injectable } from '@nestjs/common';
import { CreateAniversariantesGraphqlInput } from './dto/create-aniversariantes-graphql.input';
import { UpdateAniversariantesGraphqlInput } from './dto/update-aniversariantes-graphql.input';

@Injectable()
export class AniversariantesGraphqlService {
  aniversariantes: any[] = [
    { id: 1, name: 'Pedro', birthday: '28/06' },
    { id: 2, name: 'Paulo', birthday: '10/05' },
  ];

  create(createAniversariantesGraphqlInput: CreateAniversariantesGraphqlInput) {
    return 'This action adds a new aniversariantesGraphql';
  }

  findAll() {
    return this.aniversariantes;
  }

  findOne(id: number) {
    return `This action returns a #${id} aniversariantesGraphql`;
  }

  update(
    id: number,
    updateAniversariantesGraphqlInput: UpdateAniversariantesGraphqlInput,
  ) {
    return `This action updates a #${id} aniversariantesGraphql`;
  }

  remove(id: number) {
    return `This action removes a #${id} aniversariantesGraphql`;
  }
}
