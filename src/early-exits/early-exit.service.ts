import { Injectable } from '@nestjs/common';
import { CreateEarlyExitDto } from './dto/create-early-exit.dto';
import { UpdateEarlyExitDto } from './dto/update-early-exit.dto';
import { PrismaService } from 'src/generic-services/prisma.service';

@Injectable()
export class EarlyExitService {
  constructor(private readonly prisma: PrismaService) {}

  create(createEarlyExitDto: CreateEarlyExitDto) {
    return this.prisma.earlyExits.create({
      data: createEarlyExitDto,
    });
  }

  findAll() {
    return this.prisma.earlyExits.findMany();
  }

  findOne(id: number) {
    return this.prisma.earlyExits.findUnique({
      where: {
        id: id,
      },
    });
  }

  findByUserId(userId: number) {
    return this.prisma.earlyExits.findMany({
      where: {
        userId: userId,
      },
    });
  }

  update(id: number, updateEarlyExitDto: UpdateEarlyExitDto) {
    return this.prisma.earlyExits.update({
      data: updateEarlyExitDto,
      where: {
        id: id,
      },
    });
  }

  remove(id: number) {
    return this.prisma.earlyExits.delete({
      where: {
        id: id,
      },
    });
  }
}
