export function setHeaderTitle(state, title) {
    state.layout.header.title = title;
}

export function setHeaderState(state, newState) {
    state.layout.header.state = newState;
}

export function setFooterState(state, newState) {
    state.layout.footer.state = newState;
}

export function addLabels(state, labels) {
    if (state.labels.length <= 0) {
        state.labels = labels;
    } else {
        state.labels.push(labels);
    }
}

export function addCopies(state, {code, opt}) {
    let idx = state.labels.findIndex((item) => {
        return item.code == code;
    });
    switch (opt) {
        case "d":
            state.labels[idx].copies > 1
                ? state.labels[idx].copies--
                : (state.labels[idx].copies = 1);
            break;
        default:
            state.labels[idx].copies++;
            break;
    }
}