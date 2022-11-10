import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AniversariantesController } from './aniversariantes.controller';
import { AniversariantesService } from './aniversariantes.service';
import { Aniversariante } from './entities/aniversariante.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Aniversariante])],
  controllers: [AniversariantesController],
  providers: [AniversariantesService],
})
export class AniversariantesModule {}
