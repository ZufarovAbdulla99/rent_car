import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UseInterceptors } from "@nestjs/common";
import { CategoryService } from "./category.service";
import { createCategoryDto, updateCategoryDto } from "./dtos";
import { LoggingInterceptor } from "src/interceptors/logging-interceptor";


@Controller("/category")
@UseInterceptors(LoggingInterceptor)
export class CategoryController {
    constructor(private readonly categoryService: CategoryService){}

    @Get("/")
    async getAllCategories(@Query() queries: Record<string, string>): Promise<any[]> {
        return await this.categoryService.getAllCategories(queries)
    }

    @Get("/:categoryId")
    async getCategory(@Param("categoryId") categoryId: string): Promise<any> {
        return await this.categoryService.getCategory(+categoryId)
    }

    @Post("/add")
    async createCategory(@Body() createCarData: createCategoryDto): Promise<any> {
        return await this.categoryService.createCategory(createCarData)
    }

    @Patch("/update/:categoryId")
    async updateCategory(@Param("categoryId") categoryId: string, @Body() updateCarData: updateCategoryDto): Promise<any> {
        return await this.categoryService.updateCategory(+categoryId, updateCarData)
    }

    @Delete("/delete/:categoryId")
    async deleteCategory(@Param("categoryId") categoryId: string): Promise<any> {
        return await this.categoryService.deleteCategory(+categoryId)
    }

    @Delete("/delete")
    async deleteAllCategories(): Promise<any> {
        return await this.categoryService.deleteAllCategories()
    }
}