import {Body, Controller, Delete, Get, Param, Patch, Post, Query, NotFoundException, UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';
import { CreateUSerDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UsersService } from './users.service';

@Controller('auth')
export class UsersController {

 constructor(private usersService:UsersService){}

 @Post('/signup')
 createUser(@Body() body:CreateUSerDto){
    return this.usersService.create(body.email, body.name, body.password);
 }

 @UseInterceptors(ClassSerializerInterceptor)
 @Get('/:id')
 findUser(@Param('id') id: string){
    const user= this.usersService.findOne(parseInt(id));
    if(!user){
        throw new NotFoundException('user not found');
    }

    return  user;
 }

 @Get()
 findAllUsers(@Query('email') email:string){
     return this.usersService.find(email);
 }

 @Delete('/:id')
 removeUser(@Param('id') id:string){
   return this.usersService.remove(parseInt(id));
 }


 @Patch('/:id')
 updateUser(@Param('id') id:string, @Body() body: UpdateUserDto){
    return this.usersService.update(parseInt(id),body);
 }


}
