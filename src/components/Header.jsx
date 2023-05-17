import React from "react";
import { GrPrevious } from "react-icons/gr";
import { useNavigate } from "react-router";
import { styled } from "styled-components";

export const Header = () => {
  const navigate = useNavigate()
  return (
    <Container>
      <GrPrevious className="GoBackProd" onClick={() => navigate(-1)} />
      <H1>Вы на главной странице</H1>;
    </Container>
  );
};
const Container = styled.div`
  margin: 0 10%;
`
const H1 = styled.h1`
  color: #fff;
`;
