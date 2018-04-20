import { FontAwesome, React, ResponsiveButton, getLabel } from '../imports';

export const DeleteDialog = (confirm, cancel, target) => ({
  title: getLabel('LABEL_DELETE_CONFIRMATION_TITLE'),
  body: (<p className="confirmation-message">{getLabel('LABEL_CONFIRM_DO_YOU_WANT_TO_DELETE')}{` ${target}?`}</p>),
  footer: (<div>
    <ResponsiveButton
      icon={<FontAwesome name="check" />}
      onClick={confirm} className="btn btn-primary" label={getLabel('LABEL_YES')} />
    <ResponsiveButton
      icon={<FontAwesome name="times" />}
      onClick={cancel} className="btn btn-danger" label={getLabel('LABEL_NO')} />
  </div>)
});
