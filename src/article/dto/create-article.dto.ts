import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsInt } from 'class-validator';

export class CreateArticleDto {
  @ApiProperty({
    example: 'Mental Health Awareness',
    description: 'The title of the article',
  })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({
    example:
      'This article discusses the importance of mental health awareness...',
    description: 'The content of the article',
  })
  @IsNotEmpty()
  @IsString()
  content: string;

  @ApiProperty({
    example: 'MENTAL_HEALTH',
    description: 'The category of the article',
  })
  @IsNotEmpty()
  @IsString()
  category: string;

  @ApiProperty({
    example: 1,
    description: 'The ID of the author',
  })
  @IsNotEmpty()
  @IsInt()
  authorId: number;
}
