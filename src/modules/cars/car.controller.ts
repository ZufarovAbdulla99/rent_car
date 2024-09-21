import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { CarService } from "./car.service";
import { createCarDto, updateCarDto } from "./dtos";

@Controller("/car")
export class CarController {
    constructor(private readonly carService: CarService){}

    @Get("/")
    async getAllCars(): Promise<any[]> {
        return await this.carService.getAllCars()
    }

    @Get("/:carId")
    async getCar(@Param("carId") carId: string): Promise<any> {
        return await this.carService.getCar(carId)
    }

    @Post("/add")
    async createCar(@Body() createCarData: createCarDto): Promise<any> {
        return await this.carService.createCar(createCarData)
    }

    @Patch("/update/:carId")
    async updateCar(@Param("carId") carId: string, @Body() updateCarData: updateCarDto): Promise<any> {
        return await this.carService.updateCar(carId, updateCarData)
    }

    @Delete("/delete/:carId")
    async deleteCar(@Param("carId") carId: string): Promise<any> {
        return await this.carService.deleteCar(carId)
    }

    @Delete("/delete")
    async deleteAllCars(): Promise<any> {
        return await this.carService.deleteAllCars()
    }
}