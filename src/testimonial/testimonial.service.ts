import { Injectable } from '@nestjs/common';
import { CreateTestimonialDto } from './dto/create-testimonial.dto';
import { UpdateTestimonialDto } from './dto/update-testimonial.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TestimonialService {
  constructor(private prisma: PrismaService) {}

  async create(createTestimonialDto: CreateTestimonialDto) {
    const testimonial = await this.prisma.testimonial.create({
      data: {
        title: createTestimonialDto.title,
        story: createTestimonialDto.story,
        anonymous: createTestimonialDto.anonymous || false,
        authorId: createTestimonialDto.authorId,
      },
    });
    return testimonial;
  }

  async findAll() {
    const testimonials = await this.prisma.testimonial.findMany({
      include: {
        author: {
          select: {
            id: true,
            username: true,
            email: true,
          },
        },
      },
    });

    return testimonials.map((testimonial) => {
      if (testimonial.anonymous) {
        return {
          ...testimonial,
          author: undefined,
        };
      }
      return testimonial;
    });
  }

  async findOne(id: number) {
    const testimonial = await this.prisma.testimonial.findUnique({
      where: { id },
      include: {
        author: {
          select: {
            id: true,
            username: true,
            email: true,
          },
        },
      },
    });

    if (testimonial.anonymous) {
      return {
        ...testimonial,
        author: undefined,
      };
    }

    return testimonial;
  }

  async update(id: number, updateTestimonialDto: UpdateTestimonialDto) {
    const testimonial = await this.prisma.testimonial.update({
      where: { id },
      data: {
        title: updateTestimonialDto.title,
        story: updateTestimonialDto.story,
        anonymous: updateTestimonialDto.anonymous,
        authorId: updateTestimonialDto.authorId,
      },
    });
    return testimonial;
  }

  async remove(id: number) {
    const testimonial = await this.prisma.testimonial.delete({
      where: { id },
    });
    return testimonial;
  }

  async findByAuthor(authorId: number) {
    const testimonials = await this.prisma.testimonial.findMany({
      where: { authorId },
      include: {
        author: {
          select: {
            id: true,
            username: true,
            email: true,
          },
        },
      },
    });

    return testimonials.map((testimonial) => {
      if (testimonial.anonymous) {
        return {
          ...testimonial,
          author: undefined,
        };
      }
      return testimonial;
    });
  }
}
