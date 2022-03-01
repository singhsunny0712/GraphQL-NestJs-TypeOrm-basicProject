import { Resolver,Query, Args, Mutation, Int, Parent } from '@nestjs/graphql';
import { PetsService } from './pets.service';
import { Pet } from './pet.entity'; 
import { CreatepetInput } from './dto/create-pet.input';
import { Owner } from 'src/owners/entities/owner.entity';


@Resolver()
export class PetsResolver {

    constructor(private petService: PetsService){}

    @Query(returns => Pet)
    getPet(@Args('id',{type:()=> Int}) id:number ):Promise<Pet>{
        return this.petService.findOne(id);
    }

    @Query(returns => [Pet])
    pets(): Promise<Pet[]>{
        return this.petService.findAll();
    }

    @Query((returns)=>[Pet])
    owner(@Parent() pet: Pet):Promise<Owner>{
        return this.petService.getOwner(pet.ownerId);
    }

    @Mutation(returns => Pet)
    createPet(@Args('createPetInput') createPetInput: CreatepetInput) : Promise<Pet>{
        return this.petService.createPet(createPetInput);
    }



}
