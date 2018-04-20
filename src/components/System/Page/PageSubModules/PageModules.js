import { FontAwesome, Label, PropTypes, React } from '../imports';

import { ModuleGrid } from './ModuleGrid';

export const PageModules = ({ modules, formValue, onClick }) => {
  return (
    <div className="col-sm-3 page-modules">
      <div className="page-modules-content list-group">
        <div className="page-modules-heading list-group-item">
          <FontAwesome fixedWidth size="lg" name="link" /><Label label="LABEL_ASSOCIATIONS" />
        </div>
        {modules && modules.filter(module => module.isVisible && module.isVisible instanceof Function ? module.isVisible(formValue) : true).map(module => (<ModuleGrid onClick={onClick} key={module.name} module={module} />))}
      </div>
    </div>
  );
};

PageModules.propTypes = {
  modules: PropTypes.array.isRequired,
  formValue: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
};
