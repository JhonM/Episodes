import React from "react";
import { NavLinkProps } from "react-router-dom";
import { useLocation, NavLink } from "react-router-dom";

export const QueryNavLink = ({ to, ...props }: NavLinkProps) => {
  const location = useLocation();
  return <NavLink to={to + location.search} {...props} />;
};
