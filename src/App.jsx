import { useState } from 'react'
import React, { useRef } from 'react';

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Navbarcomponent from './componentes/NavBarcomponent.jsx'
import formulariocomponent from './componentes/formulariocomponent.jsx'
import Estilo from './componentes/NavbarComponentStyle.module.css'


function App() {

  const clube = useRef(null);
  const Venda_Apartamento =  useRef(null);
  const Sobre =  useRef(null);
  const FormularioRef = useRef(null);

  const handleClick = () => {

    FormularioRef.current.scrollIntoView({ behavior: 'smooth' });

  };


 
  return (
    <>

      <Navbarcomponent Clubes={FormularioRef} Vendass = {Venda_Apartamento} Sobres = {Sobre} >
      </Navbarcomponent>

      <div className={Estilo.First} id='carrosel'>

            <div className={Estilo.textDiv}>

                    <h1>
                    FAÇA PARTE DO NOSSO <p>CLUBE</p> 
                    </h1>
                    <button className={Estilo.btnAderir} onClick={handleClick} >Aderir{"->"}</button>
            </div>
        

      </div>

      <div className={Estilo.Imoveis}>

        <div className={Estilo.ImoveisCenter} ref={Venda_Apartamento}>
          
          <div className={Estilo.ImovelDescription}>

            <h1>Vivenda T3</h1>
            <div>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, omnis ex. Saepe harum ipsum velit ipsa porro? Veritatis dolores libero labore blanditiis placeat ipsa possimus quaerat harum assumenda? Obcaecati, aliquid.</p>
              <button className={Estilo.comprarCasa}>
                Comprar
             </button>

            </div>
          
          </div>

          <div className={Estilo.Imovelimage}>

          </div>

        </div>


        <div className={Estilo.ImoveisCenter}>

          <div className={Estilo.Imovelimage2}>

          </div>

            <div className={Estilo.ImovelDescription}>

              <h1>Vivenda T3</h1>
              <div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, omnis ex. Saepe harum ipsum velit ipsa porro? Veritatis dolores libero labore blanditiis placeat ipsa possimus quaerat harum assumenda? Obcaecati, aliquid.</p>
                <button className={Estilo.comprarCasa2}>
                Comprar
              </button>
              </div>

            </div>

         

        </div>


      </div>

     
      <div className={Estilo.Sobre}  ref={Sobre}>
        <div className={Estilo.SobreCenter}>

          <h1> Sobre Nós</h1>
          <div className={Estilo.SobreContent}>

            <div className={Estilo.SobreContentLeft}>

            </div>

            <div className={Estilo.SobreContentRight}>
                <h2>Nome da Empresa</h2>
                <div className={Estilo.SobreDivText}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dignissimos quam ducimus. Nostrum quasi mollitia laboriosam ratione voluptatem, ullam eveniet illum fugiat cupiditate neque. Facere libero ad repudiandae deserunt cum?
                </div>
             
            </div>


          </div>
         

        </div>
      </div>

      <div className={Estilo.formulario} ref={FormularioRef} >

          
        <div className={Estilo.FormularioVideo}>
         
          </div>

      <div className={Estilo.formcenter}>

        <div className={Estilo.FormularioEstrutura}>

          <h2>Efectuar Cadastro para o Clube</h2>

          <div>
            <label htmlFor="">Nome:</label>
            <input type='text'/>
          </div>

          
          <div>
            <label htmlFor="">Morada:</label>
            <input type='text'/>
          </div>

          
          <div>
            <label htmlFor="">Email:</label>
            <input type='text'/>
          </div>


          
          <div>
            <label htmlFor="">Telefone:</label>
            <input type='text'/>
          </div>

          
          <div>
            <label htmlFor="">Número do bilhete de Identidade:</label>
            <input type='text'/>
          </div>

          <div>

     
          <label htmlFor="estado-civil">Estado Civil:</label>
          <select>
            <option value="solteiro">Solteiro(a)</option>
            <option value="casado">Casado(a)</option>
            <option value="divorciado">Divorciado(a)</option>
            <option value="viuvo">Viúvo(a)</option>
          </select>
          </div>
          <button>Cadastrar</button>

          </div>
          
        </div>

       
      </div>


   
      


    </>

  )
  const carrosel = document.getElementById('carrosel');
  const bot = document.getElementById('proximo');

  function lsr()
  {carrosel.style.backgroundImage = url('./componentes/img6.jpg');  }

  bot.addEventListener('click',lsr);

}

export default App
