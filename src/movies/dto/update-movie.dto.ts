//import { IsString, IsNumber } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types'
import { CreateMovieDto } from './create-movie.dto';

// export class UpdateMovieDto {
//     @IsString()
//     readonly title?: string;

//     @IsNumber()
//     readonly year?: number;
    
//     @IsString({ each: true })
//     readonly generes?: string[];
// }

// or

export class UpdateMovieDto extends PartialType(CreateMovieDto) {}