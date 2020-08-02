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
  height: 400px;
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
`;

export const PriceInfo = styled.div`
  display: flex;
  width: 65%;
  justify-content: space-between;
  align-items: center;

  strong {
    color: #000;
  }
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
