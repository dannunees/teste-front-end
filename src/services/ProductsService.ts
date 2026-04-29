import axios from "axios";
import type { Product, ProductsResponse } from "../types/Product";

const API_BASE_URL =
  "/api/teste-front-end/junior/tecnologia/lista-produtos/produtos.json";

export const ProductsService = {
  async getProducts(): Promise<ProductsResponse> {
    try {
      const response = await axios.get<ProductsResponse>(API_BASE_URL);
      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  },

  async getProductByName(productName: string): Promise<Product | null> {
    try {
      const response = await this.getProducts();
      const product = response.products.find(
        (p) => p.productName === productName,
      );
      return product || null;
    } catch (error) {
      console.error("Error finding product:", error);
      throw error;
    }
  },
};
