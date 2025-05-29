import { PostgresService } from '../shared/postgres.service';
import { Injectable } from '@nestjs/common';

type Cart = {
  id: number;
  user_id: number;
  created_at: Date;
  store_id: number;
  active: boolean;
};

@Injectable()
export class CartService {
  constructor(private readonly postgresService: PostgresService) {}

  async addToCart(userId: number, productId: number, quantity: number) {
    return {
      id: 1,
    };
  }

  async getCart(userId: number) {
    const result = await this.postgresService.client.query<Cart>(
      `SELECT * FROM carts WHERE user_id = $1 AND active = true`,
      [userId],
    );

    return result.rows[0] ?? null;
  }
}
