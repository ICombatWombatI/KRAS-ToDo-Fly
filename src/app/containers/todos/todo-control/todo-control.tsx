import KrButton, { KrButtonType } from "../../../components/general/krButton/krButton";
import { KrSearch } from "../../../components/general/krSearch/krSearch";

interface TodoControlProps {
  onSearch: (text: string | null) => void;
  onTaskDone: () => void;
  onAddTask: () => void;
}

 export function TodoControl(props: TodoControlProps) {
  
  const handleSearch = (text: string | null) => {
    props.onSearch(text);
  };

  const handleTaskDone = () => {
    props.onTaskDone();
  };

  const handleAddTask = () => {
    props.onAddTask();
  };

  return (
    <div className='control-panel'>
      <div className="actions">
        {/*<span className="board">  board.title </span>*/}
        {/*<KrButton type={KrButtonType.ACTION} iconConfig={{ name: 'date_range' }} />*/}
        <KrButton onToggle={handleTaskDone} type={KrButtonType.ACTION} iconConfig={{ name: 'cloud_done' }} />
        <KrSearch onSearch={handleSearch}/>
        <KrButton type={KrButtonType.ACTION} iconConfig={{ name: 'filter_list' }} />
        <KrButton onToggle={handleAddTask} type={KrButtonType.ACTION} iconConfig={{ name: 'add' }} />
      </div>
    </div>
  );
}
