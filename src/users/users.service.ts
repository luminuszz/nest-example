import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './models/user.model';
import { UserDTO } from './dtos/UserDTO';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  public async findAll(): Promise<User[]> {
    const users = await this.usersRepository.find();

    return users;
  }

  public async create({ lastname, name }: UserDTO): Promise<User> {
    const newUser = this.usersRepository.create({
      name,
      lastname,
    });

    await this.usersRepository.save(newUser);

    return newUser;
  }
}
