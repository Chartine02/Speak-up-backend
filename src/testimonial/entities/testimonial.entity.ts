import { ApiProperty } from '@nestjs/swagger';

export class Testimonial {
  @ApiProperty({
    description: 'The unique identifier of the testimonial',
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: 'The title of the testimonial',
    example: 'My Journey with Anxiety',
  })
  title: string;

  @ApiProperty({
    description: 'The content of the testimonial story',
    example:
      'I have been struggling with anxiety for years and wanted to share my experience...',
  })
  story: string;

  @ApiProperty({
    description: 'Whether the testimonial is posted anonymously',
    example: true,
    default: false,
  })
  anonymous: boolean;

  @ApiProperty({
    description: 'The ID of the user who authored the testimonial',
    example: 1,
  })
  authorId: number;

  @ApiProperty({
    description: 'The date when the testimonial was created',
    example: '2023-06-15T10:30:00Z',
  })
  created_at: Date;

  @ApiProperty({
    description: 'The date when the testimonial was last updated',
    example: '2023-06-16T14:45:00Z',
  })
  updated_at: Date;
}
