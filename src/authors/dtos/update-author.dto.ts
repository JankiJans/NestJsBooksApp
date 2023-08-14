import { IsNotEmpty, Length, IsString} from 'class-validator';

export class UpdateAuthorDTO {
  @IsNotEmpty()
  @IsString()
  @Length(10, 30)
  name: string;

  @IsNotEmpty()
  @IsString()
  @Length(1, 5)
  country: string;
}
