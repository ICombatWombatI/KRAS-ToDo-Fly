import { createPortal } from "react-dom";

export interface KrDialogProps {
  children: any;
  open: boolean;
  classes?: string;
}

const KrDialog = (props: KrDialogProps) => {
  return props.open && 
    createPortal(
      <div className={`modal-overlay`}>
        <div className={`kr-dialog ${props?.classes}`}>
          { props.children }
        </div>
      </div>,
      document.querySelector("#modal-container")!
    );
};

export default KrDialog;