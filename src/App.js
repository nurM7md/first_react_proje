import logo from './logo.svg';
import './App.css';
import Home from './components/home/home';
import Navs from './components/Navs/Navs';
import Category from './components/Products/Category';
import { Fragment } from 'react';
import Header2 from './components/header2/Header2';
import Category2 from './components/header2/Category2';
import Header3 from './components/header3/Header3';
import Footer from './components/Footer/Footer';


function App() {

  return (

    <Fragment>
      <Navs />
      <Home />
      <Category />
      <Header2 />
      <Category2 />
      <Header3 />
      <Footer />
    </Fragment>
  )

}

export default App;


