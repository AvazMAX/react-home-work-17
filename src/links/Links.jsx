import React from "react";
import { AiFillApple } from "react-icons/ai";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Links = () => {
  return (
    <div>
      <ContainerLink>
        <Link to="/">
          <AiFillApple style={{ color: "#fff", fontSize: "50px" }} />
        </Link>
        <Link to="/products" className="link">
          IPhone
        </Link>
        <Link to="/mac" className="link">
          Mac
        </Link>
        <Link to="/pods" className="link">
          Air Pods
        </Link>
        <Link to="/watch" className="link">
          IWatch
        </Link>
        <Link to="/ipad" className="link">
          IPad
        </Link>
      </ContainerLink>
    </div>
  );
};
const ContainerLink = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;