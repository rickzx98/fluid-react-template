import { getLabel, toReadableText } from '../../../utils/';

import { Record } from '../../../types/';

export default [{
  field: Record.OWNER,
  label: getLabel('LABEL_OWNER')
}, {
  field: Record.COMPANY,
  label: getLabel('LABEL_COMPANY'),
  filter: true
},
{
  field: Record.RECORD_TYPE,
  label: getLabel('LABEL_RECORD_TYPE'),
  filter: true
},
{
  field: Record.ITEM_TYPE,
  label: getLabel('LABEL_ITEM_TYPE'),
  filter: true
},
{
  field: Record.ITEM,
  label: getLabel('LABEL_ITEM'),
  transform: toReadableText
},
{
  field: Record.DESCRIPTION,
  label: getLabel('LABEL_DESCRIPTION'),
  transform: toReadableText
},
{
  field: Record.DATE_CREATED,
  label: getLabel('LABEL_CREATED_ON')
}
];
