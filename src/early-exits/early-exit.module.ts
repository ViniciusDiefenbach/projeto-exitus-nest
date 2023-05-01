import { Module } from '@nestjs/common';
import { EarlyExitService } from './early-exit.service';
import { EarlyExitController } from './early-exit.controller';
import { PrismaService } from 'src/generic-services/prisma.service';

@Module({
  controllers: [EarlyExitController],
  providers: [EarlyExitService, PrismaService],
})
export class EarlyExitModule {}
