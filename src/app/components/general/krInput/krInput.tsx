 import { KeyboardEvent, createRef, useEffect, useState } from 'react';

 export enum KrInputType {
  TEXT = 'text',
  PASSWORD = 'password',
  NUMBER = 'number'
}

interface KrInputProps {
  type?: KrInputType;
  focus?: boolean;
  onEnterDown?: (text: string) => void;
}

const KrInput = (props : KrInputProps) => {
  const [value, setValue] = useState('');
  const descRef = createRef<HTMLInputElement>();

  useEffect(() => {
    if (props.focus) {
      descRef.current?.focus();
    }
  }, []);

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && props.onEnterDown) {
      props.onEnterDown(value);
    }
  };

  return (<>
    <div className="kr-input-container">
      <input 
        className="kr-input body_1"
        ref={descRef}
        value={value} 
        onChange={e => setValue(e.target.value)}
        type={props.type ?? KrInputType.TEXT} 
        onKeyDown={handleKeyDown} />
      <div className="underline"></div>
    </div>
  </>);
}

export default KrInput;
