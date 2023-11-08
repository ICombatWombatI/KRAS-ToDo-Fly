 import { KeyboardEvent, createRef, useState } from 'react';

 export enum KrInputType {
  TEXT = 'text',
  PASSWORD = 'password',
  NUMBER = 'number'
}

interface KrInputProps {
  type?: KrInputType,
  onAction?: (data: string) => void
}

const KrInput = (props : KrInputProps) => {
  const [value, setValue] = useState('');
  const descRef = createRef<HTMLInputElement>();

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && props.onAction) {
      descRef.current?.blur();
    }
  };

  const handleBlur = () => {
    if (props.onAction) {
      props.onAction(value);
    }
  };

  return (<>
    <div className="kr-input-container">
      <input 
        className="kr-input body_1"
        ref={descRef}
        value={value} 
        onChange={e => setValue(e.target.value)}
        onBlur={handleBlur}
        type={props.type ?? KrInputType.TEXT} onKeyDown={handleKeyDown} />
      <div className="underline"></div>
    </div>
  </>);
}

export default KrInput;
