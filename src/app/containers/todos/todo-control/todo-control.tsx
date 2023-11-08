import KrButton, { KrButtonType } from "../../../components/general/krButton/krButton";

 export function TodoControl( /*{ board }: {board: Board} */) {
  return (
    <div className='control-panel'>
      <div className="actions">
        {/*<span className="board">  board.title </span>*/}
        <KrButton type={KrButtonType.ACTION} iconConfig={{ name: 'date_range' }} />
        <KrButton type={KrButtonType.ACTION} iconConfig={{ name: 'cloud_done' }} />
        <KrButton type={KrButtonType.ACTION} iconConfig={{ name: 'filter_list' }} />
        <KrButton type={KrButtonType.ACTION} iconConfig={{ name: 'search' }} />
        <KrButton type={KrButtonType.ACTION} iconConfig={{ name: 'add' }} />
      </div>
    </div>
  )
}
