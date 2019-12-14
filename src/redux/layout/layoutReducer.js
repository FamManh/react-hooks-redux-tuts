import {MENU_HIDE, MENU_SHOW, MENU_TOGGLE} from './layoutTypes';
import {doHideMenu, doShowMenu, doToggleMenu} from './layoutActions';

const initialState = {
    menuVisible: true,
    loading: false
}

export const layoutReducer = (state = initialState, action) => {
    switch (action.type) {
        case MENU_TOGGLE:
            return {...state, menuVisible: !state.menuVisible}
        case MENU_SHOW:
            return {...state, menuVisible: true}
        case MENU_HIDE:
            return {...state, menuVisible: false}
        default:
            return state
    }
}

export default layoutReducer;
