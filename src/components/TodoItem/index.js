import './index.css'

const Item = props => {
  const {itemDetails, deleteItem} = props
  const {title, id} = itemDetails
  const onDeleteItem = () => {
    deleteItem(id)
  }
  return (
    <li className="list-item">
      <p>{title}</p>
      <button className="button" onClick={onDeleteItem}>
        Delete
      </button>
    </li>
  )
}

export default Item
