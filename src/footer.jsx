import React, { useContext, useState } from 'react'
import Meucontexto from './context'

function Footer() {
    const[valor_do_input,setvalor_do_input]=useState(['Your email'])
   const {teste}=useContext(Meucontexto)
  

    return(
        
        <div className='Footer'>
            <div className='Quick_Links'>
            <h3>Quick Links</h3>
            <p>{teste}</p>
            <p>Contact Us</p>
            <p>Blog</p>
            <p>Refunding Politic</p>
           
           
            </div>
            <div className='Promoçoes'>
                <h2>Be in The Know</h2>
                <p>Promotions,new product and sales.Directly to your inbox.</p>
                <input value={valor_do_input} onClick={()=>{setvalor_do_input(['']) }}
                  onChange={(e)=>{setvalor_do_input([e.target.value])}} type="text"  />

                <button onClick={()=>{
                 
                    window.alert('The News are going submit to andress email :'+ valor_do_input)}} id='Subscribe'>Subscribe</button>

            </div>


        </div>

    )
    
}
export default Footer