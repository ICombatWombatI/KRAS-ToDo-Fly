import { KeyboardEvent, createRef, useEffect } from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

 export enum KrInputType {
  TEXT = 'text',
  PASSWORD = 'password',
  NUMBER = 'number'
}

export interface KrInputProps {
  type?: KrInputType;
  focus?: boolean;
  onEnterDown?: (text: string) => void;
  name?: string;
  label?: string;
  register?: UseFormRegister<FieldValues>;
  validationSchema?: any; // 
  errors?: FieldErrors;
  required?: boolean;
}

export enum KrErrorTypeEnum {
  REQUIRED = 'required'
}

export enum KrErrorMessageEnum {
  REQUIRED = 'This field is required!'
}

const krInputErrorMap = new Map([
  [KrErrorTypeEnum.REQUIRED, KrErrorMessageEnum.REQUIRED]
]);

const KrInput = (props : KrInputProps) => {
  const descRef = createRef<HTMLInputElement>();
  const register = props.register ? props.register(props.name!) : {};
  const isError = errorCheck(props.errors);

  useEffect(() => {
    if (props.focus) {
      descRef.current?.focus();
    }
  }, []);

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && props.onEnterDown) {
      props.onEnterDown(descRef.current?.value ?? '');
    }
  };

  return (
    <div className={`kr-input ${isError ? 'kr-error' : ''}`}>
      <div className='kr-input-container'>
        <input 
          id={props.name}
          className="body_1"
          placeholder={props.label}
          ref={descRef}
          type={props.type ?? KrInputType.TEXT} 
          onKeyDown={handleKeyDown} 
          required={props.required}
          {...register}/>
        <div className="underline"></div>
      </div>
        
      {isError && props.name && (
        <div className='kr-error-container'>
          <span className="caption font-weight-500 error"> {errorMessage(props.errors, props.name)} </span>
        </div>
      )}
    </div>
  );
}

export default KrInput;

function errorCheck(fieldErrors: FieldErrors | undefined): boolean {
  return !!fieldErrors && Object.keys(fieldErrors).length !== 0;
}

function errorMessage(fieldErrors: FieldErrors | undefined, fieldName: string | undefined): string {
  if (!fieldErrors || !fieldName) {
    return '';
  }

  const errorType = fieldErrors[fieldName]?.type;
  const errorMessage = krInputErrorMap.get(errorType as KrErrorTypeEnum);

  return errorMessage ?? '';
}


