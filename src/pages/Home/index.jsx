import './style.css'

import {Seller} from '../../components/Seller'

import React,{useState,useEffect} from "react"

import axios from "axios"


export function Home(){


    const urlAffiliates = 'https://oficinadotenista.com.br/index.php?route=feed/affiliate/getAffiliates';

    const [sellers,setSellers] = useState([]);
  
    const newSellers = [];

    function AddSellers(){
        useEffect(()=>{
            axios.get(urlAffiliates).then(response=>{
                response.data.map(seller => newSellers.push(
                    {
                        'key':seller.email,
                        'name':`${seller.firstname} ${seller.lastname}`,
                        'mail':seller.email,
                        'affiliate_code':seller.tracking,
                        'iconLetter':'j'
                    }),[]);
                   
                    setSellers(newSellers);
                  
            },[]);
        },[]);
       
        
      
    }

   // AddSellers();
    function printA(){
        console.log('xablau');
    }

    window.addEventListener('load',AddSellers());
   
   
 
    return (
        <div className="contact-area">
        <div className="contact">
                <main>
                <section>
                    <div className="content">
                       <div id='totemImg'>
                            <img src="https://oficinadotenista.com.br/image/totem/logo_ot_totem.fw.png" alt="Logo do Totem da OT"/>
                        </div>
                    

                    <aside>
                        <h1>Oficina do Tenista</h1>
                        <p>Vendedor(a), clique no botão correspondente ao seu nome para iniciar uma sessão na loja.</p>
                    </aside>
                    

                    </div>

                    <div className="title active"><p>Não se esqueça de finalizar a sessão quando encerrar o uso no totem.</p></div>
                </section>
                </main>

                <nav className='active'>
                    {
                        sellers.map(seller =><Seller name={seller.name} key={seller.key} mail={seller.mail} affiliate_code={seller.affiliate_code} iconLetter={seller.iconLetter}/>)
                    }
                    
                </nav>
        </div>
    </div>
        
    )
}