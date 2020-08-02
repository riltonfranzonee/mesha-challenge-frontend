import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col } from 'antd';

import {
  PlusOutlined,
  PlusCircleOutlined,
  ClockCircleOutlined,
  CloseOutlined,
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
  CardTag,
  PageContent,
  ProblemInput,
  ProblemsList,
  ProceduresTop,
  ProcedureItem,
  RemoveButton,
  PriceDisplay,
  DurationDisplay,
} from './styles';

import Modal from '../../components/Modal';

import {
  addProblem,
  removeProcedure,
} from '../../store/modules/service/actions';

import formatPrice from '../../utils/formatPrice';

function Service() {
  const [problemInput, setProblemInput] = useState('');
  const [modal, setModal] = useState(false);

  const { patient, problems, procedures } = useSelector(state => state.service);

  const totalPrice = procedures.length
    ? formatPrice(
        procedures
          .map(p => parseFloat(p.price))
          .reduce((sumTotal, item) => sumTotal + item)
      )
    : 'R$ 00,00';

  const totalHours = procedures.length
    ? procedures
        .map(p => +p.duration)
        .reduce((sumTotal, item) => sumTotal + item)
    : '0';

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
        <Row gutter={20}>
          <Col span={6}>
            <UserCard>
              <PatientInfo>
                <PatientAvatar src={patient.avatar_url} size={100} />
                <span>{patient.name}</span>
              </PatientInfo>
              <CardInfo>
                <div>
                  <DollarCircleOutlined />
                  <CardTag>Preço</CardTag>
                </div>
                <strong>{totalPrice}</strong>
              </CardInfo>
              <CardInfo>
                <div>
                  <ClockCircleOutlined />
                  <CardTag>Duração</CardTag>
                </div>
                <strong>{totalHours}h</strong>
              </CardInfo>
              <FinishButton size="large">Finalizar atendimento</FinishButton>
            </UserCard>
          </Col>
          <Col span={18}>
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
                      <PlusOutlined />
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
                    {procedures.length ? (
                      procedures.map(procedure => (
                        <ProcedureItem key={procedure.id}>
                          <strong>{procedure.name}</strong>
                          <DurationDisplay>
                            <ClockCircleOutlined />
                            <span>{procedure.duration}h</span>
                          </DurationDisplay>
                          <PriceDisplay>
                            <DollarCircleOutlined />
                            <span>R${procedure.price}</span>
                            <RemoveButton
                              onClick={() => {
                                dispatch(removeProcedure(procedure.id));
                              }}
                            >
                              <CloseOutlined />
                            </RemoveButton>
                          </PriceDisplay>
                        </ProcedureItem>
                      ))
                    ) : (
                      <div>Nenhum tratamento adicionado ainda</div>
                    )}
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
