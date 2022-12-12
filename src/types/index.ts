export type AppState = {
  activeId: string;
  listImages: ProductListItem[];
  name: string;
  avatar: string;
  minimumOrderAmount: string;
  reviewScore: number;
  realAverageReviewScore: number;
  totalReviewCount: number;
  title: string;
  url: string;
  description: string;
  currency: string;
  price: string;
  variants: VariantItem[];
};

export type ProductListItem = {
  node: {
    id: string;
    modal: string;
    big: string;
    zoom: string;
    small: string;
    __typename: string;
  };
  __typename: string;
};

export type VariantItem = {
  node: {
    id: string;
    databaseId: string;
    inventory: number;
    inventoryPolicy: string;
    options: Array<{
      name: string;
      value: string;
      __typename: string;
    }>;
    width: string | null;
    height: string | null;
    length: string | null;
    weight: string | null;
    diameter: string | null;
    volume: string | null;
    barcode: string | null;
    sku: string;
    price: string;
    msrp: string;
    image: {
      id: string;
      __typename: string;
    };
    allergens: string | null;
    ingredients: string | null;
    __typename: string;
  };
};
