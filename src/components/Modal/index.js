import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import {
  ProcedureModal,
  ProcedureForm,
  FormItem,
  FormInput,
  InlineWrapper,
  InlineInput,
  FormButton,
} from './styles';

import { addProcedure } from '../../store/modules/service/actions';

import required from '../../utils/requiredField';

const validateMessages = {
  required: 'Este campo é obrigatório',
};

export default function Modal({ open, handleClose }) {
  const dispatch = useDispatch();

  const handleNewProcedure = values => {
    dispatch(addProcedure(values));
    handleClose();
  };

  return (
    <ProcedureModal
      visible={open}
      onCancel={handleClose}
      title="Adicionar tratamento"
      footer={null}
    >
      <ProcedureForm
        onFinish={handleNewProcedure}
        name="procedure-form"
        validateMessages={validateMessages}
      >
        <FormItem name="name" rules={required}>
          <FormInput placeholder="Nome do tratamento" size="large" />
        </FormItem>
        <FormItem>
          <InlineWrapper>
            <FormItem noStyle name="duration" rules={required}>
              <InlineInput
                placeholder="Duração (h)"
                size="large"
                type="number"
              />
            </FormItem>
            <FormItem noStyle name="price" rules={required}>
              <InlineInput
                placeholder="Preço (R$)"
                size="large"
                type="number"
              />
            </FormItem>
          </InlineWrapper>
        </FormItem>
        <FormItem>
          <FormButton type="primary" htmlType="submit" size="large">
            Adicionar
          </FormButton>
        </FormItem>
      </ProcedureForm>
    </ProcedureModal>
  );
}

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};
