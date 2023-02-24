import PropTypes from 'prop-types'

function Item({ marca, ano_lancamento }) {
  return (
    // Fragments <></>
    <>
      <li>{marca} - {ano_lancamento}</li>
    </>
  )
}

// Especificando os tipos de propriedades
Item.propTypes = {
  marca: PropTypes.string.isRequired,
  ano_lancamento: PropTypes.number,
}

// Especificando valores default
Item.defaultProps = {
  marca: 'Faltou a marca',
  ano_lancamento: 0,
}

export default Item