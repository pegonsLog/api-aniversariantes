import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AniversariantesModule } from './aniversariantes/aniversariantes.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      cors: {
        origin: 'http://localhost:3000/graphql',
        credentials: true,
      },
    }),
    AniversariantesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
