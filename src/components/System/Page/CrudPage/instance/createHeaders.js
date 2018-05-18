import {
    PageHeaders
} from "../../";
import handleScreens from './handleScreens';

export default (instance, screens, pageName) => {
    const {
        forCreateView,
        forListView,
        forManagedUpdateView,
        forManagedView
    } = new PageHeaders(pageName);
    instance.list(() => {
        instance.props.actions.createHeaders(
            instance.overrideHeaders('list', forListView(
                instance.refresh,
                instance.goToNew,
                instance.props.actions.back,
                instance.isActive
            ))
        );
    });
    instance.create(() => {
        instance.props.actions.createHeaders(
            instance.overrideHeaders('create', forCreateView(instance.prevPage, instance.isActive))
        );
    });
    instance.view(() => {
        if (!instance.state.editable) {
            instance.props.actions.createHeaders(
                instance.overrideHeaders(
                    'view',
                    forManagedView(
                        instance.prevPage,
                        () => {
                            instance.setEditable(true);
                        },
                        instance.remove,
                        instance.refresh,
                        instance.isActive,
                        instance.isEditable,
                        instance.isRemovable
                    ))
            );
        } else {
            instance.props.actions.createHeaders(
                instance.overrideHeaders('view', forManagedUpdateView(instance.cancelEdit, instance.isActive))
            );
        }
    });
    handleScreens(instance, screens, params => {
        instance.props.actions.createHeaders(instance.overrideHeaders(params.page, {}));
    });
};