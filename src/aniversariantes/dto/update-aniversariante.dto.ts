import { PartialType } from '@nestjs/mapped-types';
import { CreateAniversarianteDto } from './create-aniversariante.dto';

export class UpdateAniversarianteDto extends PartialType(
  CreateAniversarianteDto,
) {}
