export interface Product {
  _id: string;
  name: string;
  imagePath: string;
  description: string;
  price: number;
  ingredients: {
    _id: string;
    name: string;
    icon: string;
  }[];
}
