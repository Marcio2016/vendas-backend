import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { User } from './intefaces/user.interface';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {

    private users: User[] = [];

    async createUser(createUserDto: CreateUserDto): Promise<User> {
        const saltOrRounds = 10;
        const passwordHashed = await hash(createUserDto.password, saltOrRounds);

        
        return null;

    }
}
