import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsEmail()
  @ApiProperty({
    example: 'user@example.com',
    description: 'The email of the user',
    format: 'email',
  })
  email?: string;

  @IsOptional()
  @IsString()
  @MinLength(3)
  @ApiProperty({
    example: 'John',
    description: 'The first name of the user',
  })
  firstName?: string;

  @IsOptional()
  @IsString()
  @MinLength(3)
  @ApiProperty({
    example: 'Doe',
    description: 'The last name of the user',
  })
  lastName?: string;
}
