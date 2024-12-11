import { useState } from 'react';
import './style.css';

export function Seller(props){

    const affiliate_code = props.affiliate_code;
    const storeUrl = `https://oficinadotenista.com.br/?totem=true&tracking=${affiliate_code}`;
    //const userImgUrl = "https://oficinadotenista.com.br/image/totem/"+props.iconLetter+".png";

    const affiliateLetter = props.name.charAt(0).toUpperCase();

    const key = props.id;
    const id  = props.id.replace(".","");

    const selectSeller = props.callbackFunction;
   
    const [selected, setSelected] = useState(false);


    function preSelectSeller(id,key) {
        var selectedEl = document.querySelectorAll("a");
        var especificEl = document.querySelector(`#${id}`);
        for(var i = 0; i < selectedEl.length; i++){
            selectedEl[i].classList.remove("selected");
        }
        especificEl.classList.add("selected");
        setSelected(!selected);
        selectSeller(key);
        
    }

    return (
        <div key={key}>
            <a onClick={()=>preSelectSeller(id,key)} id={id}  >
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