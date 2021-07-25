import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header  from './Header.jsx'
import Home from './home'
import{BrowserRouter,Switch,Route} from'react-router-dom'
import Produtos from './produtos';
import Meucontexto from './context'
import Footer from './footer'
import Paginacompra from './paginacompra'



ReactDOM.render(


 <BrowserRouter>

 <Switch>
   <Route exact path='/'component={Home}/>
   <Route path='/products/:id' component={Produtos} />
   <Route path='/paginacompra/:id' component={Paginacompra}/>
  
  
  
 </Switch>

 </BrowserRouter>

   
  
 ,
  document.getElementById('root')
)