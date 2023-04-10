import { FC, PropsWithChildren, createContext, useContext, useState } from "react";

interface user {
    email?: string;
    username?: string;
}

interface value {
    user: user;
    setUser: (element: user) => void;
}

const CurrentUserContext = createContext<any>(null);

export const CurrentUserProvider: FC<PropsWithChildren> = ({ children }) => {
    const [user, setUser] = useState<user>({ })
    const value: value = {
        user,
        setUser
    }
    return (
        <CurrentUserContext.Provider value={value}>
            { children }
        </CurrentUserContext.Provider>
    )
}

export const useCurrentUser = () => useContext(CurrentUserContext);