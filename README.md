# Teste Prático - Vaga Desenvolvedor Front-End

## O Projeto

Este é um teste técnico para a vaga de Desenvolvedor Front-End na Econverse. Desenvolvi uma página de e-commerce completa com vitrine de produtos, seguindo fielmente o design fornecido e implementando todas as funcionalidades solicitadas.

## Objetivo do Teste

O teste avalia minhas competências em:

- React com TypeScript para desenvolvimento front-end
- Integração com APIs externas e tratamento de CORS
- Arquitetura de componentes com CSS Modules
- Gerenciamento de estado com Context API
- Estilização avançada com SCSS
- Componentes interativos (modal, carousel)
- Boas práticas de código e organização

## O que Implementei

### E-commerce Funcional

- **Vitrine de produtos**: Consumo de API externa com tratamento de erros
- **Modal de produto**: Exibição detalhada ao clicar em qualquer produto
- **Carousel de navegação**: Seta esquerda/direita para explorar produtos
- **Layout responsivo**: 100% fiel ao design original

### Arquitetura Técnica

- **ProductsContext**: Gerenciamento centralizado de estado dos produtos
- **ProductsService**: Camada de serviço para chamadas API
- **FormatPrice**: Helper utilitário para formatação de preços
- **CSS Modules**: Escopo de estilos por componente
- **Proxy CORS**: Configuração no Vite para contornar limitações

## Tecnologias Utilizadas

- **React 18** + TypeScript para desenvolvimento
- **Vite** como build tool e servidor dev
- **SCSS** para pré-processamento de CSS
- **Axios** para requisições HTTP otimizadas

## Como Executar o Projeto

### Requisitos

- Node.js 16+
- npm ou yarn

### Passos

1. **Clone do repositório**

```bash
git clone [URL-do-projeto]
cd teste-front-end
```

2. **Instalação das dependências**

```bash
npm install
```

3. **Iniciar desenvolvimento**

```bash
npm run dev
```

Acesse `http://localhost:5173` no navegador

4. **Build para produção**

```bash
npm run build
```

## Estrutura do Código

```
src/
├── components/     # Componentes React reutilizáveis
│   ├── ProductCard/     # Cards de produtos
│   ├── ProductModal/    # Modal de detalhes
│   ├── Carousel/        # Navegação por carousel
│   └── ...             # Outros componentes
├── contexts/      # Gerenciamento de estado global
├── services/      # Camada de API e serviços
├── helpers/       # Funções utilitárias
├── types/         # Definições TypeScript
└── styles/        # Estilos globais e SCSS
```

## Destaques Técnicos

- **Tratamento de CORS**: Proxy configurado no Vite para desenvolvimento local
- **Tipagem completa**: 100% do código com interfaces TypeScript
- **Performance**: Otimizações com useMemo e lazy loading
- **Acessibilidade**: ARIA labels e navegação por teclado
- **Design System**: Cores, fontes e espaçamentos padronizados

Este projeto demonstra minha capacidade de transformar requisitos complexos em código limpo, funcional e bem estruturado.

- Utilizar Boas práticas de SEO
- Uso de HTML semântico

## O que avaliaremos em seu teste

- Organização do projeto
- Lógica do código
- Componentização
- Alcance dos objetivos propostos

**Boa sorte! ;)**
