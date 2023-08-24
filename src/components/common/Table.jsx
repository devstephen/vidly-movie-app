import React from 'react'
import TableHeader from './TableHeader'
import TableBody from './TableBody'

const Table = ({ onSort, data, sortColumn, columns }) => {
  return (
    <table className='table'>
      <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
      <TableBody data={data} columns={columns} />
    </table>
  )
}

export default Table
