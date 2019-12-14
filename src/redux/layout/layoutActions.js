import {MENU_HIDE, MENU_SHOW, MENU_TOGGLE} from './layoutTypes';

export const doToggleMenu = () => ({type: MENU_TOGGLE})

export const doShowMenu = () => ({type: MENU_SHOW})

export const doHideMenu = () => ({type: MENU_HIDE})
