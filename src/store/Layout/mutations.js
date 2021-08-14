
export function showToolbarModule (state) {
	state.bottom_toolbar=true;
}

export function hideToolbarModule (state){
	state.bottom_toolbar=false;
}

export function toggleToolbarModule(state){
	state.bottom_toolbar=!state.bottom_toolbar;
}

