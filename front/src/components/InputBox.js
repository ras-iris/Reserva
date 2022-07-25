import { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const InputBox = ({ id, label, type, value, setValue }) => {
  const [focus, setFocus] = useState(value === '' ? false : true)
  const [showPwd, setShowPwd] = useState(false)

  return (
    <div className="input-box">
      <label htmlFor={id} className={focus ? 'focused' : ''} >{label}</label>
      <input
        type={type === "password" ? (showPwd ? 'text' : 'password') : type}
        id={id}
        name={id}
        onFocus={() =>
          setFocus(true)
        }
        onBlur={(e) => {
          if (!e.target.value) {
            setFocus(false)
          }
        }}
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      {
        type === 'password' ?
          (
            <button
              className='eye'
              type='button'
              onClick={() => setShowPwd(!showPwd)}
            >
              {
                showPwd ?
                  <FaEyeSlash />
                  : <FaEye />
              }
            </button>
          )
          : ''
      }
    </div>
  )
}

export default InputBox