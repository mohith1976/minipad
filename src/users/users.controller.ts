import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UsersService } from './users.service';


import { CreateUsersDto } from './dto/create-user.dto';
import { UpdateUsersDto } from './dto/update-user.dto';        
@Controller('users')
export class UsersController {
  constructor(private service: UsersService) {}

  @Post()
  create(@Body() dto: CreateUsersDto) {
    return this.service.create(dto);
  }

  @Get(':code')
  find(@Param('code') code: string) {
    return this.service.find(code);
  }

  @Patch(':code')
  update(@Param('code') code: string, @Body() dto: UpdateUsersDto) {
    return this.service.update(code, dto);
  }

  @Delete(':code')
  delete(@Param('code') code: string) {
    return this.service.delete(code);
  }
}
