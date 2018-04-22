import { ClaimPage, DealerPage, MaintenancePage, Pages, PolicyNewPage, PolicyPage, PropTypes, PureComponent, React, RegistrationPage, RepairshopPage, Route, Switch } from './imports';

export default class RouteBlocker extends PureComponent {
  render() {
    return (<Switch>
      <Route exact path={Pages.dealer} component={DealerPage} />
      <Route exact path={Pages.newDealer} component={DealerPage} />
      <Route exact path={Pages.viewDealer + '/:id'} component={DealerPage} />

      <Route exact path={Pages.registration} component={RegistrationPage} />
      <Route exact path={Pages.newRegistration} component={RegistrationPage} />
      <Route exact path={Pages.viewRegistration + '/:id'} component={RegistrationPage} />

      <Route exact path={Pages.policy} component={PolicyPage} />
      <Route exact path={Pages.newPolicy} component={PolicyPage} />
      <Route exact path={Pages.viewPolicy + '/:id'} component={PolicyPage} />

      <Route exact path={Pages.maintenance} component={MaintenancePage} />
      <Route exact path={Pages.newMaintenance} component={MaintenancePage} />
      <Route exact path={Pages.viewMaintenance + '/:id'} component={MaintenancePage} />

      <Route exact path={Pages.repairshop} component={RepairshopPage} />
      <Route exact path={Pages.newRepairshop} component={RepairshopPage} />
      <Route exact path={Pages.viewRepairshop + '/:id'} component={RepairshopPage} />

      <Route exact path={Pages.claim} component={ClaimPage} />
      <Route exact path={Pages.newClaim} component={ClaimPage} />
      <Route exact path={Pages.viewClaim + '/:id'} component={ClaimPage} />

      <Route exact path={Pages.policynew} component={PolicyNewPage} />
      <Route exact path={Pages.newPolicynew} component={PolicyNewPage} />
      <Route exact path={Pages.viewPolicynew + '/:id'} component={PolicyNewPage} />

    </Switch>);
  }
}


RouteBlocker.propTypes = {
  routing: PropTypes.object.isRequired
};
