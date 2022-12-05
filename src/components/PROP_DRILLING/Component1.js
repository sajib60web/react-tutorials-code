import React from 'react'

import { UserContext } from './UserContext';
import Component2 from './Component2';

const Component1 = () => {
    const user = {
        id: 1,
        name: "Sajib Kumar barai"
    }

    const text = "Hello, I am Sajib";

    return (
        <UserContext.Provider value={{user, text}}>
            <Component2 user={user} />
        </UserContext.Provider>
    )
}

export default Component1