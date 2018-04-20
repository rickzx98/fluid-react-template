import { FluidTable, PropTypes, React } from '../imports';

export const PageList = ({ name, data, onSelect, columns, fieldKey }) => {
  return (
    <FluidTable
      fieldKey={fieldKey}
      name={name}
      onSelect={onSelect}
      className="table table-condensed table-hover"
      columns={columns} value={data} />);
};

PageList.propTypes = {
  data: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
  columns: PropTypes.array.isRequired,
  fieldKey: PropTypes.string,
  name: PropTypes.string.isRequired
};
