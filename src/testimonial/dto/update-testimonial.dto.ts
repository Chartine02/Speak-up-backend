import { PartialType } from '@nestjs/mapped-types';
import { CreateTestimonialDto } from './create-testimonial.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsBoolean, IsOptional } from 'class-validator';

export class UpdateTestimonialDto extends PartialType(CreateTestimonialDto) {
  @ApiPropertyOptional({
    description: 'The updated title of the testimonial',
    example: 'My Updated Journey with Mental Health',
  })
  @IsString()
  @IsOptional()
  title?: string;

  @ApiPropertyOptional({
    description: 'The updated content of the testimonial story',
    example: 'This is my updated story about overcoming challenges...',
  })
  @IsString()
  @IsOptional()
  story?: string;

  @ApiPropertyOptional({
    description: 'Whether the testimonial should be posted anonymously',
    example: true,
  })
  @IsBoolean()
  @IsOptional()
  anonymous?: boolean;
}
