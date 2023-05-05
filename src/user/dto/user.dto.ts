import { ApiProperty } from '@nestjs/swagger';
import { User } from '@prisma/client';
import { Exclude, Expose } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';

@Exclude()
export class UserDto implements User {
  @Expose()
  @IsNumber()
  @ApiProperty({ example: 1 })
  id: number;

  @Exclude()
  hash: string;

  @Expose()
  @IsString()
  @ApiProperty({ example: 'user@example.com' })
  email: string;

  @Expose()
  @IsString()
  @ApiProperty({ example: 'John' })
  firstName: string;

  @Expose()
  @IsString()
  @ApiProperty({ example: 'Doe' })
  lastName: string;

  @Expose()
  @IsString()
  @ApiProperty({ example: '2023-04-11T17:43:29.712Z' })
  createdAt: Date;

  @Expose()
  @IsString()
  @ApiProperty({ example: '2023-04-11T17:43:29.712Z' })
  updatedAt: Date;
}
