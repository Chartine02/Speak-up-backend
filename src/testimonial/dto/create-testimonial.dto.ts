import { IsString, IsBoolean, IsOptional, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTestimonialDto {
  @ApiProperty({
    description: 'The title of the testimonial',
    example: 'My Journey with Anxiety',
    required: true,
  })
  @IsString()
  title: string;

  @ApiProperty({
    description: 'The content of the testimonial story',
    example:
      'I have been struggling with anxiety for years and wanted to share my experience...',
    required: true,
  })
  @IsString()
  story: string;

  @ApiProperty({
    description: 'Whether the testimonial should be posted anonymously',
    example: true,
    default: false,
    required: false,
  })
  @IsBoolean()
  @IsOptional()
  anonymous?: boolean;

  @ApiProperty({
    description: 'The ID of the user who authored the testimonial',
    example: 1,
    required: true,
  })
  @IsNumber()
  authorId: number;
}
