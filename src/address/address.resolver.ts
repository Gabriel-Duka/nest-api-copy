import { Args, Mutation, Resolver, Query, ID } from '@nestjs/graphql';
import { User } from 'src/user/user.entity';
import { Address } from './address.entity';
import { AddressService } from './address.service';
import { CreateAddresImput } from './dto/create-address.input';
import { UpdateAddresImput } from './dto/update-address.input';

@Resolver()
export class AddressResolver {
    constructor(
        private addressService: AddressService
    ) { }

    @Query(() => [Address])
    async addresses(): Promise<Address[]> {
        const addresses = await this.addressService.findAllAddresses();
        return addresses;
    }

    @Query(() => Address)
    async address(
        @Args('id') id: string
    ): Promise<Address> {
        const address = await this.addressService.findAddressById(id);
        return address;
    }

    @Mutation(() => Address)
    async createAddress(
        @Args('data') data: CreateAddresImput
    ): Promise<Address> {
        const address = await this.addressService.createAddress(data);
        return address;
    }

    @Mutation(() => Address)
    async updateAddress(
        @Args('data') data: UpdateAddresImput,
        @Args('id') id: string
    ): Promise<Address> {
        const address = await this.addressService.updateAddress(data, id);
        return address;
    }

    @Mutation(() => Boolean)
    async deleteAddress(
        @Args('id') id: string
        ): Promise<boolean>{
            const deleted = await this.addressService.deleteAddress(id);
            return deleted;
        }
}