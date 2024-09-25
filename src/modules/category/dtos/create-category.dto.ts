import { IsNotEmpty, IsString } from "class-validator";

export declare class createCategoryDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    description: string
}