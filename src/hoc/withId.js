import { mapProps } from 'recompose';
export default mapProps(p => ({ id: p.match.params.id }));
