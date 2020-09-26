import React, { useCallback, useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
  Container,
  Row,
  Col} from 'react-bootstrap';
import {Product} from './models/Product';
import LeftMenu from './modules/LeftPanel/LeftMenu';
import { TopMenu } from './modules/TopMenu/TopMenu';
import { CenterPanel } from './modules/CenterPanel/CenterPanel';
import { ProductsService } from './services/ProductsService';
import { ProductType } from './models/ProductType';

function AviationStore() {

  const [products, setProducts] = useState<Product[]>([]);
  const [selectedType, setSelectedType] = useState<ProductType|undefined>();

  const loadProducts = useCallback(() => {
    const theseProducts: Product[] = ProductsService.getProducts(selectedType);
    setProducts(theseProducts);
  }, [selectedType]);

  useEffect(() => {
    loadProducts();
  }, [loadProducts, selectedType]);

  function handleCategoryChanged(e: any){
    switch(e.target.value){
      case '1':
        setSelectedType(ProductType.Gorra);
        break;
      case '2':
        setSelectedType(ProductType.Llaveros);
        break;
      case '3':
        setSelectedType(ProductType.Aviones);
        break;
      case '4':
        setSelectedType(ProductType.Lanyards);
        break;
      case '5':
        setSelectedType(ProductType.Lanyards);
        break;
      case '6':
        setSelectedType(ProductType.Camisas);
        break;
      case '7':
        setSelectedType(ProductType.Accesorios);
        break;
      case '8':
        setSelectedType(ProductType.Juguetes);
        break;
      default:
        alert('Action not registered');
        break;
    }
  }

  return (
    <Container className="Container">
      <TopMenu />
      <Row>
        <Col xs={2} className="LeftPanel">
          <LeftMenu onCategoryChanged={handleCategoryChanged}/>
        </Col>
        <Col xs={10} className="CenterPanel">
          <CenterPanel products={products}/>
        </Col>
      </Row>
    </Container>
  );
}

export default AviationStore;
