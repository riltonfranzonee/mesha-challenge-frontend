import styled from 'styled-components';

import { Avatar, Button } from 'antd';

export const Wrapper = styled.div`
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
