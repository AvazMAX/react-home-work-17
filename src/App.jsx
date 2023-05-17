import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import { Products } from "./pages/Products";
import { Mac } from "./pages/Mac";
import { PhoneDetail } from "./components/PhoneDetail";
import { styled } from "styled-components";
import { BiSearch } from "react-icons/bi";
import { BiBasket } from "react-icons/bi";
import { AiFillApple } from "react-icons/ai";
import { Header } from "./components/Header";
import { Airpods } from "./pages/Airpods";
import { Iwatch } from "./pages/Iwatch";
import { Ipad } from "./pages/Ipad";
import { AppRoutes } from "./router/Routes";
import { Links } from "./links/Links";

function App() {
  return (
    <>
      <Container>
          <Links />
        <DivSearchBusket>
          <BiSearch />
          <span>|</span>
          <BiBasket />
        </DivSearchBusket>
      </Container>
      <AppRoutes />
    </>
  );
}
export default App;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 5%;
`;
const DivSearchBusket = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 23px;
  color: #fff;
`;
