import React from 'react';
import { Cursor } from 'react-creative-cursor';
import 'react-creative-cursor/dist/styles.css';

const CustomCursor = (props) => {
  return (
    <>
      <Cursor isGelly={true} cursorSize={props.cursorSize} cursorBackgrounColor={'#fff'} cursorInnerColor={'#000'} style={{fontFamily: 'WhitneyBold'}}/>
    </>
  );
};

export default CustomCursor