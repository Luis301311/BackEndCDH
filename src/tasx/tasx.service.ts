import { Injectable } from '@nestjs/common';
import { CreateTasxDto } from './dto/create-tasx.dto';
import { UpdateTasxDto } from './dto/update-tasx.dto';

@Injectable()
export class TasxService {
  create(createTasxDto: CreateTasxDto) {
    return 'This action adds a new tasx';
  }

  findAll() {
    return `This action returns all tasx`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tasx`;
  }

  update(id: number, updateTasxDto: UpdateTasxDto) {
    return `This action updates a #${id} tasx`;
  }

  remove(id: number) {
    return `This action removes a #${id} tasx`;
  }
}
