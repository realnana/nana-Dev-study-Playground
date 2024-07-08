import { Controller, Get, Post, Body } from '@nestjs/common';
import { TestapiDto } from './dto/testapi.dto';
import { TestapiService } from './testapi.service';

@Controller('test')
export class TestapiController {
    constructor(private readonly testDBService: TestapiService) {}

    @Get()
    async findAll() {
        return this.testDBService.findAll();
    }

    @Post()
    async create(@Body() createTestDBDto: TestapiDto) {
        return this.testDBService.create(createTestDBDto);
    }
}
