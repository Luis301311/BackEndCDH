import { PartialType } from '@nestjs/swagger';
import { CreateTasxDto } from './create-tasx.dto';

export class UpdateTasxDto extends PartialType(CreateTasxDto) {}
