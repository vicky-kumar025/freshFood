import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice"
import ownerSlice from "./ownerSlice"
import mapSlice from "./mapSlice"
export const store = configureStore({
    reducer: {
        user: userSlice,
        owner: ownerSlice,
        map: mapSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                // Ignore the action that sets the socket
                ignoredActions: ['user/setSocket'],
                // Ignore the socket path in the state
                ignoredPaths: ['user.socket'],
                // Ignore socket in action payloads
                ignoredActionPaths: ['payload']
            },
        }),
})