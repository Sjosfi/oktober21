import { IsDefined, IsNumber, IsString, Min } from "class-validator";

export class CreateProductDto {
  @IsDefined()
  @IsString()
  name: string;

  @IsDefined()
  @IsNumber()
  @Min(1)
  price: number;
}
