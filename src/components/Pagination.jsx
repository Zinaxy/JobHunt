import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = ({ links }) => {
  return (
    <div>
      {links.map((link, index) => (
        <Link to={''} className=''></Link>
      ))}
    </div>
  );
};

export default Pagination;
