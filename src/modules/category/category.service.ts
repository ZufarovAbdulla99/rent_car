import { Injectable } from '@nestjs/common';
import { PgService } from 'src/postgres/pg.service';
import { createCategoryRequest, updateCategoryRequest } from './interfaces';

@Injectable()
export class CategoryService {
  constructor(private readonly postgres: PgService) {}

  async getAllCategories(): Promise<any[]> {
    return await this.postgres.fetchData(`SELECT * FROM category;`);
  }

  async getCategory(categoryId: number): Promise<any> {
    return await this.postgres.fetchData(
      `
            SELECT * FROM category WHERE id = $1
            `,
      categoryId,
    );
  }

  async createCategory(payload: createCategoryRequest): Promise<any> {
    const newCategory = await this.postgres.fetchData(
      `
        INSERT INTO category (name, description) VALUES
        ($1, $2)
        `,
      payload.name,
      payload.description
    );

    return `Successfully created category`;
  }

  async updateCategory(categoryId: number, payload: updateCategoryRequest): Promise<any> {
    const updatedCategory = await this.postgres.fetchData(
      `
        UPDATE category
        SET name = $2, description = $3
        WHERE id = $1;
        `,
      categoryId,
      payload.name,
      payload.description
    );

    return `Successfully updated category`;
  }

  async deleteCategory(categoryId: number): Promise<any> {
    await this.postgres.fetchData(
      `
        DELETE FROM category WHERE id = $1;
        `,
      categoryId,
    );

    return `Successfully deleted category`;
  }

  async deleteAllCategories(): Promise<any> {
    await this.postgres.fetchData(`
        TRUNCATE TABLE category;
        `);

    return `Successfully deleted all categories`;
  }
}
