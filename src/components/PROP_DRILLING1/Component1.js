import React, { useState } from 'react'

import Component2 from './Component2';

const Component1 = () => {
    const userData = {
        id: 1,
        name: "Sajib Kumar barai"
    }
    const [user, setUser] = useState(userData);

    return (
        <div>
            <Component2 user={user} />
        </div>
    )
}

export default Component1