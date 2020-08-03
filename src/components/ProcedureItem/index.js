import React from 'react';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';

import {
  ClockCircleOutlined,
  CloseOutlined,
  DollarCircleOutlined,
} from '@ant-design/icons';

import { Wrapper, RemoveButton, PriceDisplay, DurationDisplay } from './styles';

import { removeProcedure } from '../../store/modules/service/actions';

function ProcedureItem({ procedure }) {
  const dispatch = useDispatch();

  return (
    <Wrapper key={procedure.id}>
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
    </Wrapper>
  );
}

export default ProcedureItem;

ProcedureItem.propTypes = {
  procedure: PropTypes.object.isRequired,
};
