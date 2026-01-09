import { IsOptional, IsString } from 'class-validator';

export class UpdateUsersDto {
  @IsOptional()
  @IsString()
  content?: string;
}
