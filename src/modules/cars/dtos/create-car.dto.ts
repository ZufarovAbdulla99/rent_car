import { IsAlpha, IsAlphanumeric, IsNotEmpty, IsNumber, IsString, Length, Min, MinLength } from "class-validator";

export declare class createCarDto {
    @IsNotEmpty()
    @Length(7, 7)
    @IsAlphanumeric()
    VIN: string;

    @IsNotEmpty()
    @MinLength(5)
    @IsString()
    description: string;

    @IsNotEmpty()
    @IsAlpha()
    @Length(3, 20)
    color: string;

    @IsNotEmpty()
    @IsString()
    @Length(3, 20)
    brand: string;

    @IsNotEmpty()
    @IsString()
    @Length(3, 20)
    model: string;

    @IsNotEmpty()
    @IsString()
    @Length(10, 10)
    purchase_date: string;

    @IsNotEmpty()
    @IsNumber()
    @Min(1)
    category_id: number
}