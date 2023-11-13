import { forwardRef, useImperativeHandle, useState } from "react";
import KrDialog from "../../../components/general/krDialog/krDialog";
import KrDialogActions from "../../../components/general/krDialog/krDialogActions";
import KrDialogTitle from "../../../components/general/krDialog/krDialogTitle";
import { Todo } from "../../../models/todo.model";

export interface TaskDetailsProps {
  //openDialog: () => void;
}

export interface TaskDetailsRef {
  openDialog: (todo: Todo) => void;
}

const TaskDetailsDialog = forwardRef<TaskDetailsRef, TaskDetailsProps>((props, ref) => {
  //const [open, setOpen] = useState(false);
  const [todo, setTodo] = useState<Todo | null>(null);

	const closeHandler = () => {
    setTodo(null);
  };

	const openHandler = (todo: Todo) => {
  	setTodo(todo);
  };
	
	useImperativeHandle(ref, () => ({
      openDialog(todo) {
        console.log(todo);
        openHandler(todo);
      }
  }));

  return (<>
    <KrDialog open={!!todo} classes={'task-details'}>
      <KrDialogTitle title={todo?.title ?? '' } onClose={closeHandler}/>
        <div className="kr-dialog-content"> 
          
        </div>
      <KrDialogActions/>
    </KrDialog>
  </>);
});

export default TaskDetailsDialog;