import Button from "./evento/Button"

const Evento = () => {

  const meuEvento = () => console.log('Ativando primeiro evento')
  const segundoEvento = () => console.log('Ativando segundo evento')

  return (
    <div>
      <p>Clique para disparar um evento: </p>
      <Button event={meuEvento} text="Primeiro Evento" />
      <Button event={segundoEvento} text="Segundo Evento" />
    </div>
  )
}

export default Evento