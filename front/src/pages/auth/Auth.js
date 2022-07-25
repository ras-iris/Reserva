import Login from "./Login"
import Signup from "./Signup"

const Auth = () => {
  return (
    <div className="auth">
      <div className="container">
        <div className="left">
          <div className="top">
            <a href="index.html" className="logo">
              <svg xmlns="http://www.w3.org/2000/svg" width="99.808" height="100.116" viewBox="0 0 99.808 100.116">
                <g transform="translate(-481.5 -329.384)">
                  <line x2="35" transform="translate(481.5 428.5)" fill="none" stroke="#fff" strokeWidth="2" />
                  <path d="M489.49,428.5V388.511l18.541-18.541,56.9,25.563V428.5H550.882V400.744L527.1,390.55l-19.064,10.194V428.5" fill="none" stroke="#fff" strokeWidth="2" />
                  <path d="M580.308,428.5V349.422l-40.935-18.848-4.306,4.031-9.536,8.927V428.5h9.718l-.183-93.9" fill="none" stroke="#fff" strokeWidth="2" />
                </g>
              </svg>
            </a>
            <h2>Bienvenue</h2>
            <p>Faciliter votre vie quotidienne avec nous !</p>
          </div>
          <ul className="features">
            <li>Réserver n'importe où</li>
            <li>Plus besoin de se déplacer</li>
            <li>Ne perdez pas de temps ;)</li>
          </ul>
        </div>
        <div className="right">
          <div className="head">
            <div className="top-button">
              <button>Se connecter</button>
              <button>S'inscrire</button>
            </div>
            <div className="tip">
              Vous n'avez pas de <a href="a">compte</a> ?
            </div>
          </div>
          <Login />
          {/* <Signup /> */}
        </div>
      </div>
    </div>
  )
}

export default Auth