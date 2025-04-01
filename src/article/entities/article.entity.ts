import { ApiProperty } from '@nestjs/swagger';

export class Article {
  @ApiProperty({
    example: 1,
    description: 'The unique identifier of the article',
  })
  id: number;

  @ApiProperty({
    example: 'Mental Health Awareness',
    description: 'The title of the article',
  })
  title: string;

  @ApiProperty({
    example:
      'This article discusses the importance of mental health awareness...',
    description: 'The content of the article',
  })
  content: string;

  @ApiProperty({
    example: 'MENTAL_HEALTH',
    description: 'The category of the article',
  })
  category: string;

  @ApiProperty({
    description: 'The date and time when the article was created',
  })
  created_at: Date;

  @ApiProperty({
    description: 'The date and time when the article was last updated',
  })
  updated_at: Date;

  @ApiProperty({ example: 1, description: 'The ID of the author' })
  authorId: number;

  @ApiProperty({ description: 'The author of the article' })
  author?: {
    id: number;
    username: string;
    email: string;
  };
}
