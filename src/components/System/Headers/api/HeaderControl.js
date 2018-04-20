import { FluidFunc } from '../imports';

export class HeaderControl {
    constructor(label, fontIcon, onClick, action) {
        this.label = label;
        this.fontIcon = fontIcon;
        this.isActive = () => true;
        this.onClick = onClick instanceof Function ? onClick : () => {
            if (FluidFunc.exists(onClick)) {
                FluidFunc.start(onClick, { action });
            } else {
                throw new Error(`FluidFunc ${onClick} does not exists.`);
            }
        };
    }
    setVisible(isVisible = () => true) {
        this.isVisible = isVisible;
    }
    setActive(isActive = () => true) {
        this.isActive = isActive;
    }
}