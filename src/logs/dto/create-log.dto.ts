import { IsInt, IsNotEmpty, IsPositive } from 'class-validator';

export class CreateLogDto {
  @IsNotEmpty()
  @IsInt()
  @IsPositive()
  userId: number;
}
