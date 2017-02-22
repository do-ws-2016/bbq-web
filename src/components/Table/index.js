import React from 'react'
import { Table, Pagination } from 'antd'

const locale = {
  filterConfirm: 'Ok',
  filterReset: 'Reset',
  emptyText: 'No Data'
}

export default (props) => {
  const { dataSource, columns, Details } = props
  return (
    <Table
      {...props}
      dataSource={dataSource}
      columns={columns}
      locale={locale}
      expandedRowRender={Details?({details}) => <Details details={details} />:null}
    />
  )
}
