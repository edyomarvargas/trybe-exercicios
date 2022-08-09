import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form>
        <fieldset>
          <legend>Dados pessoais</legend>
          <div>
            <input name='name' type='text' maxLength='40' required></input>
          </div>

          <div>
            <input name='email' type='email' maxLength='50' required></input>
          </div>

          <div>
            <input name='cpf' type='text' maxLength='11' required></input>
          </div>

          <div>
            <input name='endereco' type='text' maxLength='200' required></input>
          </div>

          <div>
            <input name='cidade' type='text' maxLength='28' required></input>
          </div>

          <div>
            <select name='estado' required >
              <option>ES</option>
              <option>MG</option>
              <option>RJ</option>
              <option>SP</option>
            </select>
          </div>

          <div>
            <label htmlFor='casa'>
              <input name='complemento' type='radio' id='casa' value='casa'></input>
            Casa
            </label>

            <label htmlFor='apartamento'>
              <input name='complemento' type='radio' id='apartamento' value='apartamento'></input>
            Apartamento
            </label>
          </div>
          

        </fieldset>
      </form>
    );
  }
}

export default Form;