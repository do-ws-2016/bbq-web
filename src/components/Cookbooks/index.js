import React from 'react'
import Table from '../Table'
import Recipies from './Recipies'

const transform = (d) => d.map((o)=>({
  key: o._id,
  title: o.title,
  description: o.description,
  tags: o.tags.map((t)=>'#'+t).join(' '),
  author: o.author.username,
  recipiesCount: o.recipes.length,
  details: o.recipes,
}))

const columns = [{
  title: 'Title',
  dataIndex: 'title',
  key: 'title',
}, {
  title: 'Description',
  dataIndex: 'description',
  key: 'description',
}, {
  title: 'Recipies Count',
  dataIndex: 'recipiesCount',
  key: 'recipiesCount',
}, {
  title: 'Tags',
  dataIndex: 'tags',
  key: 'tags',
}, {
  title: 'Author',
  dataIndex: 'author',
  key: 'author',
}];

export default ({data}) => (
  <Table
    dataSource={transform(data.cookbooks)}
    columns={columns}
    Details={Recipies}
  />
)
