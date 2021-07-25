import React from 'react'
import Header from './Header'
import Footer from './footer'
import {useParams} from 'react-router-dom'
function Paginacompra() {

    
  const all_products = {
    zebra: {id: 'zebra', nome: ' Zebra', preço:7999, img:'/imagens/zebra.jpg' },
    urso: {id: 'urso', nome: 'urso t3ddy', img: '/imagens/urso.jpg', preço:12999},
    girafa: {id: 'girafa', nome: 'girafa', img: '/imagens/girafa.jpg', preço:3999},
    leao:{id:'leao',nome:'leão',img:'/imagens/leao.jpg',preço:4999},
    tigre:{id:'tigre',nome:'Tigre',img:'/imagens/tigre.jpg',preço:7999},
    cobra:{id:'cobra',nome:'Cobra',img:'/imagens/cobra.jpg',preço:12999},
  
  }

  const {id} = useParams()
  const compararid2 = all_products[id]  

    return(

  <>
            <Header/> 
    <div className='paginacompra'>
            <img src={compararid2.img}/>
            <h2>Produto:{compararid2.nome}</h2>
            <h3> Preço:{compararid2.preço}</h3>
            <h1>Produto adicionado ao carrinho !!</h1>

     </div>
        <Footer/>
        </>
    )
    
}
export default Paginacompra