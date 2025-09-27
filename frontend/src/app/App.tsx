import React from "react";

import { AppProvider } from '@app/providers'
import { ModalsProvider } from "@app/providers";
import { AppRouter } from '@app/router'

function App() {
    return (
        <AppProvider>
            <ModalsProvider />
            <AppRouter />
        </AppProvider>
    )
}

export default App