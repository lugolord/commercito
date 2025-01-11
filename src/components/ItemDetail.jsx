/* eslint-disable react/prop-types */
import ItemCount from './ItemCount'

function ItemDetail ({ item }) {
  return (
    <div>
      <img src={item?.url} alt={item?.name} style={{ width: 300, height: 300 }} />
      <h3>{item?.name}</h3>
      <p>{item?.description}</p>
      <ItemCount item={item} />
    </div>
  )
}

export default ItemDetail
