import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Testapi } from './entity/testapi.entity';
import { TestapiDto } from './dto/testapi.dto';

@Injectable()
export class TestapiService {
    constructor(
        @InjectRepository(Testapi)
        private readonly testDBRepository: Repository<Testapi>,
    ) {}

    async findAll(): Promise<Testapi[]> {
        return this.testDBRepository.find();
    }

    async create(testDBDto: TestapiDto): Promise<Testapi> {
        const testDB = this.testDBRepository.create(testDBDto);
        return this.testDBRepository.save(testDB);
    }
}

