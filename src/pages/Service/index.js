import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col } from 'antd';

import { PlusOutlined, PlusCircleOutlined } from '@ant-design/icons';

import {
  Container,
  Header,
  Content,
  PageContent,
  ProblemInput,
  ProblemsList,
  ProceduresTop,
} from './styles';

import Modal from '../../components/Modal';
import UserCard from '../../components/UserCard';
import ProcedureItem from '../../components/ProcedureItem';

import { addProblem } from '../../store/modules/service/actions';

function Service() {
  const [problemInput, setProblemInput] = useState('');
  const [modal, setModal] = useState(false);

  const { problems, procedures } = useSelector(state => state.service);

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
            <UserCard />
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
                        <ProcedureItem
                          key={procedure.id}
                          procedure={procedure}
                        />
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
