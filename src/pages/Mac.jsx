import React from "react";
import { GrPrevious } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

export const Mac = () => {
  const navigate = useNavigate();

  const goBackPrev = () => {
    navigate(-1);
  };

  return (
    <>
      <Container>
        <DivHeader>
          <GrPrevious className="GoBackProd" onClick={goBackPrev} />
          <img src="https://www.apple.com/v/macbook-pro-14-and-16/e/images/overview/hero/hero_intro_endframe__e6khcva4hkeq_large.jpg" />
        </DivHeader>
        <Div>
          <DivMain>
            <h1>Mover. Maker.</h1>
            <h1>Boundary breaker.</h1>
            <p>
              Supercharged by M2 Pro or M2 Max, MacBook Pro takes its power and
              efficiency further than ever. It delivers exceptional performance
              whether it's plugged in or not, and now has even longer battery
              life. Combined with a stunning Liquid Retina XDR display and all
              the ports you need — this is a pro laptop without equal.
            </p>
          </DivMain>
        </Div>
      </Container>
    </>
  );
};
const Container = styled.div`
  margin: 0 10%;
`;
const DivHeader = styled.div`
  img {
    width: 100%;
    margin-top: 20px;
    border-radius: 22px;
  }
`;
const Div = styled.div`
  display: flex;
  justify-content: center;
  margin: 100px 0;
`;
const DivMain = styled.div`
  text-align: center;
  color: #fff;
  width: 800px;
`;
