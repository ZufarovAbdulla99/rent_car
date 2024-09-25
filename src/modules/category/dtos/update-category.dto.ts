// type updateCategoryType<T> = {
//     [K in keyof T]?: T[K]
// }

import { IsNotEmpty, IsString } from "class-validator";

export declare class updateCategoryDto {
    @IsString()
    name: string;

    @IsString()
    description: string
}