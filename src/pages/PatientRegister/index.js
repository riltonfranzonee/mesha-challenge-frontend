import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import locale from 'antd/es/date-picker/locale/pt_BR';

import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  PictureOutlined,
} from '@ant-design/icons';

import {
  Container,
  RegisterForm,
  FormItem,
  FormInput,
  FormDatePicker,
  AvatarInput,
  EmptyImage,
  SubmitButton,
  iconSpace,
} from './styles';

import api from '../../services/api';

import { createService } from '../../store/modules/service/actions';

import required from '../../utils/requiredField';

const validateMessages = {
  required: 'Este campo é obrigatório',
  types: {
    email: 'Insira um email válido',
  },
};

function Register() {
  const [preview, setPreview] = useState('');
  const [file, setFile] = useState();

  const dispatch = useDispatch();

  const handleSubmit = async values => {
    dispatch(createService({ ...values, avatar_id: file }));
  };

  const handleAvatarChange = async e => {
    const data = new FormData();
    data.append('file', e.target.files[0]);

    const response = await api.post('files', data);
    const { id, url } = response.data;

    setFile(id);
    setPreview(url);
  };

  return (
    <Container>
      <RegisterForm
        name="nest-messages"
        onFinish={handleSubmit}
        validateMessages={validateMessages}
      >
        <AvatarInput>
          <label htmlFor="picture">
            {preview ? (
              <img src={preview} alt="preview" />
            ) : (
              <EmptyImage>
                <PictureOutlined style={{ fontSize: 30 }} color="#DDDDDD" />
                <span>Adicionar foto</span>
              </EmptyImage>
            )}
            <input
              type="file"
              accept="image/*"
              id="picture"
              onChange={handleAvatarChange}
            />
          </label>
        </AvatarInput>

        <FormItem name="name" rules={required}>
          <FormInput
            size="large"
            placeholder="Nome"
            prefix={<UserOutlined style={iconSpace} />}
          />
        </FormItem>
        <FormItem name="email" rules={[{ type: 'email', required: true }]}>
          <FormInput
            size="large"
            placeholder="Email"
            prefix={<MailOutlined style={iconSpace} />}
          />
        </FormItem>
        <FormItem name="phone" rules={required}>
          <FormInput
            size="large"
            placeholder="Telefone"
            prefix={<PhoneOutlined style={iconSpace} />}
          />
        </FormItem>
        <FormItem name="birth" rules={required}>
          <FormDatePicker
            size="large"
            placeholder="Data de nascimento"
            locale={locale}
          />
        </FormItem>
        <FormItem>
          <SubmitButton type="primary" htmlType="submit" size="large">
            Iniciar atendimento
          </SubmitButton>
        </FormItem>
      </RegisterForm>
    </Container>
  );
}

export default Register;
