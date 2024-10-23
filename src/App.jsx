import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import MainPage from './pages/MainPage';
import ProductsPage from './pages/ProductsPage';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css'
import ProductDetail from './pages/ProductDetail';
import UndefinedPage from './pages/UndefinedPage';
import ElectricCars from './nestedRoutes/ElectricCars';
import Motor from './nestedRoutes/Motor';
import Layout from './nestedRoutes/Layout';
import HakkimizdaSayfa from './pages/HakkimizdaSayfa';

function App() {
  const [count, setCount] = useState(0)

  return (
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path='/' element={<MainPage/>} />
    <Route path='/ürünler' element={<ProductsPage/>} />
    <Route path='/hakkımızda' element={<HakkimizdaSayfa/>}/>
    <Route path='/ürün-detay/:productId' element={<ProductDetail />} />
    <Route path='/undefined/:errorCode' element={<UndefinedPage/>}/>

    <Route path='/arabalar' element={<Layout/>} >
      <Route path='elektrik' element={<ElectricCars/>} />
      <Route path='içten-yanma' element={<Motor/>} />
    </Route>
 
    <Route path='*' element={<UndefinedPage />} />
    
   </Routes>
   <Footer/>
   </BrowserRouter>
  );
}

export default App;
  