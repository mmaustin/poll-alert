import { createSlice } from "@reduxjs/toolkit";
import UnitedStates from 'statesFolder/index';

const initialState = {
    mode: 'light',
    user: null,
    token: null,
    observances: [],
    unitedStates: UnitedStates
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light";
        },
        setLogin: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        setLogout: (state) => {
            state.user = null;
            state.token = null;
        },
        setObservances: (state, action)=>{
            state.observances = action.payload.observances;
        },
        setObservance: (state, action) => {
            //remember, the post is already in state.post. we're replacing
            //that post with the payload post that has the updated likes info.
            //if it's not the updated likes post, just return the post.
            //i really confused myself with this simple operation!!!
            const updatedObservances = state.observances.map((observance,i) => {
                if(observance._id === action.payload.observance._id) return action.payload.observance;
                return observance;
            });
            state.observances = updatedObservances;
        },
        setStateObservances: (state, action) => {
            const stateObservances = action.payload.observances.filter((observance) => observance.stateId === action.payload.stateId);
            state.observances = stateObservances;
        }
    }
})

export const {setMode, setLogin, setLogout, setObservances, setObservance, setStateObservances} = authSlice.actions;
export default authSlice.reducer;