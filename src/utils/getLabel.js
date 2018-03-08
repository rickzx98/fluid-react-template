import { FluidLabel } from 'fluid-commons';

const LOCALE = process.env.LOCALE || 'en';
const APP_LABEL = process.env.APP_LABEL || 'main';
export const getLabel = (labelName) => {
    return FluidLabel.get(APP_LABEL, LOCALE, labelName);
};