import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserModule } from './users/user.module';
import { LogModule } from './logs/log.module';
import { EarlyExitModule } from './early-exits/early-exit.module';

@Module({
  imports: [UserModule, LogModule, EarlyExitModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
