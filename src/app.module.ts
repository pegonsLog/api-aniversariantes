import { Module } from '@nestjs/common';
import { AniversariantesModule } from './aniversariantes/aniversariantes.module';

@Module({
  imports: [AniversariantesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
