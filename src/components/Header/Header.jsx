import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/login"> Login</Link>
            {/* <h2>Header Page</h2> */}
        </div>
    );
};

export default Header;