import { Injectable } from '@nestjs/common';
import { PgService } from '@postgres';
import { createCategoryRequest, updateCategoryRequest } from './interfaces';
import { ApiFeature } from '@utils';

@Injectable()
export class CategoryService {
  constructor(private readonly postgres: PgService) {}

  async getAllCategories(queries: Record<string, any>): Promise<any> {
    // // ApiFeature Utilsiz Get qilish
    // return await this.postgres.fetchData(`SELECT * FROM category;`);

    // // ApiFeature Utili bilan get qilish
    const query = new ApiFeature("category")
    .paginate(queries?.page || 1, queries?.limit || 10)
    .limitFields(queries?.fields ? queries.fields.split(',') : ['*'])
    .sort(queries?.sort)
    .getQuery();
    // console.log(query)
    const data = await this.postgres.fetchData(query.queryString);
    return {
      limit: query.limit,
      page: query.page,
      data,
    };
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
