import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, IsOptional } from 'class-validator';

export class UpdateArticleDto {
  @ApiProperty({
    example: 'Updated: Mental Health Awareness',
    description: 'The updated title of the article',
    required: false,
  })
  @IsOptional()
  @IsString()
  title?: string;

  @ApiProperty({
    example: 'Updated content about mental health awareness...',
    description: 'The updated content of the article',
    required: false,
  })
  @IsOptional()
  @IsString()
  content?: string;

  @ApiProperty({
    example: 'WELLNESS',
    description: 'The updated category of the article',
    required: false,
  })
  @IsOptional()
  @IsString()
  category?: string;

  @ApiProperty({
    example: 2,
    description: 'The updated author ID of the article',
    required: false,
  })
  @IsOptional()
  @IsInt()
  authorId?: number;
}
