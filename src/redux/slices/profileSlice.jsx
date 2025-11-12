import { createSlice } from "@reduxjs/toolkit";

const storedUser = JSON.parse(localStorage.getItem("user"));

const initialState = {
    profile: storedUser || {
        name: "",
        email: "",
        avatar: "https://via.placeholder.com/120",
    },
};

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        updateProfile: (state, action) => {
            state.profile = { ...state.profile, ...action.payload };
            localStorage.setItem("user", JSON.stringify(state.profile));
        },
        resetProfile: (state) => {
            state.profile = {
                name: "",
                email: "",
                avatar: "https://via.placeholder.com/120",
            };
            localStorage.removeItem("user");
        },
    }
});

export const { updateProfile, resetProfile } = profileSlice.actions;
export default profileSlice.reducer;