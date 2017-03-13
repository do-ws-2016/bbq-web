import React from 'react';
import Table from '../Table';
import Sequence from './Sequence';
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
    render: Actions('/recipies/', id => {
      console.log('delete', id);
    }),
  },
];

const transform = d => d.map(o => ({
  key: o._id,
  title: o.title,
  description: o.description,
  tags: o.tags.map(t => '#' + t).join(' '),
  sequenceCount: o.sequence.length,
  details: o.sequence,
}));

export default ({ details }) => (
  <Table
    bordered
    title={() => 'Recipies'}
    dataSource={transform(details)}
    columns={columns}
    Details={Sequence}
    size="small"
    pagination={false}
  />
);
