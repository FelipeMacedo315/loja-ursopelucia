import react, { useState } from 'react'
import Header from './Header'
import Produtos from './produtos'
import {Link}from 'react-router-dom'
import Footer from './footer'
function Mestre() {

 
    
    return(
       <>
       <Header/>
       
        <div className='todos_os_produtos'>


        <Link style={{textDecoration:'none'}} target='_blank' to='/products/zebra'> 
        <div  className='zebra'>
            <img src='/imagens/zebra.jpg'/>
            <p >zebra </p>
            <p >preço:$49.99</p>
        </div> </Link>

         <div className='urso'>
          <Link style={{textDecoration:'none'}}  target="_blank" to='/products/urso'>
          <img src='/imagens/urso.jpg'/>
            <p>urso</p>
            <p>preço:$249.99</p>
          </Link>
          </div>

         <div className='girafa'>
          <Link style={{textDecoration:'none'}} target='_blank' to='/products/girafa'>   <img src='/imagens/girafa.jpg'/>
            <p>girafa</p>
            <p>preço:$149.99</p></Link>
            </div>

            <div className='leao'>
          <Link style={{textDecoration:'none'}} target='_blank'  to='/products/leao'>   <img src='/imagens/leao.jpg'/>
            <p>leão</p>
            <p>preço:$149.99</p></Link>
            </div>

            <div  className='tigre'>
          <Link style={{textDecoration:'none'}} target='_blank'  to='/products/tigre'>  <img src='/imagens/tigre.jpg'/>
            <p>tigre</p>
            <p>preço:$79.99</p></Link>
            </div>

          <div className='cobra'>
          <Link style={{textDecoration:'none'}} target='_blank'  to='/products/cobra'>
            <img src='/imagens/cobra.jpg'/>
            <p>cobra</p>
            <p>preço:$79.99</p></Link>
            </div>
          
            </div>
            <Footer/>


    
        </>
    )
      
}
export default Mestre