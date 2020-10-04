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

function AviationStore() {

  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [selectedType, setSelectedType] = useState<string|undefined>();

  const loadProducts = useCallback(() => {
    ProductsService.getProducts().then(theseProducts => setProducts(theseProducts));
  }, []);

  const filterProducts = useCallback(() =>{
    if(selectedType){
      const fp = products.filter(p => p.type === selectedType);
      setFilteredProducts(fp);
    }
  }, [selectedType, products]);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  useEffect(() => {
    filterProducts();
  }, [filterProducts]);

  function handleCategoryChanged(e: any){
    switch(e.target.value){
      case '1':
        setSelectedType('Gorra');
        break;
      case '2':
        setSelectedType('Llaveros');
        break;
      case '3':
        setSelectedType('Aviones');
        break;
      case '4':
        setSelectedType('Lanyards');
        break;
      case '5':
        setSelectedType('Lanyards');
        break;
      case '6':
        setSelectedType('Camisas');
        break;
      case '7':
        setSelectedType('Accesorios');
        break;
      case '8':
        setSelectedType('Juguetes');
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
          <CenterPanel products={filteredProducts}/>
        </Col>
      </Row>
    </Container>
  );
}

export default AviationStore;
