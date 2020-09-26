import { Product } from '../models/Product';
import { ProductType } from '../models/ProductType';

export class ProductsService {

    static getProducts(type: ProductType | undefined = undefined): Product[] {
        const gorras = this.GenerateProducts(ProductType.Gorra, 10);
        const aviones = this.GenerateProducts(ProductType.Aviones, 8);
        const llaveros = this.GenerateProducts(ProductType.Llaveros, 8);
        const lamparas = this.GenerateProducts(ProductType.Lamparas, 8);
        const lanyards = this.GenerateProducts(ProductType.Lanyards, 8);
        const camisas = this.GenerateProducts(ProductType.Camisas, 8);
        const accesorios = this.GenerateProducts(ProductType.Accesorios, 8);
        const juguetes = this.GenerateProducts(ProductType.Juguetes, 8);

        let result: Product[] = [];
        
        switch(type){
            case ProductType.Gorra:
                result = result.concat(gorras);
                break;
            case ProductType.Aviones:
                result = result.concat(aviones);
                break;
            case ProductType.Llaveros:
                result = result.concat(llaveros);
                break;
            case ProductType.Lamparas:
                result = result.concat(lamparas);
                break;
            case ProductType.Lanyards:
                result = result.concat(lanyards);
                break;
            case ProductType.Camisas:
                result = result.concat(camisas);
                break;
            case ProductType.Accesorios:
                result = result.concat(accesorios);
                break;
            case ProductType.Juguetes:
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

    static GenerateProducts(type: ProductType, count: number): Product[] {
        const randomProducts: Product[] = [];
        for(;count > 0; count--){
            randomProducts.push({
                type: type,
                name: `${ProductType[type]} ${count}`,
                price: this.randomIntFromInterval(100, 200),
                details: `Detalles de producto ${ProductType[type]} ${count}. Materiales, dimensiones, etc`,
                imageSrc: 'https://i2.wp.com/www.reclamador.es/blog/wp-content/uploads/2018/05/abandonar-avion-antes-despegue-reclamador.jpg?fit=1200%2C800&ssl=1',
            })
        }
        return randomProducts;
    }

    static randomIntFromInterval(min: number, max: number) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min);
      }
}