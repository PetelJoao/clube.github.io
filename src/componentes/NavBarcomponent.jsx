import react from 'react';
import Estilo from "./NavbarComponentStyle.module.css";

const  Navbarcomponent =({Clubes,Vendass,Sobres}) =>
    {

        const handleClick = (referencia) => {

            referencia.current.scrollIntoView({ behavior: 'smooth'});
            
        
          };
        
        return (

            <nav className={Estilo.header}>
                
                <h1>.Company interprise</h1>
                <div className={Estilo.RightSide}>
                      
                    <div className={Estilo.RightChild} >

                        <ul className={Estilo.lists}>

                            <li   onClick={ () =>handleClick(Clubes)}>
                             
                               Clube
                            </li>

                            <li onClick={ () =>handleClick(Vendass)}>
                                Vedas de apartamentos
                            </li>

                            <li className={Estilo.lisobre} onClick={ () =>handleClick(Sobres)}>
                                Sobre Nós
                            </li>
                        </ul>
                    </div>

                </div>

            </nav>

        );
    }

export default Navbarcomponent