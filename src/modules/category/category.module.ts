import { Module } from "@nestjs/common";
import { CategoryService } from "./category.service";
import { PgService } from "@postgres";
import { CategoryController } from "./category.controller";

@Module({
    providers: [CategoryService, PgService],
    controllers: [CategoryController]
})

export class CategoryModule {}