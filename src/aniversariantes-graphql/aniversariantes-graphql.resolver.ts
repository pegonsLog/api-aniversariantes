import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AniversariantesGraphqlService } from './aniversariantes-graphql.service';
import { AniversariantesGraphql } from './entities/aniversariantes-graphql.entity';
import { CreateAniversariantesGraphqlInput } from './dto/create-aniversariantes-graphql.input';
import { UpdateAniversariantesGraphqlInput } from './dto/update-aniversariantes-graphql.input';

@Resolver(() => AniversariantesGraphql)
export class AniversariantesGraphqlResolver {
  constructor(
    private readonly aniversariantesGraphqlService: AniversariantesGraphqlService,
  ) {}

  @Mutation(() => AniversariantesGraphql)
  createAniversariantesGraphql(
    @Args('createAniversariantesGraphqlInput')
    createAniversariantesGraphqlInput: CreateAniversariantesGraphqlInput,
  ) {
    return this.aniversariantesGraphqlService.create(
      createAniversariantesGraphqlInput,
    );
  }

  @Query(() => [AniversariantesGraphql], { name: 'aniversariantes' })
  findAll() {
    return this.aniversariantesGraphqlService.findAll();
  }

  @Query(() => AniversariantesGraphql, { name: 'aniversariantesGraphql' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.aniversariantesGraphqlService.findOne(id);
  }

  @Mutation(() => AniversariantesGraphql)
  updateAniversariantesGraphql(
    @Args('updateAniversariantesGraphqlInput')
    updateAniversariantesGraphqlInput: UpdateAniversariantesGraphqlInput,
  ) {
    return this.aniversariantesGraphqlService.update(
      updateAniversariantesGraphqlInput.id,
      updateAniversariantesGraphqlInput,
    );
  }

  @Mutation(() => AniversariantesGraphql)
  removeAniversariantesGraphql(@Args('id', { type: () => Int }) id: number) {
    return this.aniversariantesGraphqlService.remove(id);
  }
}
