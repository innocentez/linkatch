import React, {ReactElement} from "react";

interface IAppProvider {
    readonly children: React.ReactNode
}

export const AppProvider = ({ children }: IAppProvider): ReactElement => {
    return (
        <>
            {children}
        </>
    )
}