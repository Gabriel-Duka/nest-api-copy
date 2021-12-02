import { Field, ID, ObjectType } from "@nestjs/graphql";

import { Address } from "src/address/address.entity";
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class User {

    @PrimaryGeneratedColumn("uuid")
    @Field(() => ID)
    id: string;

    @Column({
        type: "varchar",
        length: 500
    })
    name: string;

    @Column()
    email: string;

    @OneToMany(() => Address,
        Address => Address.user,
        { eager: true })
    @JoinColumn()
    addresses?: Address[];

}