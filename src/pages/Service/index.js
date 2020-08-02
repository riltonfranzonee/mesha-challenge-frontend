import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col } from 'antd';

import {
  PlusOutlined,
  PlusCircleOutlined,
  ClockCircleOutlined,
  DollarCircleOutlined,
} from '@ant-design/icons';

import {
  Container,
  Header,
  Content,
  UserCard,
  PatientAvatar,
  PatientInfo,
  FinishButton,
  CardInfo,
  PageContent,
  ProblemInput,
  ProblemsList,
  ProceduresTop,
  ProcedureItem,
  PriceDisplay,
  DurationDisplay,
} from './styles';

import Modal from '../../components/Modal';

import { addProblem } from '../../store/modules/service/actions';

function Service() {
  const [problemInput, setProblemInput] = useState('');

  const [modal, setModal] = useState(false);

  const { patient, problems, procedures } = useSelector(state => state.service);

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
              <CardInfo>
                <strong>Valor total</strong>
                <span>R$110</span>
              </CardInfo>
              <CardInfo>
                <strong>Duração total</strong>
                <span>200h</span>
              </CardInfo>
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
                      <li key={`${problem.id}`}>{problem.name}</li>
                    ))}
                  </ProblemsList>
                </Col>
                <Col span={12}>
                  <ProceduresTop>
                    <h1>Tratamentos</h1>
                    <button type="button" onClick={() => setModal(true)}>
                      <PlusCircleOutlined />
                    </button>
                  </ProceduresTop>
                  <div className="scrollable-container">
                    {procedures.map(procedure => (
                      <ProcedureItem key={procedure.id}>
                        <strong>{procedure.name}</strong>
                        <DurationDisplay>
                          <ClockCircleOutlined />
                          <span>{procedure.duration}h</span>
                        </DurationDisplay>
                        <PriceDisplay>
                          <DollarCircleOutlined />
                          <span>R${procedure.price}</span>
                        </PriceDisplay>
                      </ProcedureItem>
                    ))}
                  </div>
                  <Modal open={modal} handleClose={() => setModal(false)} />
                </Col>
              </Row>
            </PageContent>
          </Col>
        </Row>
      </Content>
    </Container>
  );
}

export default Service;
