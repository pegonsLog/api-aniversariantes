import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AniversariantesModule } from './aniversariantes/aniversariantes.module';
import { Aniversariante } from './aniversariantes/entities/aniversariante.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      database: './db.sql',
      type: 'sqlite',
      entities: [Aniversariante],
      synchronize: true,
    }),
    AniversariantesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
