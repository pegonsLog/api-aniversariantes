import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AniversariantesGraphqlModule } from './aniversariantes-graphql/aniversariantes-graphql.module';
import { AniversariantesModule } from './aniversariantes/aniversariantes.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      cors: {
        origin: 'http://localhost:3000',
        credentials: true,
      },
    }),

    AniversariantesModule,
    AniversariantesGraphqlModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
