import "./styles/global.scss";
import { Header } from "./components/Header/Header";
import { Banner } from "./components/Banner/Banner";
import { CategoryCard } from "./components/CategoryCard/CategoryCard";
import { ProductsSection } from "./components/ProductsSection/ProductsSection";
import { ProductsProvider } from "./contexts/ProductsContext";
import { PartnerBanner } from "./components/PartnerBanner/PartnerBanner";
import { BrandsCard } from "./components/BrandsCard/BrandsCard";
import { Newsletter } from "./components/Newsletter/Newsletter";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <ProductsProvider>
      <>
        <Header />
        <Banner
          title="Venha conhecer nossas promoções"
          subtitle={
            <>
              <strong>50% Off</strong> nos produtos
            </>
          }
          image="/assets/banner.png"
          buttonLabel="Ver produto"
        />

        <div className="categorys container">
          <CategoryCard title="Tecnologia" image="/assets/tecnologia.png" />
          <CategoryCard
            title="Supermercados"
            image="/assets/supermercados.png"
          />
          <CategoryCard title="Bebidas" image="/assets/whiskey.png" />
          <CategoryCard title="Ferramentas" image="/assets/ferramentas.png" />
          <CategoryCard title="Saúde" image="/assets/cuidados-de-saude.png" />
          <CategoryCard
            title="Esportes e Fitness"
            image="/assets/corrida.png"
          />
          <CategoryCard title="Moda" image="/assets/moda.png" />
        </div>

        <div className="productsContainer container">
          <h2 className="titleLine">Produtos Relacionados</h2>

          <ul className="tabsCategorys">
            <li>CELULAR</li>
            <li>ACESSÓRIOS</li>
            <li>TABLETS</li>
            <li>NOTEBOOKS</li>
            <li>TVS</li>
            <li>VER TODOS</li>
          </ul>

          <ProductsSection />
        </div>

        <div className="bannersContainer container">
          <PartnerBanner
            image="/assets/banner-parceiro.png"
            alt="Banner Parceiros"
            title="Parceiros"
            description="Lorem ipsum dolor sit amet, consectetur"
            linkText="CONFIRA"
            link="/"
          />
          <PartnerBanner
            image="/assets/banner-parceiro.png"
            alt="Banner Parceiros"
            title="Parceiros"
            description="Lorem ipsum dolor sit amet, consectetur"
            linkText="CONFIRA"
            link="/"
          />
        </div>

        <div className="productsContainer container">
          <h2 className="titleLine">Produtos Relacionados</h2>

          <a href="/" className="btnAll">
            Ver todos
          </a>

          <ProductsSection />
        </div>

        <div className="bannersContainer container">
          <PartnerBanner
            image="/assets/banner-parceiro.png"
            alt="Banner Parceiros"
            title="Parceiros"
            description="Lorem ipsum dolor sit amet, consectetur"
            linkText="CONFIRA"
            link="/"
          />
          <PartnerBanner
            image="/assets/banner-parceiro.png"
            alt="Banner Parceiros"
            title="Parceiros"
            description="Lorem ipsum dolor sit amet, consectetur"
            linkText="CONFIRA"
            link="/"
          />
        </div>

        <div className="brandsContainer container">
          <h2>Navegue por marcas</h2>
          <div className="brandsGrid">
            <BrandsCard image="/assets/logo-econverse.png" alt="Econverse" />
            <BrandsCard image="/assets/logo-econverse.png" alt="Econverse" />
            <BrandsCard image="/assets/logo-econverse.png" alt="Econverse" />
            <BrandsCard image="/assets/logo-econverse.png" alt="Econverse" />
            <BrandsCard image="/assets/logo-econverse.png" alt="Econverse" />
          </div>
        </div>

        <div className="productsContainer container">
          <h2 className="titleLine">Produtos Relacionados</h2>

          <a href="/" className="btnAll">
            Ver todos
          </a>

          <ProductsSection />
        </div>

        <Newsletter />
        <Footer />
      </>
    </ProductsProvider>
  );
}

export default App;
