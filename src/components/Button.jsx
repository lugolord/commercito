/* eslint-disable react/prop-types */

function Button ({ color, callback }) {
  const pepito = 'pepito'
  return (
    <button 
      style={{ backgroundColor: color, fontSize: 30 }}
      onClick={callback}
      className='col-10'
    >
      {pepito}
    </button>
  )
}

export default Button
