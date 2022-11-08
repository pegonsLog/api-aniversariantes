import { Module } from '@nestjs/common';
import { AniversariantesService } from './aniversariantes.service';
import { AniversariantesResolver } from './aniversariantes.resolver';

@Module({
  providers: [AniversariantesResolver, AniversariantesService],
})
export class AniversariantesModule {}
