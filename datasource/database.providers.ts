import { Aniversariante } from 'src/aniversariantes/entities/aniversariante.entity';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        database: './db.sql',
        type: 'sqlite',
        entities: [Aniversariante],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
