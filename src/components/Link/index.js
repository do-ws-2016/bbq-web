import { Button } from 'antd';
import { withRouter } from 'react-router-dom';
import { mapProps, compose } from 'recompose';
export default compose(
  withRouter,
  mapProps(({
    history: { push },
    location: { state },
    to,
    type,
    htmlType,
    icon,
    shape,
    loading,
    ghost,
  }) => ({
    onClick: () => {
      push(to, state);
    },
    type,
    htmlType,
    icon,
    shape,
    loading,
    ghost,
  }))
)(Button);
