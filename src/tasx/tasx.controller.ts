import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TasxService } from './tasx.service';
import { CreateTasxDto } from './dto/create-tasx.dto';
import { UpdateTasxDto } from './dto/update-tasx.dto';

@Controller('tasx')
export class TasxController {
  constructor(private readonly tasxService: TasxService) {}

  @Post()
  create(@Body() createTasxDto: CreateTasxDto) {
    return this.tasxService.create(createTasxDto);
  }

  @Get()
  findAll() {
    return this.tasxService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tasxService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTasxDto: UpdateTasxDto) {
    return this.tasxService.update(+id, updateTasxDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tasxService.remove(+id);
  }
}
