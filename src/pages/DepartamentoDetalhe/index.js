import { useParams } from 'react-router-dom'

export const DepartamentoDetalhe = () => {
  const params = useParams()

  console.log('Renderizou <DepartamentoDetalhe />')

  console.log(params)

  return (
    <div>
      <h1>Detalhe de departamento</h1>

      <h2>{params.id}</h2>
    </div>
  )
}