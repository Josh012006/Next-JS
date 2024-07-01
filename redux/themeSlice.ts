
import { createSlice, PayloadAction } from "@reduxjs/toolkit";



interface InitialState {
    theme: string;
}

const initialState : InitialState = {
    theme: "dark"
};

const authSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        changeTheme(state) {
            if(state.theme === "dark") {
                state.theme = "light";
            } else {
                state.theme = "dark";
            }
        }
    }
});

export const { changeTheme } = authSlice.actions;

export default authSlice.reducer;