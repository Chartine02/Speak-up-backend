import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ArticleService {
  constructor(private prisma: PrismaService) {}

  async create(createArticleDto: CreateArticleDto) {
    const article = await this.prisma.article.create({
      data: {
        title: createArticleDto.title,
        content: createArticleDto.content,
        category: createArticleDto.category,
        authorId: createArticleDto.authorId,
      },
    });
    return article;
  }

  async findAll() {
    const articles = await this.prisma.article.findMany({
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

    return articles;
  }

  async findOne(id: number) {
    const article = await this.prisma.article.findUnique({
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

    return article;
  }

  async update(id: number, updateArticleDto: UpdateArticleDto) {
    const article = await this.prisma.article.update({
      where: { id },
      data: {
        title: updateArticleDto.title,
        content: updateArticleDto.content,
        category: updateArticleDto.category,
        authorId: updateArticleDto.authorId,
      },
    });
    return article;
  }

  async remove(id: number) {
    const article = await this.prisma.article.delete({
      where: { id },
    });
    return article;
  }

  async findByAuthor(authorId: number) {
    const articles = await this.prisma.article.findMany({
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

    return articles;
  }

  async findByCategory(category: string) {
    const articles = await this.prisma.article.findMany({
      where: { category },
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

    return articles;
  }
}
