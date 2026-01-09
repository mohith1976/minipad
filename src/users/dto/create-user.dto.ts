import { IsString } from 'class-validator';

export class CreateUsersDto {
  @IsString()
  code: string;

  @IsString()
  content: string;
}
