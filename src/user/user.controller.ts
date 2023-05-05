import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Patch,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { User } from '@prisma/client';
import { plainToInstance } from 'class-transformer';
import { GetUser } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';
import { UpdateUserDto, UserDto } from './dto';
import { UserService } from './user.service';

@UseGuards(JwtGuard)
@ApiTags('Users')
@ApiBearerAuth()
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: 'Retrieves logged-in user info' })
  @ApiOkResponse({
    description: 'User info retrieved successfully',
    type: UserDto,
  })
  @ApiUnauthorizedResponse({
    description: 'Error: Unauthorized',
    type: UnauthorizedException,
  })
  @Get('me')
  getMe(@GetUser() user: User) {
    return plainToInstance(UserDto, user);
  }

  @ApiOperation({ summary: 'Update logged-in user info' })
  @ApiOkResponse({
    description: 'User info updated successfully',
    type: UserDto,
  })
  @ApiBadRequestResponse({
    description: 'Error: Bad requuest',
    type: BadRequestException,
  })
  @ApiUnauthorizedResponse({
    description: 'Error: Unauthorized',
    type: UnauthorizedException,
  })
  @Patch()
  editUser(@GetUser('id') userId: number, @Body() dto: UpdateUserDto) {
    return this.userService.editUser(userId, dto);
  }
}
