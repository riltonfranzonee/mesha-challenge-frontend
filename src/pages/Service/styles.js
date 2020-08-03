import styled from 'styled-components';

import { Layout, Avatar, Button } from 'antd';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #e8efff;
`;

export const Header = styled(Layout.Header)`
  height: 40px !important;
`;

export const Content = styled(Layout.Content)`
  padding: 30px;
`;

export const UserCard = styled.div`
  background-color: #fff;
  border-radius: 30px;
  padding: 20px 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 430px;
`;

export const PatientAvatar = styled(Avatar)``;

export const PatientInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    font-weight: bold;
    font-size: 25px;
    color: #000;
    margin-top: 10px;
  }
`;

export const FinishButton = styled(Button)`
  margin-top: 20px;
  background-color: #08bf39 !important;
  color: #fff !important;
  font-weight: bold !important;
`;

export const CardInfo = styled.div`
  display: flex;
  width: 65%;
  justify-content: space-between;
  align-items: center;

  strong {
    color: #000;
  }
`;

export const CardTag = styled.span`
  margin-left: 5px;
  font-size: 16px;
`;

export const ProblemInput = styled.form`
  width: 75%;
  background-color: #fff;
  height: 60px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;

  input {
    border: none;
    padding: 0 25px;
    width: 85%;
    height: 100%;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    font-size: 20px;
  }

  button {
    width: 15%;
    height: 100%;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    border: none;
    background-color: #f0cc1a;

    color: #fff;
    font-size: 25px;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.9;
    }
  }
`;

export const PageContent = styled(Layout.Content)``;

export const ProblemsList = styled.ul`
  margin-top: 20px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;

  li {
    padding: 5px 10px;
    font-size: 19px;
    background-color: #f0cc1a;
    color: #fff;
    border-radius: 30px;
    text-align: center;
    font-weight: bold;
    margin-bottom: 10px;

    &::first-letter {
      text-transform: uppercase;
    }
  }
`;

export const ProceduresTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  width: 75%;

  button {
    border: none;
    border-radius: 100px;
    background-color: transparent;
    font-size: 30px;
    color: #000;
  }

  h1 {
    margin-top: 5px;
  }
`;

export const ProcedureItem = styled.div`
  background-color: #fff;
  width: 80%;
  height: 70px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  margin: 15px 0;
  box-shadow: 2px 4px 7px -2px rgba(0, 0, 0, 0.78);

  strong {
    font-size: 18px;
    color: #000;
    width: 50%;

    &::first-letter {
      text-transform: uppercase;
    }
  }

  div {
    font-size: 16px;

    span {
      margin-left: 5px;
    }
  }
`;

export const PriceDisplay = styled.div`
  width: 30%;
  position: relative;
`;

export const DurationDisplay = styled.div`
  width: 20%;
`;

export const RemoveButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  margin-top: -19px;
  margin-right: -12px;
  background-color: transparent;
  border: none;
  font-size: 13px;

  &:hover {
    color: red;
  }
`;
