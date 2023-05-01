import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EarlyExitService } from './early-exit.service';
import { CreateEarlyExitDto } from './dto/create-early-exit.dto';
import { UpdateEarlyExitDto } from './dto/update-early-exit.dto';

@Controller('early-exit')
export class EarlyExitController {
  constructor(private readonly earlyExitService: EarlyExitService) {}

  @Post()
  create(@Body() createEarlyExitDto: CreateEarlyExitDto) {
    return this.earlyExitService.create(createEarlyExitDto);
  }

  @Get()
  findAll() {
    return this.earlyExitService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.earlyExitService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEarlyExitDto: UpdateEarlyExitDto) {
    return this.earlyExitService.update(+id, updateEarlyExitDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.earlyExitService.remove(+id);
  }
}
