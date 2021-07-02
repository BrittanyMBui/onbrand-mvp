import React, { useContext } from 'react';


import { AuthContext } from '../context/auth';

function Home(props) {
    const { user } = useContext(AuthContext);
    console.log(user);

    return (
        <div className="home">
        <h1>{user.name}'s Closet</h1>
        <p>PANT SIZE
            {user.pantSize}
        <br />
        </p>
        <p>SHIRT SIZE</p>
        <p>PANT FIT</p>
        <p>SPEND</p>
        </div>
    )
}

export default Home;