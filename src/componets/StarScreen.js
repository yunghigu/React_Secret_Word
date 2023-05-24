import './StartScreen.css';
import logo from '../assets/img/word.png'

const StarScreen = ({startGame}) => {
  return (
    <div className='start' >
        <img src={logo} alt="Word Logo" />
      <h1>SECRET WORD</h1>
      <p>*Clique no botão para começar a jogar</p>
      <button onClick={startGame}>Começar o jogo</button>
    </div>
  )
}

export default StarScreen;
