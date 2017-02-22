import React from 'react'
import Table from '../Table'

const columns = [{
  title: 'Title',
  dataIndex: 'title',
  key: 'title',
}, {
  title: 'Duration',
  dataIndex: 'duration',
  key: 'duration',
}, {
  title: 'Intensity',
  dataIndex: 'intensity',
  key: 'intensity',
}, {
  title: 'Method',
  dataIndex: 'method',
  key: 'method',
}];

const transform = (d) => d.map((o, i)=>({
  key: i,
  title: o.title,
  duration: o.duration,
  intensity: o.intensity,
  method: o.method,
}))

export default ({details}) => (
  <Table
    bordered
    title={() => 'Sequence'}
    dataSource={transform(details)}
    columns={columns}
    size="small"
    pagination={false}
  />
)
