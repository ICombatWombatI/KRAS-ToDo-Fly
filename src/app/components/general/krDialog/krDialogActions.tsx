import KrButton, { KrButtonType } from "../krButton/krButton";

const KrDialogActions = (props: any) => {
  return (
		<div className="kr-dialog-actions">
			<KrButton onToggle={props.onClose} type={KrButtonType.REGULAR} text="Save"/>
		</div>
	)
}

export default KrDialogActions;