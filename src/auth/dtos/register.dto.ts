import { IsNotEmpty, Length, IsString, IsEmail } from 'class-validator';
import { Match } from 'src/utils/match.decorator';

export class RegisterDTO {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @Length(4, 40)
  password: string;

  @IsNotEmpty()
  @IsString()
  @Length(4, 40)
  @Match('password')
  passwordRepeat: string;
}
