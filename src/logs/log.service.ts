import { Injectable } from '@nestjs/common';
import { CreateLogDto } from './dto/create-log.dto';
import { PrismaService } from 'src/generic-services/prisma.service';

@Injectable()
export class LogService {
  constructor(private readonly prisma: PrismaService) {}

  create(createLogDto: CreateLogDto) {
    return this.prisma.logs.create({
      data: createLogDto,
    });
  }

  findAll() {
    return this.prisma.logs.findMany();
  }

  findOne(id: number) {
    return this.prisma.logs.findUnique({
      where: {
        id: id,
      },
    });
  }

  findByUserId(userId: number) {
    return this.prisma.logs.findMany({
      where: {
        userId: userId,
      },
    });
  }
}
