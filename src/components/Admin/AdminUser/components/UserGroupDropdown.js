import { APP_STORE, USER_GROUP } from '../constants';
import { FluidApi, FluidForm } from 'fluid-commons';

import PropTypes from 'prop-types';
import React from 'react';
import { getLabel } from '../../../../utils/';
import { transformUserGroup } from '../api/';

export class UserGroupDropdown extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: []
    };
    this.setData = this._setData.bind(this);
    this.loadingOn = this._loadingOn.bind(this);
    this.loadingOff = this._loadingOff.bind(this);
    this.error = this._error.bind(this);
    this.refresh = this._refresh.bind(this);
  }

  componentWillMount() {
    this.refresh();
  }

  _setData(data) {
    this.setState({ data });
  }

  _loadingOn() {
    this.setState({ loading: true });
  }

  _loadingOff() {
    this.setState({ loading: false });
  }

  _error(error) {
    this.setState({ error });
  }

  _refresh() {
    this.loadingOn();
    FluidApi.storage(APP_STORE, { field: USER_GROUP })
      .then(({ data }) => {
        this.setData(data());
        this.loadingOff();
      })
      .catch(error => {
        this.error(error);
        this.loadingOff();
        this.setData([]);
      });
  }

  render() {
    return (<select
      className="form-control"
      name={this.props.field.name}
      value={FluidForm.getValue(this.props.formValue, this.props.field.name, transformUserGroup)}>
      <option value="">{getLabel('LABEL_SELECT_OPTIONS')}</option>
      {this.state.data && this.state.data.map(
        data => (<option key={data.field} value={data.field}>{data.label}</option>)
      )}
    </select>);
  }
}

UserGroupDropdown.propTypes = {
  formValue: PropTypes.object,
  field: PropTypes.object.isRequired
};
