import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/header';
import { CssBaseline } from '@mui/material';
import { Home } from "./views/home";
import { ShoppingCart } from "./views/shopping-cart";
import { Login } from './views/login';

const App = ()=> {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Header />
        <hr style={{ marginTop: "12em" }} />
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route  path="/home" element={<Home />} />
          <Route path="/shop" element={<ShoppingCart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;