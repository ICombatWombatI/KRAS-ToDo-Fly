import KrButton, { KrButtonType } from "../krButton/krButton";

export interface KrDialogTitleProps {
  title: string;
	onClose: () => void;
}

const KrDialogTitle = (props: KrDialogTitleProps) => {
  return (		
		<div className="kr-dialog-title">
			<span className="body_3"> { props.title }</span>
			<KrButton onToggle={props.onClose} type={KrButtonType.ACTION} iconConfig={{ name: 'close' }} />
		</div>
	)
}

export default KrDialogTitle;