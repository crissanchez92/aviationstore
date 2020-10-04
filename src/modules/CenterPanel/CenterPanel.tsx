import React, {  } from "react";
import { CardColumns } from "react-bootstrap";
import { ItemCard } from "../../components/ItemCard";
import { Product } from "../../models/Product";

interface CenterPanelProps {
    products: Product[];
}

export const CenterPanel: React.FC<CenterPanelProps> = (props) => {
    return (
        <CardColumns>
            {props.products.map((product: Product, index: number) => {
                return(
                    <ItemCard 
                        key={index}
                        imageSrc={product.imageSrc} 
                        title={product.name}
                        text={product.details}/>
                );
            })}
        </CardColumns>
    );
}