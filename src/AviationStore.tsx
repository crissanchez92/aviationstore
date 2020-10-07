import React, { useCallback, useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';
import { Product } from './models/Product';
import LeftMenu from './modules/LeftPanel/LeftMenu';
import { TopMenu } from './modules/TopMenu/TopMenu';
import { CenterPanel } from './modules/CenterPanel/CenterPanel';
import { ProductsService } from './services/ProductsService';
import { ProductType } from './models/ProductType';

function AviationStore() {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200)
  useEffect(() => {
    window.addEventListener("resize", () => {
      const ismobile = window.innerWidth < 1200;
      if (ismobile !== isMobile) setIsMobile(ismobile);
  }, false);
  }, [isMobile]);

  const [productTypes, setProductTypes] = useState<ProductType[]>([]);
  useEffect(() => {
    ProductsService.getProductTypes().then(theProductTypes => setProductTypes(theProductTypes));
  });

  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [selectedType, setSelectedType] = useState<string | undefined>();

  const loadProducts = useCallback(() => {
    ProductsService.getProducts().then(theseProducts => setProducts(theseProducts));
  }, []);

  const filterProducts = useCallback(() => {
    if (selectedType) {
      const fp = selectedType === 'Todas' ? products : products.filter(p => p.type === selectedType);
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

  function handleCategoryChanged(e: any) {
    setSelectedType(e.target.value);
  }

  const leftMenuXs = isMobile ? undefined : 2;
  const centerMenuXs = isMobile ? undefined : 10;

  return (
    <Container className="Container">
      <TopMenu />
      <Row>
        <Col xs={leftMenuXs} className="LeftPanel">
          <LeftMenu onCategoryChanged={handleCategoryChanged} productTypes={productTypes} />
        </Col>
        <Col xs={centerMenuXs} className="CenterPanel">
          <CenterPanel products={filteredProducts} />
        </Col>
      </Row>
    </Container>
  );
}

export default AviationStore;
