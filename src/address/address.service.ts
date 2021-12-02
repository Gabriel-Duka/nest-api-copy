import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserService } from 'src/user/user.service';

import { Repository } from 'typeorm';
import { Address } from './address.entity';
import { CreateAddresImput } from './dto/create-address.input';
import { UpdateAddresImput } from './dto/update-address.input';

@Injectable()
export class AddressService {
    constructor(
        @InjectRepository(Address)
        private addressRepository: Repository<Address>,

        private readonly userService: UserService
    ){}

    async findAllAddresses(): Promise<Address[]>{
        const addresses = this.addressRepository.find();
        return addresses;
    }

    async findAddressById(id: string): Promise<Address>{
        const address = await this.addressRepository.findOne(id);
        if(!address){
            throw new NotFoundException('Não achei.')
        }
        return address;
    }

    async createAddress(data: CreateAddresImput): Promise<Address>{
        
        const address = this.addressRepository.create(data);
        const user = await this.userService.findUserById(data.userId);
        address.user = user;
        const addressSaved = await this.addressRepository.save(address);

        if(!addressSaved){
            throw new InternalServerErrorException('deu ruim salvando no banco')
        }
        return addressSaved;
    }

    async updateAddress(data: UpdateAddresImput, id: string): Promise<Address>{
        const address = await this.findAddressById(id);

        await this.addressRepository.update( address , { ...data});

        const addressUpdated = this.addressRepository.create({...address,...data})
        return addressUpdated;
    }

    async deleteAddress(id: string): Promise<boolean>{
        const address = await this.findAddressById(id);

        const deleted = await this.addressRepository.delete(address);

        if(deleted){
            return true
        }
        return false;

    }
}
