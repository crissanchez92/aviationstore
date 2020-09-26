import { StringLiteral } from "typescript";
import { ProductType } from "./ProductType";

export interface Product {
    type: ProductType;
    name: string;
    price: number;
    details: string;
    imageSrc: string;
}