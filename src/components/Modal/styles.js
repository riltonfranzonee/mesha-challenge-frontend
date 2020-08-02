import styled from 'styled-components';

import { Button, Modal, Form, Input } from 'antd';

export const ProcedureModal = styled(Modal)``;

export const ProcedureForm = styled(Form)``;

export const FormItem = styled(Form.Item)`
  width: 70% !important;
  margin-left: auto !important;
  margin-right: auto !important;

  .ant-form-item-explain {
    display: flex !important;
    justify-content: space-between;
  }
`;

export const FormInput = styled(Input)``;

export const InlineWrapper = styled.span`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const InlineInput = styled(Input)`
  width: 45% !important;
`;

export const FormButton = styled(Button)``;
