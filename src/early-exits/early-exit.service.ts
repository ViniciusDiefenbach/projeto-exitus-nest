import { Injectable } from '@nestjs/common';
import { CreateEarlyExitDto } from './dto/create-early-exit.dto';
import { UpdateEarlyExitDto } from './dto/update-early-exit.dto';

@Injectable()
export class EarlyExitService {
  create(createEarlyExitDto: CreateEarlyExitDto) {
    return 'This action adds a new earlyExit';
  }

  findAll() {
    return `This action returns all earlyExit`;
  }

  findOne(id: number) {
    return `This action returns a #${id} earlyExit`;
  }

  update(id: number, updateEarlyExitDto: UpdateEarlyExitDto) {
    return `This action updates a #${id} earlyExit`;
  }

  remove(id: number) {
    return `This action removes a #${id} earlyExit`;
  }
}
