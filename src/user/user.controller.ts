import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { UserService } from './user.service';
import { User } from './intefaces/user.interface';

@Controller('user')
export class UserController {

  constructor(private readonly userservice: UserService){}

  @Get()
  async getAllUser(): Promise<User[]> {
    return null;
  }

  @Post()
  async createUser(@Body() createUser: CreateUserDto): Promise<User> {
    return {
      ...createUser,
      id: 1,
      password: undefined,
    };
  }
}
