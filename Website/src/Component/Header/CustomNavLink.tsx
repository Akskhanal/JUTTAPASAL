import React from 'react';
import { Link, LinkProps } from '@chakra-ui/react';
import { NavLink, useLocation } from 'react-router-dom';

interface CustomNavLinkProps extends LinkProps {
  to: string;
  children: React.ReactNode;
}

const CustomNavLink: React.FC<CustomNavLinkProps> = ({ to, children, ...rest }) => {
  const { pathname } = useLocation();

  // Check if the current route matches the NavLink's "to" prop
  const isActive = pathname === to;

  return (
    <Link
      as={NavLink}
      to={to}
      px={2}
      py={1}
      rounded="md"
      color={isActive ? 'white' : '#4d4d00'}
         _hover={{
        textDecoration: 'none',
     
      }}
      {...rest}
    >
      {children}
    </Link>
  );
};

export default CustomNavLink;
