import styled from 'styled-components';
import { Form, Input, DatePicker, Button } from 'antd';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #e8efff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RegisterForm = styled(Form)`
  background-color: #fff;
  width: 30%;
  height: 75%;
  border-radius: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0px 0px 20px -8px rgba(0, 0, 0, 0.4);
`;

export const FormItem = styled(Form.Item)`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormInput = styled(Input)``;

export const FormDatePicker = styled(DatePicker)`
  width: 100%;
`;

export const SubmitButton = styled(Button)`
  width: 100%;
  font-weight: bold;
`;

export const EmptyImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AvatarInput = styled.div`
  align-self: center;
  width: 120px;
  height: 120px;
  margin-bottom: 20px;
  border-radius: 8px;
  border: 2px dashed #dddddd;
  transition: opacity 0.2s;

  label {
    height: 100%;
    width: 100%;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  span {
    font-size: 15px;
    color: #c6c6c6;
    font-weight: bold;
  }
  &:hover {
    opacity: 0.8;
  }
  input {
    display: none !important;
  }
  img {
    width: 105%;
    height: 105%;
    border-radius: 8px;
  }
`;

export const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

export const iconSpace = {
  marginRight: 5,
};
