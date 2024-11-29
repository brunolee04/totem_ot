import { useState } from 'react';
import './style.css';

export function Seller(props){

    const affiliate_code = props.affiliate_code;
    const storeUrl = `https://oficinadotenista.com.br/?totem=true&tracking=${affiliate_code}`;
    //const userImgUrl = "https://oficinadotenista.com.br/image/totem/"+props.iconLetter+".png";

    const affiliateLetter = props.name.charAt(0).toUpperCase();

    const selectSeller = props.callbackFunction;
    
    console.log('board game',selectSeller,props);

    const [selected, setSelected] = useState(false);

    function preSelectSeller() {
        selectSeller(affiliate_code);
        setSelected(!selected);
    }

    return (
        <div>
            <a onClick={preSelectSeller} className={selected ? 'selected' : ''} >
                <div className="icon">
                    <div className='affiliateLetter'>{affiliateLetter}</div>
                </div>

                <div className="content">
                    <h1>{props.name}</h1>
                    <span>{props.mail}</span>
                </div>
                
               
            </a>
        </div> 
    )
}