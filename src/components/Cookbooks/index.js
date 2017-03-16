import React from 'react';
import Table from '../Table';
import Recipes from '../Recipes';
import Actions from '../Actions';

const transform = d =>
  d.map(o => ({
    key: o._id,
    title: o.title,
    description: o.description,
    tags: o.tags.map(t => '#' + t).join(' '),
    author: o.author.username,
    recipesCount: o.recipes.length,
    details: o.recipes,
  }));

const columns = [
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Recipes Count',
    dataIndex: 'recipesCount',
    key: 'recipesCount',
  },
  {
    title: 'Tags',
    dataIndex: 'tags',
    key: 'tags',
  },
  {
    title: 'Author',
    dataIndex: 'author',
    key: 'author',
  },
  {
    title: 'Actions',
    key: 'actions',
    render: Actions('/cookbooks/', id => {
      console.log('delete', id);
    }),
  },
];

const Cookbooks = ({ data }) => (
  <Table
    bordered
    dataSource={transform(data.cookbooks)}
    columns={columns}
    Details={Recipes}
  />
);

export default Cookbooks;
