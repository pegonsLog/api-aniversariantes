import { DataSource } from 'typeorm';
import { Aniversariante } from './entities/aniversariante.entity';

export const aniversariantesProviders = [
  {
    provide: 'ANIVERSARIANTE_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(Aniversariante),
    inject: ['DATA_SOURCE'],
  },
];
