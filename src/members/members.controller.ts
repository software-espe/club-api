import { Body, Controller, Delete, Get, HttpException, Logger, Param, Post } from '@nestjs/common';
import { MembersService } from './members.service';
import { Member } from '@prisma/client';

@Controller('members')
export class MembersController {
  private readonly log = new Logger(MembersController.name);
  private readonly membersService: MembersService;

  constructor(memberService: MembersService) {
    this.membersService = memberService;
  }

  @Get()
  async getAllMembers(): Promise<Member[]> {
    try {
      const members = await this.membersService.getAllMembers();
      this.log.debug(`Found ${members.length} members`);
      return members;
    } catch (error) {
      throw new HttpException(error.message, 404);
    }
  }

  @Get(':id')
  async getMemberById(@Param('id') id: string): Promise<Member> {
    try {
      return await this.membersService.getMemberById(id);
    } catch (error) {
      throw new HttpException(error.message, 404);
    }
  }

  @Post()
  async addMember(@Body() member: Member): Promise<Member> {
    return await this.membersService.addMember(member);
  }

  @Post(':id')
  async updateMember(@Param('id') id: string, @Body() member: Member): Promise<Member> {
    return await this.membersService.updateMember(id, member);
  }

  @Delete(':id')
  async deleteMember(@Param('id') id: string): Promise<Member> {
    return await this.membersService.deleteMember(id);
  }
}
