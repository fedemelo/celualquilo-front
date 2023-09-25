import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './components/MainPage';
import ProductsGrid from './components/productsExposed';
import Header from './components/Header';
import Footer from './components/Footer';
import GoBack from './components/GoBack';
import Review from './components/Review';
import Breadcrumb from './components/BreadCrumb';
import RentHistory from './components/RentHistory';
import ProductsGrid from './components/ProductsGrid';
import Favourites from './components/Favourites';
import ProductsGridFilter from './components/ProductsGridFilter';
import ProductsGridPrice from './components/ProductGridPrice';
import './styles/App.css';
import UserProfile from './components/UserProfile';

import SignInSide from './components/SignIn';
import CreateAccountSide from './components/CreateAccount';
import SignInSide from './components/SignIn';
import Favourites from './components/Favourites';
import RentHistory from './components/RentHistory';
import Review from './components/Review';
import RentDetail from './components/RentDetail';
import Billing from './components/Billing';

import './styles/App.css';


export default function App() {
    return (
        <div className="App">
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage />} />   
                    <Route path="/products" element={<ProductsGrid titleText={"Nuestros Productos"} />} />
                    <Route path="/IPhone" element={<ProductsGrid titleText={"IPhone"} />} />
                    <Route path="/Samsung" element={<ProductsGrid titleText={"Samsung"} />} />
                    <Route path="/Huawei" element={<ProductsGrid titleText={"Huawei"} />} />
                    <Route path="/Xiaomi" element={<ProductsGrid titleText={"Xiaomi"} />} />
                    <Route path="/Register" element={<CreateAccountSide />} />
                    <Route path="/Login" element={<SignInSide />} />
                    <Route path="/Favourites" element={<Favourites />} />
                    <Route path="/RentHistory" element={<RentHistory />} />
                    <Route path="/products/:productId" element={<Review />} />
                    <Route path="/products/:productId/rent" element={<RentDetail />} />
                    <Route path="/products/:productId/billing" element={<Billing />} />
                </Routes> 
            </BrowserRouter>
            <Footer />
        </div>
    );
}