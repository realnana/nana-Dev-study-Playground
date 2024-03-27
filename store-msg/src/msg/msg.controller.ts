import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-msg.dto';

@Controller('msg')
export class MsgController {
    @Get()
    listMessages() {

    }

    @Post()
    createMessage(@Body() body: CreateMessageDto) {
        console.log(body);
    }

    @Get('/id')
    getMessage(@Param('id') id: string) {
        console.log(id);
    }
}
