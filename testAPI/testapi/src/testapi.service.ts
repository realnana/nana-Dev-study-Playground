import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Testapi } from './entity/testapi.entity';
import { TestapiDto } from './dto/testapi.dto';

@Injectable()
export class TestapiService {
    constructor(
        @InjectRepository(Testapi)
        private readonly testapiRepository: Repository<Testapi>,
    ) {}

    async findAll(): Promise<Testapi[]> {
        return this.testapiRepository.find();
    }

    async create(TestapiDto: TestapiDto): Promise<Testapi> {
        const testapi = this.testapiRepository.create(TestapiDto);
        return this.testapiRepository.save(testapi);
    }
}

