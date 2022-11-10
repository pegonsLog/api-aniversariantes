import { Module } from '@nestjs/common';
import { AniversariantesService } from './aniversariantes.service';
import { AniversariantesController } from './aniversariantes.controller';
import { Aniversariante } from './entities/aniversariante.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { aniversariantesProviders } from './aniversariantes.providers';

@Module({
  imports: [TypeOrmModule.forFeature([Aniversariante])],
  controllers: [AniversariantesController],
  providers: [
    AniversariantesService,
    ...aniversariantesProviders,
    AniversariantesService,
  ],
})
export class AniversariantesModule {}
