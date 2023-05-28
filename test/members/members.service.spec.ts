import { Test, TestingModule } from '@nestjs/testing';
import { MembersService } from '../../src/members/members.service';
import { PrismaService } from '../../src/providers/database/prisma/prisma.service';
import { Member } from '@prisma/client';

describe('MembersService', () => {
  let service: MembersService;
  let prisma: any;

  const testMembers: Member[] = [
    {
      id: '1',
      name: 'john',
      surname: 'Doe',
      role: 'MEMBER',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: '2',
      name: 'Martha',
      surname: 'Doe',
      role: 'VETUS',
      image: 'https://via.placeholder.com/148',
    },
  ];

  beforeEach(async () => {
    prisma = {
      member: {
        findMany: jest.fn(),
        findUnique: jest.fn(),
        create: jest.fn(),
        update: jest.fn(),
        delete: jest.fn(),
      },
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [MembersService, { provide: PrismaService, useValue: prisma }],
    }).compile();

    service = module.get<MembersService>(MembersService);
  });

  it('should get all members', async () => {
    prisma.member.findMany.mockResolvedValue(testMembers);

    expect(await service.getAllMembers()).toEqual(testMembers);
  });

  it('should get a member by id', async () => {
    const testMember = { id: '1', name: 'Test Member' };
    prisma.member.findUnique.mockResolvedValue(testMember);

    expect(await service.getMemberById('1')).toEqual(testMember);
  });

  it('should add a member', async () => {
    const testMember: Member = testMembers[0];
    prisma.member.create.mockResolvedValue(testMember);

    expect(await service.addMember(testMember)).toEqual(testMember);
  });

  it('should update a member', async () => {
    const testMember: Member = testMembers[0];
    prisma.member.update.mockResolvedValue(testMember);

    expect(await service.updateMember('1', { name: 'Updated Member' })).toEqual(testMember);
  });

  it('should delete a member', async () => {
    const testMember: Member = testMembers[0];
    prisma.member.delete.mockResolvedValue(testMember);

    expect(await service.deleteMember('1')).toEqual(testMember);
  });
});
