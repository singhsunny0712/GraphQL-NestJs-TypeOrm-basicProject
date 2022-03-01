import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Owner } from '../owners/entities/owner.entity';
import { OwnersService } from '../owners/owners.service';
import { Repository } from 'typeorm';
import { CreatepetInput } from './dto/create-pet.input';
import { Pet } from './pet.entity'; 

@Injectable()
export class PetsService {

    constructor(@InjectRepository(Pet) private petsRepository: Repository<Pet>, private ownersservice: OwnersService){}

    async createPet(createPetInput: CreatepetInput) : Promise<Pet>{

        const newPet= this.petsRepository.create(createPetInput);

        return this.petsRepository.save(newPet);

    }

    async findAll(): Promise<Pet[]>{
        return this.petsRepository.find();
    }

    async findOne(id:number):Promise<Pet>{
        return this.petsRepository.findOneOrFail(id);
    }

    async getOwner(ownerId:number): Promise<Owner>{
        return this.ownersservice.findOne(ownerId);
    }

}
