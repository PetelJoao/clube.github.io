import React from "react";
import Estilo from "./NavbarComponentStyle.module.css";

function formulariocomponent()
{
    return(
        
<div className={Estilo.formcenter}>
            <div className={Estilo.FormularioEstrutura}>

          <h2>Assinar Contrato</h2>

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
          <button> Assinar Contrato</button>
          </div>
         
        </div>
    );

}

export default formulariocomponent