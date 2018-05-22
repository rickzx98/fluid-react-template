import { OptionLinks } from './OptionLinks';
import { getLabel } from './getLabel';

export class LibraryLinks extends OptionLinks {
  constructor(omit) {
    super([
      {
        label: getLabel('LABEL_LIBRARY'),
        name: 'library',
        icon: 'book',
        url: '/library'
      },
      {
        label: getLabel('LABEL_COLLECTION'),
        name: 'collection',
        icon: 'tags',
        url: '/collection'
      },
      {
        label: getLabel('LABEL_TITLE'),
        name: 'title',
        icon: 'book',
        url: '/title'
      },
      {
        label: getLabel('LABEL_LOAN_TYPE'),
        name: 'loantype',
        icon: 'bolt',
        url: '/loantype'
      }], omit);
  }
}
