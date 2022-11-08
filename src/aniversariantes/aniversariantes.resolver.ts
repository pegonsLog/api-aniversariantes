import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AniversariantesService } from './aniversariantes.service';
import { Aniversariante } from './entities/aniversariante.entity';
import { CreateAniversarianteInput } from './dto/create-aniversariante.input';
import { UpdateAniversarianteInput } from './dto/update-aniversariante.input';


@Resolver(() => Aniversariante)
export class AniversariantesResolver {
  constructor(
    private readonly aniversariantesService: AniversariantesService,
  ) {}

  @Mutation(() => Aniversariante)
  createAniversariante(
    @Args('createAniversarianteInput')
    createAniversarianteInput: CreateAniversarianteInput,
  ) {
    return this.aniversariantesService.create(createAniversarianteInput);
  }

  @Query(() => [Aniversariante], { name: 'aniversariantes' })
  findAll() {
    return this.aniversariantesService.findAll();
  }

  @Query(() => Aniversariante, { name: 'aniversariante' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.aniversariantesService.findOne(id);
  }

  @Mutation(() => Aniversariante)
  updateAniversariante(
    @Args('updateAniversarianteInput')
    updateAniversarianteInput: UpdateAniversarianteInput,
  ) {
    return this.aniversariantesService.update(
      updateAniversarianteInput.id,
      updateAniversarianteInput,
    );
  }

  @Mutation(() => Aniversariante)
  removeAniversariante(@Args('id', { type: () => Int }) id: number) {
    return this.aniversariantesService.remove(id);
  }
}
