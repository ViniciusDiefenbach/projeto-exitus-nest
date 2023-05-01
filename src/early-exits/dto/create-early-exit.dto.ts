import { IsDateString, IsInt, IsNotEmpty, IsPositive } from 'class-validator';

export class CreateEarlyExitDto {
  @IsNotEmpty()
  @IsInt()
  @IsPositive()
  userId: number;
  @IsDateString()
  start: Date;
  @IsDateString()
  end: Date;
}
