import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col } from 'antd';

import { PlusOutlined } from '@ant-design/icons';

import {
  Container,
  Header,
  Content,
  UserCard,
  PatientAvatar,
  PatientInfo,
  FinishButton,
  PriceInfo,
  PageContent,
  ProblemInput,
  ProblemsList,
} from './styles';

import { addProblem } from '../../store/modules/service/actions';

function Service() {
  const [problemInput, setProblemInput] = useState('');

  const { patient, problems } = useSelector(state => state.service);

  const dispatch = useDispatch();

  const handleNewProblem = () => {
    if (problemInput) {
      dispatch(addProblem(problemInput));
      setProblemInput('');
    }
  };

  return (
    <Container>
      <Header className="header" />
      <Content>
        <Row gutter={25}>
          <Col span={5}>
            <UserCard>
              <PatientInfo>
                <PatientAvatar src={patient.avatar_url} size={100} />
                <span>{patient.name}</span>
              </PatientInfo>
              <PriceInfo>
                <strong>Valor total</strong>
                <span>R$110</span>
              </PriceInfo>
              <FinishButton>Finalizar atendimento</FinishButton>
            </UserCard>
          </Col>
          <Col span={19}>
            <PageContent>
              <Row>
                <Col span={12} justify="center">
                  <ProblemInput
                    onSubmit={e => {
                      e.preventDefault();
                      handleNewProblem();
                    }}
                  >
                    <input
                      type="text"
                      placeholder="Adicionar uma queixa"
                      onChange={e => setProblemInput(e.target.value)}
                      value={problemInput}
                    />
                    <button type="button" onClick={handleNewProblem}>
                      <PlusOutlined color="#fff" />
                    </button>
                  </ProblemInput>
                  <ProblemsList>
                    {problems.map(problem => (
                      <li>{problem.name}</li>
                    ))}
                  </ProblemsList>
                </Col>
                <Col span={12}>Tratamentos</Col>
              </Row>
            </PageContent>
          </Col>
        </Row>
      </Content>
    </Container>
  );
}

export default Service;
