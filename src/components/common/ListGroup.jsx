import React from 'react'

const ListGroup = ({
  items,
  textProperty,
  valueProperty,
  selectedGenre,
  onGenreSelect,
}) => {
  return (
    <ul className='list-group'>
      {items.map((item) => (
        <li
          key={item[valueProperty]}
          onClick={() => onGenreSelect(item)}
          className={
            item === selectedGenre
              ? 'list-group-item active'
              : 'list-group-item'
          }
        >
          {item.name}
        </li>
      ))}
    </ul>
  )
}

ListGroup.defaultProps = {
  textProperty: 'name',
  valueProperty: '_id',
}

export default ListGroup
