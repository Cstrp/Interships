import { ROUTER_PATHS } from '../enums';

const enum PATH {
  sign_up = ROUTER_PATHS.SIGN_UP,
  sign_in = ROUTER_PATHS.SIGN_IN,
}

export type Tabs = { title: string; link: PATH };
