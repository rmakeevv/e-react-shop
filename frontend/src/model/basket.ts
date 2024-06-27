import { IProduct } from './product';

export interface IBasketItem extends IProduct {
    basketItemId: number;
}
