import React from "react"
type TokenContexProps = {
    token: string | null
}

export const TokenContext = React.createContext<TokenContexProps>({ token: "" })