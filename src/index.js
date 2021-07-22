import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header  from './Header.jsx'
import Mestre from './Mestre'
import{BrowserRouter,Switch,Route} from'react-router-dom'
import Produtos from './produtos';
import Meucontexto from './context'
import Footer from './footer'



ReactDOM.render(


 <BrowserRouter>

 <Switch>
   <Route exact path='/'component={Mestre}/>
   <Route path='/products/:id' component={Produtos} />
  
  
  
 </Switch>

 </BrowserRouter>

   
  
 ,
  document.getElementById('root')
)