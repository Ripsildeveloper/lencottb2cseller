import { Size } from './size.model';
export class Product {
    _id: string;
    productId: string;
    productTitle: string;
    productName: string;
    productDescription: string;
    shortDescription: string;
    price: Number;
    color: string;
    styleCode: string;
    skuCodeVerify: boolean;
    bulletPoints: string;
    productImageName: [string];
    superCategoryId: string;
    mainCategoryId: string;
    subCategoryId: string;
    size: [Size];
    spPrice: String;
    mrpPrice: String;
    // details
    material: string;
    weight: string;
    height: string;
    occassion: string;
}
