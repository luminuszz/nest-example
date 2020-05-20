import { Controller, Post, Get, Body } from '@nestjs/common';
import { UserDTO } from './dtos/UserDTO';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  public async find() {
    const users = await this.usersService.findAll();

    return users;
  }

  @Post()
  public async create(@Body() data: UserDTO) {
    const newUser = await this.usersService.create(data);

    return newUser;
  }
}
