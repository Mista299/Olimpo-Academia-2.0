import React, {createContext, useState, useContext} from "react";

const AppContext = createContext();

export const AppProvider = ({children}) => {

    return(
        <AppContext.Provider value={{}}>
            {children}
        </AppContext.Provider>
    )
}