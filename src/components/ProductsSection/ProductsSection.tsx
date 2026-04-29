import { useProducts } from "../../contexts/ProductsContext";
import { Carousel } from "../Carousel/Carousel";
import { ProductCard } from "../ProductCard/ProductCard";
import { ProductModal } from "../ProductModal/ProductModal";

export const ProductsSection = () => {
  const { products, loading, error, selectedProduct, setSelectedProduct } =
    useProducts();

  if (loading) {
    return (
      <>
        <h2 className="titleLine">Produtos Relacionados</h2>
        <p>Carregando produtos...</p>
      </>
    );
  }

  if (error) {
    return (
      <>
        <h2 className="titleLine">Produtos Relacionados</h2>
        <p>Erro ao carregar produtos: {error}</p>
      </>
    );
  }

  return (
    <>
      <Carousel>
        {products.map((product) => (
          <ProductCard
            key={product.productName}
            product={product}
            onClick={setSelectedProduct}
          />
        ))}
      </Carousel>

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
};
