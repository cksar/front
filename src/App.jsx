import { useDispatch, useSelector } from 'react-redux'
import { fetchHello } from './features/hello/helloSlice'

function App() {
  const dispatch = useDispatch()
  const { message, status } = useSelector((state) => state.hello)

  return (
    <div style={{ padding: 40 }}>
      <h1>Teste de Integração</h1>

      <button onClick={() => dispatch(fetchHello())}>
        Testar conexão com API
      </button>

      <p>Status: {status}</p>
      <h2>{message}</h2>
    </div>
  )
}

export default App