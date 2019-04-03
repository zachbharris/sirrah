import React from 'react';
import styled from 'styled-components';

import { border } from '../../theme/colors';

const Company = ({ company }) => {
  if (!company) return null;
  return (
    <Wrapper>
      <i className="fas fa-user-friends" />
      <span>{company}</span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  grid-area: company;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  i {
    margin-right: 0.5rem;
    font-size: 1rem;
    color: ${border};
  }

  span {
    font-size: 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export default Company;
