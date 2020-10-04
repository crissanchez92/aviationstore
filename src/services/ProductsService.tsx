import { Product } from '../models/Product';
import { db } from '../modules/firebase/firebase'

export class ProductsService {

    static async getProducts(type: string | undefined = undefined): Promise<Product[]> {
        const snapshot = db.collection('products').get();
        const docs = (await snapshot).docs.map(doc => doc.data()) as Product[];
        return docs;

        const gorras = this.GenerateProducts('Gorra', 10);
        const aviones = this.GenerateProducts('Aviones', 8);
        const llaveros = this.GenerateProducts('Llaveros', 8);
        const lamparas = this.GenerateProducts('Lamparas', 8);
        const lanyards = this.GenerateProducts('Lanyards', 8);
        const camisas = this.GenerateProducts('Camisas', 8);
        const accesorios = this.GenerateProducts('Accesorios', 8);
        const juguetes = this.GenerateProducts('Juguetes', 8);

        let result: Product[] = [];
        
        switch(type){
            case 'Gorra':
                result = result.concat(gorras);
                break;
            case 'Aviones':
                result = result.concat(aviones);
                break;
            case 'Llaveros':
                result = result.concat(llaveros);
                break;
            case 'Lamparas':
                result = result.concat(lamparas);
                break;
            case 'Lanyards':
                result = result.concat(lanyards);
                break;
            case 'Camisas':
                result = result.concat(camisas);
                break;
            case 'Accesorios':
                result = result.concat(accesorios);
                break;
            case 'Juguetes':
                result = result.concat(juguetes);
                break;
            default:
                result = result
                .concat(gorras)
                .concat(aviones)
                .concat(llaveros)
                .concat(lamparas)
                .concat(lanyards)
                .concat(camisas)
                .concat(accesorios)
                .concat(juguetes)
                break;
        }

        return result;
    }

    private static GenerateProducts(type: string, count: number): Product[] {
        const randomProducts: Product[] = [];
        for(;count > 0; count--){
            randomProducts.push({
                type: type,
                name: `${type} ${count}`,
                price: this.randomIntFromInterval(100, 200),
                details: `Detalles de producto ${type} ${count}. Materiales, dimensiones, etc`,
                imageSrc: 'https://i2.wp.com/www.reclamador.es/blog/wp-content/uploads/2018/05/abandonar-avion-antes-despegue-reclamador.jpg?fit=1200%2C800&ssl=1',
            })
        }
        return randomProducts;
    }

    static randomIntFromInterval(min: number, max: number) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min);
      }
}