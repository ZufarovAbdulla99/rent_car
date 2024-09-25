import { IsAlpha, IsAlphanumeric, IsNotEmpty, IsNumber, IsString, Length, Min, MinLength } from "class-validator";

export declare class updateCarDto {
    @Length(7, 7)
    @IsAlphanumeric()
    VIN: string;

    @MinLength(5)
    @IsString()
    description: string;

    @IsAlpha()
    @Length(3, 20)
    color: string;

    @IsString()
    @Length(3, 20)
    brand: string;

    @IsString()
    @Length(3, 20)
    model: string;

    @IsString()
    @Length(10, 10)
    purchase_date: string;

    @IsNumber()
    @Min(1)
    category_id: number
}