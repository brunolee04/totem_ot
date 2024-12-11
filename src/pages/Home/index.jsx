import './style.css'

import {Seller} from '../../components/Seller'

import React,{useState,useEffect} from "react"

import axios from "axios"


export function Home(){


    const urlAffiliates  = 'https://oficinadotenista.com.br/index.php?route=feed/affiliate/getAffiliates';

    const otAffiliateUrl = 'https://oficinadotenista.com.br/?totem=true&tracking=@affiliate_code@';
    const ruAffiliateUrl = 'https://raquetesusadas.com.br/?totem=true&tracking=@affiliate_code@';

    const [sellers,setSellers] = useState([]);
    const [thisSeller,setThisSeller] = useState(null);
  
    

    function AddSellers(){
        useEffect(()=>{
            const newSellers = [];
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


    window.addEventListener('load',AddSellers());
   
   function selectSeller(seller_id) {
    setThisSeller(seller_id);
   }

   function handleRedirect(storeUrl) {
        if(thisSeller === null){
            alert('selecione um vendedor');
        }else{
            const uri = storeUrl.replace('@affiliate_code@',thisSeller);
            window.location.replace(uri);
        }
   }
 
    return (
        <div className="contact-area">
            <div className="contact">
                    <main>
                        <section>
                            <div className="content">
                                <div id='totemImg'>
                                    <img src="https://oficinadotenista.com.br/image/totem/logo_ot_totem3.fw.png" alt="Logo do Totem da OT"/>
                                </div>
                                

                                <aside>
                                    <h1>Oficina do Tenista</h1>
                                    <p>Por favor, selecione seu nome na lista e, em seguida, inicie a sessão na loja desejada.</p>
                                </aside>
                            </div>

                            <div className="title active"><p>Não se esqueça de finalizar a sessão quando encerrar o uso no totem.</p></div>
                        </section>
                    </main>

                    <nav className='active'>
                        {
                            sellers.map(seller =><Seller name={seller.name} key={seller.key} mail={seller.mail} affiliate_code={seller.affiliate_code} id={seller.affiliate_code} iconLetter={seller.iconLetter} callbackFunction={selectSeller}/>)
                        }
                    </nav>

                    <nav  className='active buttons'>
                        <div className="row">
                            <div className="col-md-6">
                                <a className="btn btn-default btn-ot" onClick={() => handleRedirect(otAffiliateUrl)}>
                                    <img src='src/assets/logo_ot_totem2.png' className='' />
                                    <span className='btnText'>Iniciar Sessão</span>
                                </a>
                            </div>

                            <div className="col-md-6">
                                <a className="btn btn-default btn-ru" onClick={() => handleRedirect(ruAffiliateUrl)}>
                                    <img src='src/assets/logo_ru_totem2.png' className='' />
                                    <span className='btnText'>Iniciar Sessão</span>
                                </a>
                            </div>
                        </div>
                    </nav>
            </div>
        </div>
        
    )
}