import { Module } from "@nestjs/common";
import { CategoryService } from "./category.service";
import { PgService } from "src/postgres/pg.service";
import { CategoryController } from "./category.controller";

@Module({
    providers: [CategoryService, PgService],
    controllers: [CategoryController]
})

export class CategoryModule {}