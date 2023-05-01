export class CreateUserDto {
  name: string;
  cpf: string;
  siape: string;
  dateOfBirth: Date;
  email: string;
  city: string;
  permissionToLeaveEarly: boolean;
  permissionToEnterOnOtherShift: boolean;
  onSchool: boolean;
  shift: string;
  qrCode: string;
}
