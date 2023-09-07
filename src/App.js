import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Account from './page/account';
import Home from './page/home';
import Login from './page/login';
import Payment from './page/payment';
import Register from './page/register';
import TopUp from './page/top-up';
import Transaction from './page/transaction';

function App() {
  // const token = Cookies.get('jwtToken')

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/register' element={<Register/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/transaction' element={<Transaction/>}/>
        <Route path='/top-up' element={<TopUp/>}/>
        <Route path='/account' element={<Account/>}/>
        <Route path='/account' element={<Account/>}/>
        <Route path='/payment/:id' element={<Payment/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
