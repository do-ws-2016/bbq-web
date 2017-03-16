import React from 'react';
import { Button } from 'antd';
import Link from '../Link';

export default (info, del) =>
  (text, { key }) => (
    <span>
      <Button.Group>
        <Link to={info + key} icon="info-circle" />
        <Button type="danger" icon="delete" />
      </Button.Group>
    </span>
  );
