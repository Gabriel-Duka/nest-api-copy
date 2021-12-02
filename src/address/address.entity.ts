import { Field, ID, ObjectType } from "@nestjs/graphql";
import { isUUID } from "class-validator";
import { isNullableType } from "graphql";
import { type } from "os";
import { User } from "src/user/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Address {

    @PrimaryGeneratedColumn("uuid")
    @Field(() => ID)
    id: string;

    @ManyToOne((type) => User,
        {
            createForeignKeyConstraints: false
        })
    @JoinColumn()
    user: User;

    @Column({
        type: "varchar",
        length: 500
    })
    street: string;

    @Column({
        type: "varchar",
        length: 11
    })
    number: string;

    @Column({
        type: "varchar",
        length: 500
    })
    neightborhood: string;

    @Column({
        type: "varchar",
        length: 500
    })
    zip_code: string;

    @Column({
        type: "varchar",
        length: 500,
        nullable: true
    })
    complement: string;

    @Column({
        type: "varchar",
        length: 500
    })
    city: string;

    @Column({
        type: "varchar",
        length: 2
    })
    uf: string;
}