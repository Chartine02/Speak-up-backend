import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TestimonialService } from './testimonial.service';
import { CreateTestimonialDto } from './dto/create-testimonial.dto';
import { UpdateTestimonialDto } from './dto/update-testimonial.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBody,
  ApiParam,
} from '@nestjs/swagger';
import { Testimonial } from './entities/testimonial.entity';

@ApiTags('testimonials')
@Controller('testimonials')
export class TestimonialController {
  constructor(private readonly testimonialService: TestimonialService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new testimonial' })
  @ApiBody({
    type: CreateTestimonialDto,
    description: 'Testimonial data to create a new entry',
    examples: {
      default: {
        summary: 'Default example',
        description: 'A typical example of a testimonial creation request',
        value: {
          title: 'My Journey with Anxiety',
          story:
            'I have been struggling with anxiety for years and wanted to share my experience...',
          anonymous: false,
          authorId: 1,
        },
      },
      anonymous: {
        summary: 'Anonymous testimonial',
        description: 'Example of creating an anonymous testimonial',
        value: {
          title: 'Overcoming Depression',
          story:
            'I want to share my experience with depression without revealing my identity...',
          anonymous: true,
          authorId: 2,
        },
      },
    },
  })
  @ApiResponse({
    status: 201,
    description: 'The testimonial has been successfully created.',
    type: Testimonial,
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request. Validation failed for the provided input.',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal Server Error.',
  })
  create(@Body() createTestimonialDto: CreateTestimonialDto) {
    return this.testimonialService.create(createTestimonialDto);
  }

  @Get()
  @ApiOperation({ summary: 'Retrieve all testimonials' })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved all testimonials.',
    type: [Testimonial],
  })
  @ApiResponse({
    status: 500,
    description: 'Internal Server Error.',
  })
  findAll() {
    return this.testimonialService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retrieve a testimonial by ID' })
  @ApiParam({
    name: 'id',
    description: 'The ID of the testimonial to retrieve',
    type: 'number',
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved the testimonial.',
    type: Testimonial,
  })
  @ApiResponse({
    status: 404,
    description: 'The testimonial with the specified ID does not exist.',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal Server Error.',
  })
  findOne(@Param('id') id: string) {
    return this.testimonialService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a testimonial by ID' })
  @ApiParam({
    name: 'id',
    description: 'The ID of the testimonial to update',
    type: 'number',
    example: 1,
  })
  @ApiBody({
    type: UpdateTestimonialDto,
    description: 'Partial testimonial data to update an existing entry',
    examples: {
      titleUpdate: {
        summary: 'Update title only',
        description: 'Example of updating just the testimonial title',
        value: {
          title: 'Updated: My Journey with Anxiety',
        },
      },
      contentUpdate: {
        summary: 'Update story content',
        description: 'Example of updating the testimonial content',
        value: {
          story:
            "I've been on a journey to overcome anxiety for the past few years. Here's my updated story...",
        },
      },
      multipleFieldsUpdate: {
        summary: 'Update multiple fields',
        description: 'Example of updating multiple fields at once',
        value: {
          title: 'My Recovery Process',
          story:
            'After years of therapy and self-work, I want to share my updated progress...',
          anonymous: true,
        },
      },
    },
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully updated the testimonial.',
    type: Testimonial,
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request. Validation failed for the provided input.',
  })
  @ApiResponse({
    status: 404,
    description: 'The testimonial with the specified ID does not exist.',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal Server Error.',
  })
  update(
    @Param('id') id: string,
    @Body() updateTestimonialDto: UpdateTestimonialDto,
  ) {
    return this.testimonialService.update(+id, updateTestimonialDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a testimonial by ID' })
  @ApiParam({
    name: 'id',
    description: 'The ID of the testimonial to delete',
    type: 'number',
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully deleted the testimonial.',
  })
  @ApiResponse({
    status: 404,
    description: 'The testimonial with the specified ID does not exist.',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal Server Error.',
  })
  remove(@Param('id') id: string) {
    return this.testimonialService.remove(+id);
  }

  @Get('author/:authorId')
  @ApiOperation({ summary: 'Retrieve all testimonials by author ID' })
  @ApiParam({
    name: 'authorId',
    description: 'The ID of the author whose testimonials to retrieve',
    type: 'number',
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description:
      'Successfully retrieved testimonials for the specified author.',
    type: [Testimonial],
  })
  @ApiResponse({
    status: 404,
    description: 'No testimonials found for the specified author.',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal Server Error.',
  })
  findByAuthor(@Param('authorId') authorId: string) {
    return this.testimonialService.findByAuthor(+authorId);
  }
}
