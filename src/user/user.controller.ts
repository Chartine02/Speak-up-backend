import { Controller, Get, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiOperation({ summary: 'Retrieve all users' })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved all users.',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal Server Error.',
  })
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retrieve a user by ID' })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved the user.',
  })
  @ApiResponse({
    status: 404,
    description: 'The user with the specified ID does not exist.',
  })
  @ApiResponse({
    status: 500,
    description:
      'Internal Server Error. An unexpected error occurred while processing the request.',
  })
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a user by ID' })
  @ApiResponse({
    status: 200,
    description: 'Successfully updated the user.',
  })
  @ApiResponse({
    status: 400,
    description:
      'Bad Request. Validation errors. Ensure all required fields are provided and valid.',
  })
  @ApiResponse({
    status: 404,
    description: 'The user with the specified ID does not exist.',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal Server Error.',
  })
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a user by ID' })
  @ApiResponse({
    status: 200,
    description: 'Successfully deleted the user.',
  })
  @ApiResponse({
    status: 404,
    description: 'The user with the specified ID does not exist.',
  })
  @ApiResponse({
    status: 500,
    description:
      'Internal Server Error. An unexpected error occurred while processing the request.',
  })
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
