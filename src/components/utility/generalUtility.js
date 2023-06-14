import { defaultLanguageLocale } from '../constants';

export function getLocalLanguage() {
  if (navigator?.language) {
    return navigator.language;
  }
  return defaultLanguageLocale;
}

export function formatNumber(number, laguageFormat) {
  return new Intl.NumberFormat(laguageFormat).format(number);
}
