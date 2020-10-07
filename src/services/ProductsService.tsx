import { Product } from '../models/Product';
import { ProductType } from '../models/ProductType';
import { db } from '../modules/firebase/firebase'

export class ProductsService {

    static async getProducts(type: string | undefined = undefined): Promise<Product[]> {
        const snapshot = db.collection('products').get();
        const docs = (await snapshot).docs.map(doc => doc.data()) as Product[];
        return docs;
    }

    static async getProductTypes() {
        const snapshot = db.collection('productTypes').get();
        const docs = (await snapshot).docs.map(doc => doc.data()) as ProductType[];
        return docs;
    }
}