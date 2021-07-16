import React, { useContext } from 'react';


import { AuthContext } from '../context/auth';

function UserInfo() {
    const { user } = useContext(AuthContext);
    console.log(user);

    return (
        <>
        <h1>{user.name}'s Closet</h1>
        <p>PANT SIZE
        <br />{user.pantSize}
        </p>
        <p>SHIRT SIZE
            <br />{user.shirtSize}
        </p>
        <p>PANT FIT
            <br />{user.pantFit}
        </p>
        <p>SPEND
            <br />{user.spend}
        </p>
        </>
    )
}

export default UserInfo;