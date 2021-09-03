import React from "react";


const Form = () => {
    return (
    <form>
       <fieldset>
           <div>
            <label>Nome</label> 
             <input type='text' name='nome' id='nome'/>
           </div>

           <label>Sobrenome</label>
           <input type='text' name='sobrenome' id='sobrenome'/>
        </fieldset> 

        <div>
            <label>Email</label>
            <input type='email' name='email' id='email'/>
        </div>

            <div>
            <label>Telefone</label>
            <input type='telefone' name='telefone' id='telefone'/>
        </div>
        <div>
            <label>Escolha o seu estabelecimento?</label>
        <label>
            <input type='radio' name='devweb' id='frontend' checked/>São Paulo
        </label>
        <label>
            <input type='radio' name='devweb' id='frontend'/>Santos
        </label>  
        </div>
    </form>


    )

}
export default Form;

 