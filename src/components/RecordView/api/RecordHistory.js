import { getLabel, toReadableText } from '../../../utils/';

import { Record } from '../../../types/';

export default [{
  field: Record.OWNER,
  label: getLabel('LABEL_OWNER'),
  className: 'col-sm-2'
}, {
  field: Record.COMPANY,
  label: getLabel('LABEL_COMPANY'),
  filter: true,
  className: 'col-sm-2'
},
{
  field: Record.RECORD_TYPE,
  label: getLabel('LABEL_RECORD_TYPE'),
  filter: true,
  className: 'col-sm-2'
},
{
  field: Record.ITEM,
  label: getLabel('LABEL_ITEM'),
  transform: toReadableText,
  className: 'col-sm-2'
},
{
  field: Record.DESCRIPTION,
  label: getLabel('LABEL_DESCRIPTION'),
  transform: toReadableText,
  className: 'col-sm-2'
},
{
  field: Record.DATE_CREATED,
  label: getLabel('LABEL_CREATED_ON'),
  className: 'col-sm-2'
}
];
