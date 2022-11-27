import React, { useState } from "react";

import User from "./User";

const Users = () => {
    const [user, setUser] = useState({
        id: 123456,
        name: "Sajib Kumar Barai",
    });
    return (
        <>
            <User user={user} />
        </>
    );
};

export default Users;
