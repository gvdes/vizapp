export function setHeaderTitle(state, title) {
    state.layout.header.title = title;
}

export function setHeaderState(state, newState) {
    state.layout.header.state = newState;
}

export function setFooterState(state, newState) {
    state.layout.footer.state = newState;
}