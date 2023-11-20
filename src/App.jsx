import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { CssBaseline } from '@mui/material';
import { Home } from "./views/home";
import { ShoppingCart } from "./views/shopping-cart";
import { Login } from './views/login';
import { NotFound } from './views/not-found';

const App = ()=> {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Header/>
        <hr style={{ marginTop: "10em" }} />
        <Routes>
            <Route exact path="/" element={<Login />} />
            <Route  path="/home" element={<Home />} />
            <Route path="/shop" element={<ShoppingCart />} />
            <Route path='*' element={<Navigate to='/error/404' />} />
            <Route path='/error/404' element={<NotFound/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;