import React, { useContext } from 'react';
import { useQuery } from '@apollo/client';

import { AuthContext } from '../context/auth';

function Home(props) {
    const { user } = useContext(AuthContext);
    console.log(user);

    return (
        <>
        <h1>Welcome back, {user.name}</h1>
        <p></p>
        </>
    )
}

export default Home;