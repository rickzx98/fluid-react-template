import { FontAwesome, PropTypes, React } from '../imports';

export const ModuleGrid = ({ module, onClick }) => {
  return (<div name={module.name} onClick={() => { onClick(module); }} className="list-group-item module-grid clearfix">
    <FontAwesome fixedWidth size="lg" name={module.icon} />{module.label}
  </div>);
};

ModuleGrid.propTypes = {
  module: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
};
