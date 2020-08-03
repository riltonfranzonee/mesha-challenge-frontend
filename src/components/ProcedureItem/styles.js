import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #fff;
  width: 80%;
  height: 70px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  margin: 15px 0;
  box-shadow: 2px 4px 7px -2px rgba(0, 0, 0, 0.78);

  strong {
    font-size: 18px;
    color: #000;
    width: 50%;

    &::first-letter {
      text-transform: uppercase;
    }
  }

  div {
    font-size: 16px;

    span {
      margin-left: 5px;
    }
  }
`;

export const PriceDisplay = styled.div`
  width: 30%;
  position: relative;
`;

export const DurationDisplay = styled.div`
  width: 20%;
`;

export const RemoveButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  margin-top: -19px;
  margin-right: -12px;
  background-color: transparent;
  border: none;
  font-size: 13px;

  &:hover {
    color: red;
  }
`;
