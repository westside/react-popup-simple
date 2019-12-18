import React, { useState } from 'react';
import { PopupSimple } from './react-popup-simple';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
`;

const App = () => {
  const testArray = new Array(50).fill(0);
  const [isOpen, setOpen] = useState(true);
  return (
    <>
      <Wrapper>
        {testArray.map((i, index) => (
          <div key={index}>aaa{i} ???</div>
        ))}

        <button
          onClick={() => {
            setOpen(true);
          }}
        >
          Open Popup ??
        </button>
        {testArray.map((i, index) => (
          <div key={index}>aaa{i} ???</div>
        ))}
      </Wrapper>
      {isOpen && (
        <PopupSimple
          header={'text'}
          closePopup={() => {
            setOpen(false);
          }}
        >
          <div>
            Here asdf;aslkfj;saldkfjsa;dlfj
            sadf;kdsajf safkjsdf; asfsdljsdf
            sadf;kdsajf safkjsdf; asfsdljsdf
            sadf;kdsajf safkjsdf; asfsdljsdf
            sadf;kdsajf safkjsdf; asfsdljsdf
            sadf;kdsajf safkjsdf; asfsdljsdf
            sadf;kdsajf safkjsdf; asfsdljsdf
            sadf;kdsajf safkjsdf; asfsdljsdf
            sadf;kdsajf safkjsdf; asfsdljsdf
            sadf;kdsajf safkjsdf; asfsdljsdf
            sadf;kdsajf safkjsdf; asfsdljsdf
            sadf;kdsajf safkjsdf; asfsdljsdf
          </div>
          <div style={{height: '800px'}}>
              tes
          </div>
        </PopupSimple>
      )}
    </>
  );
};

export default App;
