import { Link } from "react-router-dom"

const departamentos = [
  {
    name: 'Produto',
    id: 1
  },
  {
    name: 'Back Office',
    id: 2
  },
  {
    name: 'Financeiro',
    id: 3
  },
]

export const Departamentos = () => {
  console.log('Renderizou <Departamentos />')

  return (
    <div>
      <h1>Departamentos</h1>

      <ul>
        {departamentos.map((departamento) => {
          return (
            <li key={departamento.id}>
              <Link to={`/departamentos/${departamento.id}/${departamento.name}`} >{departamento.name}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}