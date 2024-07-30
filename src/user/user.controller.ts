import { Body, Controller, Get, Post } from '@nestjs/common';

import { CreateUserDto } from './dtos/createUser.dto';
import { User } from './entities/user.interface';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

  constructor(private readonly userservice: UserService){}

  @Get()
  async getAllUser(): Promise<User[]> {
    return null;
  }

  @Post()
  async createUser(@Body() createUser: CreateUserDto): Promise<User> {
    return this.userservice.createUser(createUser);
  }
}
