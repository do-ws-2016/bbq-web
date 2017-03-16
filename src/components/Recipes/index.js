import React from 'react';
import Table from '../Table';
import Sequence from '../Sequence';
import Actions from '../Actions';

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
    title: 'Sequence Count',
    dataIndex: 'sequenceCount',
    key: 'sequenceCount',
  },
  {
    title: 'Tags',
    dataIndex: 'tags',
    key: 'tags',
  },
  {
    title: 'Actions',
    key: 'actions',
    render: Actions('/recipes/', id => {
      console.log('delete', id);
    }),
  },
];

const transform = d =>
  d.map(o => ({
    key: o._id,
    title: o.title,
    description: o.description,
    tags: o.tags.map(t => '#' + t).join(' '),
    sequenceCount: o.sequence.length,
    details: o.sequence,
  }));

const Recipes = ({ details, title = () => 'Recipes' }) => (
  <Table
    bordered
    title={title}
    dataSource={transform(details)}
    columns={columns}
    Details={Sequence}
    size="small"
    pagination={false}
  />
);

export default Recipes;
