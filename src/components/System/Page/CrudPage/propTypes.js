import { PropTypes } from '../imports';

export default types => ({
  ...types,
  actions: PropTypes.object.isRequired,
  pageList: PropTypes.array.isRequired,
  pageForm: PropTypes.object.isRequired,
  ajax: PropTypes.object.isRequired
});
