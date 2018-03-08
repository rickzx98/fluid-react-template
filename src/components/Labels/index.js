import * as actions from './action/LabelsActions';

import { FluidLabel } from 'fluid-commons';
import locales from './locales/';
import reducer from './reducer/LabelsReducer';

export const LabelsActions = actions;
export const LabelsReducer = reducer;

FluidLabel.setup('main', locales);