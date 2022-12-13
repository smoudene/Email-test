import React, { useState } from 'react';
import './style.css'

const SendEmail = () => {
    const [fields, setFields] = useState({})
 

  const getValues = (event) =>{
        setFields({...fields,[event.target.name] : event.target.value})
  }
  const SendEmail = (event) =>{
    event.preventDefault()
    const config = {
        SecureToken: 'f1a360d4-bfe7-48b1-968b-edab92291f84',
        To : fields.email,
        From : "camagru2020@gmail.com",
        Subject : fields.subject,
        Body : fields.body
    }
    if(window.Email){
        window.Email.send(config).then(
             alert("email sent"),
             window.location.reload())
    }
}

  return (
    <div class="grid h-screen place-items-center">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/3" onSubmit={SendEmail}>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            Email du Destinataire 
          </label>
          <input class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"  
            type="email"
            name='email' 
            value={fields.email || ''}
            onChange={getValues}
          />
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="Sujet">
            Sujet
          </label>
          <input class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
            type="text"  
            name='subject' 
            value={fields.subject || ''}
            onChange={getValues}
          />
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="Sujet">
            Message 
          </label>
          <textarea class="shadow appearance-none  rounded w-full h-28 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text"  
          name='body'
          value={fields.body || ''}
          onChange={getValues} 
          />
        </div>

        <div class="flex items-center justify-between">
          <input class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-20 w-2/4 rounded focus:outline-none focus:shadow-outline" value='Envoyer' type="submit" />
        </div>
      </form>
</div>
  );
}
export default SendEmail;