import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({
    example: 'user@example.com',
    description: 'The email of the user',
    format: 'email',
  })
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'password',
    description: 'The password of the user',
    minLength: 8,
  })
  password: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    example: 'John',
    description: 'The first name of the user',
  })
  firstName?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    example: 'Doe',
    description: 'The last name of the user',
  })
  lastName?: string;
}
