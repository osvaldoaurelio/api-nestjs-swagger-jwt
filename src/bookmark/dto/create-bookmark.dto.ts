import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateBookmarkDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Adicionar aki uma descrição de exemplos',
    example: 'aqui um title de exemplo',
  })
  title: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'Adicionar aki uma descrição de exemplos',
    example: 'aqui um description de exemplo',
  })
  description?: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Adicionar aki uma descrição de exemplos',
    example: 'aqui um link de exemplo',
  })
  link: string;
}
