import { Module } from '@nestjs/common';
import { MembersService } from './members.service';
import { MembersController } from './members.controller';
import { PrismaService } from '../providers/database/prisma/prisma.service';

@Module({
  providers: [MembersService, PrismaService],
  exports: [MembersService],
  controllers: [MembersController],
})
export class MembersModule {}
