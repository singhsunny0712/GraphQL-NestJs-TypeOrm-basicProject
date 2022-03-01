import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOwnerInput } from './dto/create-owner.input';
import { UpdateOwnerInput } from './dto/update-owner.input';
import { Owner } from './entities/owner.entity';

@Injectable()
export class OwnersService {

  constructor(@InjectRepository(Owner) private ownersRepository: Repository<Owner>){}

  create(createOwnerInput: CreateOwnerInput) {
    const newOwner=this.ownersRepository.create(createOwnerInput);

    return this.ownersRepository.save(newOwner);
  }

  findAll() {
    return this.ownersRepository.find();
  }

  findOne(id: number) {
    return this.ownersRepository.findOne(id);
  }

  update(id: number, updateOwnerInput: UpdateOwnerInput) {
    return ;
  }

  remove(id: number) {
    return `This action removes a #${id} owner`;
  }
}
