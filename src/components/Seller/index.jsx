//import React,{useState} from 'React';
import './style.css';

export function Seller(props){

    const storeUrl = "https://oficinadotenista.com.br/?totem=true&tracking="+props.affiliate_code;
    //const userImgUrl = "https://oficinadotenista.com.br/image/totem/"+props.iconLetter+".png";

    const affiliateLetter = props.name.charAt(0).toUpperCase();

    return (
        <div>
            <a href={storeUrl} className="gmail">
                <div className="icon">
                    <div className='affiliateLetter'>{affiliateLetter}</div>
                </div>

                <div className="content">
                <h1>{props.name}</h1>
                <span>{props.mail}</span>
                </div>
                
                <svg className="arrow" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"> <g className="nc-icon-wrapper" fill="#444444"> <path d="M17.17 32.92l9.17-9.17-9.17-9.17L20 11.75l12 12-12 12z"></path> </g> </svg>
            </a>
        </div> 
    )
}