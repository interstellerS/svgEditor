import { CHANGE_COLOR, CHANGE_RADIUS, CHANGE_TEXT, CHANGE_X, CHANGE_Y } from '../constants/ActionTypes';

export function changeColor(color) {
    return { type: CHANGE_COLOR, color};
}

export function changeRadius(radius) {
    return { type: CHANGE_RADIUS, radius };
}

export function changeText(text) {
    return { type: CHANGE_TEXT, text };
}

export function changeX(x) {
    return { type: CHANGE_X, x };
}

export function changeY(y) {
    return { type: CHANGE_Y, y };
}
