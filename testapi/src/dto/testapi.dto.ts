import { IsString } from 'class-validator';

export class TestapiDto {
    @IsString()
    public name: string;

    @IsString()
    public content: string;
}
