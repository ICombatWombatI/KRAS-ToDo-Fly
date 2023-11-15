import { forwardRef, useImperativeHandle, useState } from "react";
import KrDialog from "../../../components/general/krDialog/krDialog";
import KrDialogActions from "../../../components/general/krDialog/krDialogActions";
import KrDialogTitle from "../../../components/general/krDialog/krDialogTitle";
import { Todo } from "../../../models/todo.model";
import KrDialogContent from "../../../components/general/krDialog/krDialogContent";
import TaskDetailsForm from "../task-details-form/task-details-form";

export interface TaskDetailsDialogProps {
  //openDialog: () => void;
}

export interface TaskDetailsDialogRef {
  openDialog: (todo: Todo | null) => void;
}

const TaskDetailsDialog = forwardRef<TaskDetailsDialogRef, TaskDetailsDialogProps>((props, ref) => {
  const [open, setOpen] = useState(false);
  const [todo, setTodo] = useState<Todo | null>(null);

	const closeHandler = () => {
    setOpen(false);
  };

	const openHandler = (todo: Todo | null) => {
  	setOpen(true);
    setTodo(todo);
  };
	
	useImperativeHandle(ref, () => ({
      openDialog(todo) {
        openHandler(todo);
      }
  }));

  return (<>
    <KrDialog open={open} classes={'task-details'}>
      <KrDialogTitle title={todo?.title ?? '' } onClose={closeHandler}/>
        <KrDialogContent>
          <TaskDetailsForm/>
        </KrDialogContent>
      <KrDialogActions/>
    </KrDialog>
  </>);
});

export default TaskDetailsDialog;