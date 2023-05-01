import {
  IsBoolean,
  IsDateString,
  IsEmail,
  IsIn,
  IsNotEmpty,
  Length,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @Length(3, 255)
  name: string;
  @IsNotEmpty()
  @Length(11)
  cpf: string;
  @Length(7)
  siape: string;
  @IsNotEmpty()
  @IsDateString()
  dateOfBirth: Date;
  @IsNotEmpty()
  @IsEmail()
  email: string;
  city: string;
  @IsNotEmpty()
  @IsBoolean()
  permissionToLeaveEarly: boolean;
  @IsNotEmpty()
  @IsBoolean()
  permissionToEnterOnOtherShift: boolean;
  @IsNotEmpty()
  @IsBoolean()
  onSchool: boolean;
  @IsNotEmpty()
  @IsIn(['morning', 'afternoon', 'evening'])
  shift: string;
  @IsNotEmpty()
  qrCode: string;
}
