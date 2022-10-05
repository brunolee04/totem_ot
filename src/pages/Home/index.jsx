import './style.css'

import {Seller} from '../../components/Seller'

export function Home(){

    const sellers = [
        {
            key: 1,
            name: "Jorge",
            mail: "jorge.teste@oficinadotenista.com.br",
            affiliate_code: "abcxsgaad",
            iconLetter: "j"
        },
        {
            key: 2,
            name: "Gabriela",
            mail: "gabi.oliveira@oficinadotenista.com.br",
            affiliate_code: "123645",
            iconLetter: "j"
        }
    ]

    return (
        <div className="contact-area">
        <div className="contact">
                <main>
                <section>
                    <div className="content">
                       <div id='totemImg'>
                            <img src="https://oficinadotenista.com.br/image/totem/logo_ot_totem.png" alt="Logo do Totem da OT"/>
                        </div>
                    

                    <aside>
                        <h1>Oficina do Tenista</h1>
                        <p>Vendedor, clique no botão correspondente ao seu nome para iniciar uma sessão de vendedor.</p>
                    </aside>
                    

                    </div>

                    <div className="title active"><p>Não se esqueça de finalizar a sessão quando encerrar o uso no Totem.</p></div>
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