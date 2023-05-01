import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  create(createUserDto: CreateUserDto) {
    createUserDto.dateOfBirth = new Date(createUserDto.dateOfBirth);
    return this.prisma.users.create({
      data: createUserDto,
    });
  }

  findAll() {
    return this.prisma.users.findMany();
  }

  findOne(id: number) {
    return this.prisma.users.findUnique({
      where: {
        id: id,
      },
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.users.update({
      data: updateUserDto,
      where: {
        id: id,
      },
    });
  }

  remove(id: number) {
    return this.prisma.users.delete({
      where: {
        id: id,
      },
    });
  }
}
