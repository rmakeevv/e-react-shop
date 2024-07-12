export interface IProduct {
    _id: string;
    name: string;
    brand: string;
    price: number;
    category: string;
    img: string;
    storage: string;
    resolution: string;
    camera: string;
    display: string;
    color: string;
}

export class ProductEntity implements IProduct {
    _id: string;
    name: string;
    brand: string;
    price: number;
    category: string;
    img: string;
    storage: string;
    resolution: string;
    camera: string;
    display: string;
    color: string;
}
