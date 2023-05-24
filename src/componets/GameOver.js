import './GameOver.css';

const GameOver = ({retry, score}) => {
  return (
    <div className='gameOver'>
      <h1>FIM DE JOGO</h1>
      <h2>A sua pontuação foi: <span>{score}</span></h2>
      <button  onClick={retry}>JOGAR NOVAMENTE</button>
    </div>
  )
}

export default GameOver
