import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundError } from 'rxjs';
import { Address } from 'src/address/address.entity';
import { Repository } from 'typeorm';
import { CreateUserImput } from './dto/create-user.input';
import { UpdateUserImput } from './dto/update-user.input';
import { User } from './user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) { }

    async findAllUsers(): Promise<User[]> {
        const users = await this.userRepository.find();
        return users;
    }

    async findUserById(id: string): Promise<User> {
        const user = await this.userRepository.findOne(id);
        if (!user) {
            throw new NotFoundException('Não achei.')
        }
        return user;
    }

    async createUser(data: CreateUserImput): Promise<User> {
        const user = this.userRepository.create(data);
        const userSaved = await this.userRepository.save(user);

        if (!userSaved) {
            throw new InternalServerErrorException('Deu pau criando usuário.')
        }
        return userSaved;
    }

    async updateUser(id: string, data: UpdateUserImput): Promise<User> {
        const user = await this.findUserById(id);

        await this.userRepository.update(user, { ...data });

        const userUpdated = this.userRepository.create({ ...user, ...data });
        return userUpdated;
    }

    async deleteUser(id: string): Promise<boolean> {
        const user = await this.findUserById(id);

        const deleted = await this.userRepository.delete(user);

        if (deleted) {
            return true;
        }
        return false;
    }
}
