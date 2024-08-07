import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

  constructor(
      @InjectRepository(User)
      private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const newUser = await this.userRepository.create(createUserDto)
    return this.userRepository.save(newUser)
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(id: string): Promise<User> {
      return this.userRepository.findOneBy({ email : id });
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
      await this.userRepository.update(id, updateUserDto);
      return this.userRepository.findOneBy({ email : id });
  }

  async remove(id: string): Promise<void> {
      await this.userRepository.delete(id);
  }
}
