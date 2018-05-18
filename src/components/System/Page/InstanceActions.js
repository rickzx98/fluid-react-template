import {FLUID_TRIGGER_COMMAND} from './constants';

export const triggerCommands = (pageName) => {
  return `${pageName}_${FLUID_TRIGGER_COMMAND}`;
};
