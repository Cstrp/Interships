import { LocaleDefinition } from '@faker-js/faker';

export const enum Locale {
  'France' = 'France',
  'Poland' = 'Poland',
  'Japan' = 'Japan',
}

export type Region = { [key in Locale]: LocaleDefinition };
