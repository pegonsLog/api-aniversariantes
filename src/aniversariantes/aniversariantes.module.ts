import { Module } from '@nestjs/common';
import { AniversariantesService } from './aniversariantes.service';
import { AniversariantesController } from './aniversariantes.controller';

@Module({
  controllers: [AniversariantesController],
  providers: [AniversariantesService],
})
export class AniversariantesModule {}
