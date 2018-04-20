import { Barcode } from '../types/';
export const formatItemBarcodeRandomValue = (barcode) => {
  return `${barcode[Barcode.ITEM_LEFT_ALPHA_SYMBOL] || ''} ${randomValue(barcode[Barcode.ITEM_BARCODE_LENGTH])} ${barcode[Barcode.ITEM_RIGHT_ALPHA_SYMBOL] || ''}`;
};
export const formatPatronBarcodeRandomValue = (barcode) => {
  return `${barcode[Barcode.PATRON_LEFT_ALPHA_SYMBOL] || ''} ${randomValue(barcode[Barcode.PATRON_BARCODE_LENGTH])} ${barcode[Barcode.PATRON_RIGHT_ALPHA_SYMBOL] || ''}`;
};
function randomValue(length) {
  let value = '';
  for (let i = 0; i < length; i++) {
    value += Math.floor(Math.random());
  }
  return value;
}
