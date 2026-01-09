import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { CreateUsersDto } from './dto/create-user.dto';
import { UpdateUsersDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private repo: UsersRepository) {}

  async create(dto: CreateUsersDto) {
    const existing = await this.repo.findByCode(dto.code);
    if (existing) throw new ConflictException('Code already exists');
    return this.repo.create(dto);
  }

  async find(code: string) {
    const user = await this.repo.findByCode(code);
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  async update(code: string, dto: UpdateUsersDto) {
    await this.find(code); 
    return this.repo.update(code, dto);
  }

  async delete(code: string) {
    await this.find(code);
    return this.repo.delete(code);
  }
}
