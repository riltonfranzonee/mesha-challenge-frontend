import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { ClockCircleOutlined, DollarCircleOutlined } from '@ant-design/icons';

import { PDFDownloadLink } from '@react-pdf/renderer';

import {
  Wrapper,
  PatientAvatar,
  PatientInfo,
  FinishButton,
  CardInfo,
  CardTag,
} from './styles';

import ReportDocument from '../Report';

import { finishService } from '../../store/modules/service/actions';
import Timer from '../Timer';

import formatPrice from '../../utils/formatPrice';

function UserCard() {
  const { patient, problems, procedures, service } = useSelector(
    state => state.service
  );

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

  const handleFinish = () => {
    dispatch(
      finishService({
        problems_id: problems.length ? problems.map(p => p.id) : [],
        procedures_id: procedures.length ? procedures.map(p => p.id) : [],
        service_id: service.id,
      })
    );
  };

  return (
    <Wrapper>
      <PatientInfo>
        <PatientAvatar src={patient.avatar_url} size={100} />
        <span>{patient.name}</span>
      </PatientInfo>
      <Timer />

      <CardInfo>
        <div>
          <DollarCircleOutlined />
          <CardTag>Custo</CardTag>
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
      <FinishButton onClick={handleFinish} size="large">
        Finalizar atendimento
      </FinishButton>
      <PDFDownloadLink
        id="pdf-button"
        document={
          <ReportDocument
            patient={patient}
            procedures={procedures}
            problems={problems}
          />
        }
      >
        {({ loading }) =>
          loading ? 'Gerando o relatório...' : 'Gerar relatório'
        }
      </PDFDownloadLink>
    </Wrapper>
  );
}

export default UserCard;
