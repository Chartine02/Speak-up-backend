import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBody,
  ApiParam,
} from '@nestjs/swagger';
import { Article } from './entities/article.entity';

@ApiTags('articles')
@Controller('articles')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new article' })
  @ApiBody({
    type: CreateArticleDto,
    description: 'Article data to create a new entry',
    examples: {
      default: {
        summary: 'Default example',
        description: 'A typical example of an article creation request',
        value: {
          title: 'Understanding Anxiety',
          content:
            'Anxiety is a common mental health condition characterized by...',
          category: 'MENTAL_HEALTH',
          authorId: 1,
        },
      },
      wellnessArticle: {
        summary: 'Wellness article',
        description: 'Example of creating a wellness article',
        value: {
          title: 'Mindfulness Practices',
          content:
            'Mindfulness is a practice that can help reduce stress and anxiety...',
          category: 'WELLNESS',
          authorId: 2,
        },
      },
    },
  })
  @ApiResponse({
    status: 201,
    description: 'The article has been successfully created.',
    type: Article,
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request. Validation failed for the provided input.',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal Server Error.',
  })
  create(@Body() createArticleDto: CreateArticleDto) {
    return this.articleService.create(createArticleDto);
  }

  @Get()
  @ApiOperation({ summary: 'Retrieve all articles' })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved all articles.',
    type: [Article],
  })
  @ApiResponse({
    status: 500,
    description: 'Internal Server Error.',
  })
  findAll() {
    return this.articleService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retrieve an article by ID' })
  @ApiParam({
    name: 'id',
    description: 'The ID of the article to retrieve',
    type: 'number',
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved the article.',
    type: Article,
  })
  @ApiResponse({
    status: 404,
    description: 'The article with the specified ID does not exist.',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal Server Error.',
  })
  findOne(@Param('id') id: string) {
    return this.articleService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update an article by ID' })
  @ApiParam({
    name: 'id',
    description: 'The ID of the article to update',
    type: 'number',
    example: 1,
  })
  @ApiBody({
    type: UpdateArticleDto,
    description: 'Partial article data to update an existing entry',
    examples: {
      titleUpdate: {
        summary: 'Update title only',
        description: 'Example of updating just the article title',
        value: {
          title: 'Updated: Understanding Anxiety',
        },
      },
      contentUpdate: {
        summary: 'Update content only',
        description: 'Example of updating the article content',
        value: {
          content:
            'Updated content about anxiety and its effects on mental health...',
        },
      },
      multipleFieldsUpdate: {
        summary: 'Update multiple fields',
        description: 'Example of updating multiple fields at once',
        value: {
          title: 'Anxiety Management Techniques',
          content:
            'Here are some proven techniques to manage anxiety symptoms...',
          category: 'SELF_HELP',
        },
      },
    },
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully updated the article.',
    type: Article,
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request. Validation failed for the provided input.',
  })
  @ApiResponse({
    status: 404,
    description: 'The article with the specified ID does not exist.',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal Server Error.',
  })
  update(@Param('id') id: string, @Body() updateArticleDto: UpdateArticleDto) {
    return this.articleService.update(+id, updateArticleDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an article by ID' })
  @ApiParam({
    name: 'id',
    description: 'The ID of the article to delete',
    type: 'number',
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully deleted the article.',
  })
  @ApiResponse({
    status: 404,
    description: 'The article with the specified ID does not exist.',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal Server Error.',
  })
  remove(@Param('id') id: string) {
    return this.articleService.remove(+id);
  }

  @Get('author/:authorId')
  @ApiOperation({ summary: 'Retrieve all articles by author ID' })
  @ApiParam({
    name: 'authorId',
    description: 'The ID of the author whose articles to retrieve',
    type: 'number',
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved articles for the specified author.',
    type: [Article],
  })
  @ApiResponse({
    status: 404,
    description: 'No articles found for the specified author.',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal Server Error.',
  })
  findByAuthor(@Param('authorId') authorId: string) {
    return this.articleService.findByAuthor(+authorId);
  }

  @Get('category/:category')
  @ApiOperation({ summary: 'Retrieve all articles by category' })
  @ApiParam({
    name: 'category',
    description: 'The category of articles to retrieve',
    type: 'string',
    example: 'MENTAL_HEALTH',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved articles for the specified category.',
    type: [Article],
  })
  @ApiResponse({
    status: 404,
    description: 'No articles found for the specified category.',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal Server Error.',
  })
  findByCategory(@Param('category') category: string) {
    return this.articleService.findByCategory(category);
  }
}
