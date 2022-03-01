import { Exclude } from "class-transformer";
import { Entity, Column, PrimaryGeneratedColumn, AfterInsert, AfterUpdate, AfterRemove } from "typeorm";

@Entity()
export class User{

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    @Exclude()
    password: string;

    @AfterInsert()
    logInsert(){
        console.log('Inserted User with id',this.id);
        
    }

    @AfterUpdate()
    logUpdate(){
        console.log('Updated User with id',this.id);
        
    }

    @AfterRemove()
    logRemove(){
        console.log('Romoved User with id',this.id);
        
    }

}