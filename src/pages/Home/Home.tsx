import React, {FC, ReactElement} from 'react';
import {Link} from "react-router-dom";

const Home: FC = (): ReactElement => {
    return (
        <div className="home-container">
            <h2>Github Battle: Battle your friends and ... stuff</h2>
            <Link className="button" to='battle'>Battle</Link>
        </div>
    );
};

export default Home;