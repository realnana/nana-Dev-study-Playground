import { Controller, Get, Post, Body, Param } from '@nestjs/common';

@Controller('msg')
export class MsgController {
    @Get()
    listMessages() {

    }

    @Post()
    createMessages(@Body() body: any) {
        console.log(body);
    }

    @Get('/id')
    getMessages(@Param('id') id: string) {
        console.log(id);
    }
}
