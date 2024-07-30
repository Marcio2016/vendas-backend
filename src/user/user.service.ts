import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { hash } from 'bcrypt';
import { Repository } from 'typeorm';

import { CreateUserDto } from './dtos/createUser.dto';
import { User } from './intefaces/user.interface';

@Injectable()
export class UserService {
    
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
   ){}

    async createUser(createUserDto: CreateUserDto): Promise<User> {
        const saltOrRounds = 10;
        const passwordHashed = await hash(createUserDto.password, saltOrRounds);

        
        return this.userRepository.save({
            ...createUserDto,
            password: passwordHashed,
        });

    }

    async getAllUser(): Promise<User[]> {
        return this.userRepository.find();
    }
}
