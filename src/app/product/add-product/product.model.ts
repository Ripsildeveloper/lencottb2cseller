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
<<<<<<< HEAD
=======
    skuCode: string;
>>>>>>> e3a0ea67d1a5f738a38e1638bb7476413ad5f053
    skuCodeVerify: boolean;
    bulletPoints: string;
    productImageName: [string];
    superCategoryId: string;
    mainCategoryId: string;
    subCategoryId: string;
    size: [Size];
    spPrice: String;
    mrpPrice: String;
<<<<<<< HEAD
=======
    moq: Number;
    /* mfdQty: Number; */
    mfdQtyEditing: Boolean;
>>>>>>> e3a0ea67d1a5f738a38e1638bb7476413ad5f053
    // details
    material: string;
    weight: string;
    height: string;
    occassion: string;
}
