import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '../../generated/prisma';

@Injectable()
export class UsersRepository {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.UserCreateInput) {
    return this.prisma.user.create({ data });
  }

  findByCode(code: string) {
    return this.prisma.user.findUnique({
      where: { code },
    });
  }

  update(code: string, data: Prisma.UserUpdateInput) {
    return this.prisma.user.update({
      where: { code },
      data,
    });
  }

  delete(code: string) {
    return this.prisma.user.delete({
      where: { code },
    });
  }
}
