import React, { useEffect } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './components/MainPage';
import ProductsGrid from './components/ProductsGrid';
import Review from './components/Review';
import RentHistory from './components/RentHistory';
import Favourites from './components/Favourites';
import SignInSide from './components/SignIn';
import CreateAccountSide from './components/CreateAccount';
import RentDetail from './components/RentDetail';
import Billing from './components/Billing';
import PhoneDetail from './components/PhoneDetail';
import ProductsGridPrice from './components/ProductsGridPrice';
import ProductsGridFilter from './components/ProductsGridFilter';
import UserProfile from './components/UserProfile';



import './styles/App.css';

async function getDatos() {
    const response = await fetch("https://gist.githubusercontent.com/dburgos26/a09fc5108186b8ce6bd0e7c5a38b2432/raw/e6e879db208b06c15647c94df54f26b352dd4f72/cellphones.json");
    const data = await response.json();
    return data;
}

export default function App() {

    useEffect(() => {
        async function fetchData() {
          const data = await getDatos();
          console.log(data);

          localStorage.setItem("phoneList", JSON.stringify(data));

          data.forEach((cellphone) => {
            localStorage.setItem(`cel${cellphone.id}`, JSON.stringify(cellphone));
          });
        }
        fetchData();
      }, []);

    return (
        <div className="App">
            <Header />
            
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage />} />   
                    <Route path="/products" element={<ProductsGrid titleText={"Nuestros Productos"} />} />
                    <Route path="/iPhone" element={<ProductsGrid titleText={"iPhone"} />} />
                    <Route path="/Samsung" element={<ProductsGrid titleText={"Samsung"} />} />
                    <Route path="/Huawei" element={<ProductsGrid titleText={"Huawei"} />} />
                    <Route path="/Xiaomi" element={<ProductsGrid titleText={"Xiaomi"} />} />
                    <Route path="/Register" element={<CreateAccountSide />} />
                    <Route path="/Login" element={<SignInSide />} />
                    <Route path="/Favourites" element={<Favourites />} />
                    <Route path="/RentHistory" element={<RentHistory />} />
                    <Route path="/products/:productId" element={<PhoneDetail />} />
                    <Route path="/products/:productId/review" element={<Review />} />
                    <Route path="/products/:productId/rent" element={<RentDetail />} />
                    <Route path="/products/:productId/billing" element={<Billing />} />
                    <Route path="/user" element={<UserProfile name="juan" email="juan@gmail.com" />} />

                    // TODO: Arreglar
                    <Route path="/ProductsGridPrice" element={<ProductsGridPrice />} />
                    <Route path="/ProductsGridFilter" element={<ProductsGridFilter brand={"Apple"}/>} />
                </Routes> 
            </BrowserRouter>

            <Footer />
        </div>
    );
}