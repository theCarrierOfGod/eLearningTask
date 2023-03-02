/**
    * @description      : 
    * @author           : Olaolumide
    * @group            : 
    * @created          : 01/03/2023 - 21:04:14
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 01/03/2023
    * - Author          : Olaolumide
    * - Modification    : 
**/

import React, { createContext, useContext } from "react";

const HookContext = createContext(null);

export const Hook = ({ children }) => {

    const api = "https://tqfe-develop.herokuapp.com/ce";

    return (
        <HookContext.Provider value={{ api }}>
            {children}
        </HookContext.Provider>
    )
}

export const useHook = () => {
    return useContext(HookContext);
}
