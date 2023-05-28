import { Injectable } from '@nestjs/common';
import { PrismaService } from '../providers/database/prisma/prisma.service';
import type { Member } from '@prisma/client';

@Injectable()
export class MembersService {
  private prisma: PrismaService;

  constructor(prismaService: PrismaService) {
    this.prisma = prismaService;
  }

  async getAllMembers(): Promise<Member[]> {
    return this.prisma.member.findMany();
  }

  async getMemberById(id: string): Promise<Member> {
    const user = await this.prisma.member.findUnique({
      where: {
        id: id,
      },
    });

    if (!user) {
      throw new Error(`Member with id ${id} was not found`);
    }

    return user;
  }

  async addMember(member: Member): Promise<Member> {
    return this.prisma.member.create({
      data: member,
    });
  }

  async updateMember(id: string, member: Partial<Member>): Promise<Member> {
    return this.prisma.member.update({
      where: {
        id: id,
      },
      data: member,
    });
  }

  async deleteMember(id: string): Promise<Member> {
    return this.prisma.member.delete({
      where: {
        id: id,
      },
    });
  }
}
