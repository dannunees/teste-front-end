import React, { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import type { Product } from "../types/Product";
import { ProductsService } from "../services/ProductsService";

interface ProductsContextType {
  products: Product[];
  loading: boolean;
  error: string | null;
  selectedProduct: Product | null;
  setSelectedProduct: (product: Product | null) => void;
  fetchProducts: () => Promise<void>;
}

const ProductsContext = createContext<ProductsContextType | undefined>(
  undefined,
);

interface ProductsProviderProps {
  children: ReactNode;
}

export const ProductsProvider: React.FC<ProductsProviderProps> = ({
  children,
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const fetchProducts = async (): Promise<void> => {
    setLoading(true);
    setError(null);

    try {
      const response = await ProductsService.getProducts();

      if (response.success && response.products) {
        setProducts(response.products);
      } else {
        throw new Error("Failed to fetch products: Invalid response format");
      }
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Unknown error occurred";
      setError(errorMessage);
      console.error("Error fetching products:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const value: ProductsContextType = {
    products,
    loading,
    error,
    selectedProduct,
    setSelectedProduct,
    fetchProducts,
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = (): ProductsContextType => {
  const context = useContext(ProductsContext);
  if (context === undefined) {
    throw new Error("useProducts must be used within a ProductsProvider");
  }
  return context;
};
