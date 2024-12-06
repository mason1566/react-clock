import { useState } from 'react';
import styled from 'styled-components';
import Clock from './components/Clock';

function App({ className }) {
  return (
    <div className={className}>
      <Clock />
    </div>
  )
}

const StyledApp = styled(App)`
  display: grid;
  place-items: center;
`;

export default StyledApp;
