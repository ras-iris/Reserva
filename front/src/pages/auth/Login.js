import { useState } from 'react'
import InputBox from '../../components/InputBox'

const Login = () => {
  const [name1, setName1] = useState('')
  const [name2, setName2] = useState('')
  const [email, setEmail] = useState('')
  const [pwd, setPwd] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className='login'>
      <form onSubmit={handleSubmit}>
        <InputBox id='name1-input' label='Votre Nom' type='text' setValue={setName1} value={name1} />
        <InputBox id='name2-input' label='Votre Prénom' type='text' setValue={setName2} value={name2} />
        <InputBox id='email-input' label='Votre Email' type={'email'} setValue={setEmail} value={email} />
        <InputBox id='password-input' label='Votre Mot de passe' type='password' value={pwd} setValue={setPwd} />
        <div className="forgot">
          <a href='a'>Mot de passe oublié ?</a>
        </div>
        <div className="submit-section">
          <button className='submit'>Se connecter</button>
        </div>
      </form>
    </div>
  )
}

export default Login