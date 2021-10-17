export function getCopies(state) {
    return (code) => {
        let idx = state.labels.findIndex((item) => {
            return item.code == code;
        });

        return state.labels[idx].copies;
    }
}