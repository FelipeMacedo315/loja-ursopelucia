
import React, { useCallback, useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import Header from './Header'
import Footer from './footer'
import Meucontexto from './context'
  
function Produtos() {
  const[carrinho_total,setcarrinho_total]=useState(0)
  const[teste,setteste]=useState('bla bla ')

  const all_products = {
    zebra: {id: 'zebra', nome: ' Zebra', preço:7999, img:'/imagens/zebra.jpg' },
    urso: {id: 'urso', nome: 'urso t3ddy', img: '/imagens/urso.jpg', preço:12999},
    girafa: {id: 'girafa', nome: 'girafa', img: '/imagens/girafa.jpg', preço:3999},
    leao:{id:'leao',nome:'leão',img:'/imagens/leao.jpg',preço:4999},
    tigre:{id:'tigre',nome:'Tigre',img:'/imagens/tigre.jpg',preço:7999},
    cobra:{id:'cobra',nome:'Cobra',img:'/imagens/cobra.jpg',preço:12999},
  
  }
const {id} = useParams()
const compararid = all_products[id] || all_products['zebra']  

  function addcarrinho (){
   setcarrinho_total(oldTotal => oldTotal + compararid.preço)
   
  }
        return(
          <>
        

          <Meucontexto.Provider value={{teste,setteste}}>
          <Header/>
             <div className='produto'>
              <img src={compararid.img} />
              <p>{compararid.nome} <br></br> {compararid.preco}</p>
              <button onClick={addcarrinho}>Comprar</button>
              <h1>{carrinho_total}</h1>
            </div>
            <Footer/>
            </Meucontexto.Provider>
            </>  
        )
}
export default Produtos