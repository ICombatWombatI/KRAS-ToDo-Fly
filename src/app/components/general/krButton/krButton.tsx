 
export enum KrButtonType {
  ACTION = 'action',
  REGULAR = 'regular'
}

export enum KrButtonIconPosition {
  START = 'icon-start',
  END = 'icon-end'
}

export interface KrButtonIcon {
  name: string,
  positions?: KrButtonIconPosition
}

interface KrButtonProps {
  text?: string,
  type?: KrButtonType,
  iconConfig?: KrButtonIcon,
  onToggle?: () => void
}

const KrButton = (props : KrButtonProps) => {
  return (<>
    <button 
      className={`krButton ${props.type ?? KrButtonType.REGULAR} ${props.iconConfig?.positions ?? ''}`} 
      onClick={() => props.onToggle ? props.onToggle() : {}}>
      { props.iconConfig ? <i className="icon material-icons"> {props.iconConfig.name} </i> : ''}
      { props.text ? props.text : ''}
    </button>
  </>);
}

export default KrButton;
