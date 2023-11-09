import KrButton, { KrButtonType } from "../../../components/general/krButton/krButton";
import { KrSearch } from "../../../components/general/krSearch/krSearch";

 export function TodoControl( /*{ board }: {board: Board} */) {
  
  const handleSearch = (text: string | null) => {
    console.log('Search ' + text);
  };

  return (
    <div className='control-panel'>
      <div className="actions">
        {/*<span className="board">  board.title </span>*/}
        <KrButton type={KrButtonType.ACTION} iconConfig={{ name: 'date_range' }} />
        <KrButton type={KrButtonType.ACTION} iconConfig={{ name: 'cloud_done' }} />
        <KrSearch onSearch={handleSearch}/>
        <KrButton type={KrButtonType.ACTION} iconConfig={{ name: 'filter_list' }} />
        <KrButton type={KrButtonType.ACTION} iconConfig={{ name: 'add' }} />
      </div>
    </div>
  )
}
