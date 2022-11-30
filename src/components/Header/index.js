import { Link, useNavigate } from 'react-router-dom'
import './styles.css'


export const Header = () => {
  const navigate = useNavigate()

  console.log('Renderizou <Header />')

  const handleNavigate = (route) => {
    console.log(route)

    navigate(route)
  }

  return (
    <div className='header'>
      <button onClick={() => handleNavigate('/')}>Home</button>

      <br />

      <button onClick={() => handleNavigate('/departamentos')}>Departamento</button>

      <br />

      <button onClick={() => handleNavigate('/contato')}>Contato</button>

      <Link to='/'>Home</Link>

      <br />

      <Link to='/departamentos'>Departamento</Link>

      <br />

      <Link to='/contato'>Contato</Link>
    </div>
  )
}