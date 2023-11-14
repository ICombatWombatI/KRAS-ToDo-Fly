export interface KrDialogContentProps {
  children: any;
}

const KrDialogContent = (props: KrDialogContentProps) => {
  return <div className="kr-dialog-content"> {props.children} </div>
};

export default KrDialogContent;