import { Injectable } from '@nestjs/common';
import { PgService } from '@postgres';
import { createCarRequest, updateCarRequest } from './interfaces';
import { ApiFeature } from '@utils';

@Injectable()
export class CarService {
  constructor(private readonly postgres: PgService) {}

  async getAllCars(queries: Record<string, any>): Promise<any> {
    // // ApiFeature Utilisiz get qilish
    // return await this.postgres.fetchData(`SELECT * FROM car;`);

    // // ApiFeature Utili bilan get qilish
    const query = new ApiFeature("car")
    .paginate(queries?.page || 1, queries?.limit || 10)
    .limitFields(queries?.fields ? queries.fields.split(",") : ['*'])
    .sort(queries?.sort || 'vin')
    .getQuery()
    console.log(query)
    const data = await this.postgres.fetchData(query.queryString);
    return {
      limit: query.limit,
      page: query.page,
      data,
    }
  }

  async getCar(carId: string): Promise<any> {
    return await this.postgres.fetchData(
      `
            SELECT * FROM car WHERE VIN = $1
            `,
      carId,
    );
  }

  async createCar(payload: createCarRequest): Promise<any> {
    const newCar = await this.postgres.fetchData(
      `
        INSERT INTO car (VIN, description, color, brand, model, purchase_date, category_id) VALUES
        ($1, $2, $3, $4, $5, $6, $7)
        `,
      payload.VIN,
      payload.description,
      payload.color,
      payload.brand,
      payload.model,
      payload.purchase_date,
      payload.category_id,
    );

    return `Successfully created car`;
  }

  async updateCar(carId: string, payload: updateCarRequest): Promise<any> {
    const updatedCar = await this.postgres.fetchData(
      `
        UPDATE car
        SET description = $2, color = $3, brand = $4, model = $5, purchase_date = $6, category_id = $7
        WHERE VIN = $1;
        `,
      carId,
      payload.description,
      payload.color,
      payload.brand,
      payload.model,
      payload.purchase_date,
      payload.category_id,
    );

    return `Successfully updated car`;
  }

  async deleteCar(carId: string): Promise<any> {
    await this.postgres.fetchData(
      `
        DELETE FROM car WHERE VIN = $1;
        `,
      carId,
    );

    return `Successfully deleted car`;
  }

  async deleteAllCars(): Promise<any> {
    await this.postgres.fetchData(`
        TRUNCATE TABLE car;
        `);

    return `Successfully deleted all cars`;
  }
}
