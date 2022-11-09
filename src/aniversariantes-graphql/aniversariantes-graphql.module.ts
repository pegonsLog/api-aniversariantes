import { Module } from '@nestjs/common';
import { AniversariantesGraphqlService } from './aniversariantes-graphql.service';
import { AniversariantesGraphqlResolver } from './aniversariantes-graphql.resolver';

@Module({
  providers: [AniversariantesGraphqlResolver, AniversariantesGraphqlService],
})
export class AniversariantesGraphqlModule {}
