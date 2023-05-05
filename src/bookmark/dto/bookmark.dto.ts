import { ApiProperty } from '@nestjs/swagger';
import { Bookmark } from '@prisma/client';
import { Exclude, Expose } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';

@Exclude()
export class BookmarkDto implements Bookmark {
  @Expose()
  @IsNumber()
  @ApiProperty({ example: 1 })
  id: number;

  @Expose()
  @IsString()
  @ApiProperty({ example: 'Doe' })
  title: string;

  @Expose()
  @IsString()
  @ApiProperty({ example: 'Doe' })
  description: string;

  @Expose()
  @IsString()
  @ApiProperty({ example: 'Doe' })
  link: string;

  @Exclude()
  userId: number;

  @Expose()
  @IsString()
  @ApiProperty({ example: '2023-04-11T17:43:29.712Z' })
  createdAt: Date;

  @Expose()
  @IsString()
  @ApiProperty({ example: '2023-04-11T17:43:29.712Z' })
  updatedAt: Date;
}
