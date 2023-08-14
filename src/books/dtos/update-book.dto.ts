import {
    IsInt,
    IsNotEmpty,
    Length,
    IsString,
    Min,
    IsUUID,
  } from 'class-validator';
  
  export class UpdateBookDTO {
    @IsNotEmpty()
    @IsUUID()
    @IsString()
    authorId: string;
  
    @IsNotEmpty()
    @IsString()
    @Length(10, 30)
    title: string;
  
    @IsNotEmpty()
    @IsInt()
    rating: number;
  
    @IsNotEmpty()
    @IsInt()
    @Min(0)
    price: number;
  }
  