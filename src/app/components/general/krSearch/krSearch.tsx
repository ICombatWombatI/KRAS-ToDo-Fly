import { useState } from "react";
import KrButton, { KrButtonType } from "../../../components/general/krButton/krButton";
import KrInput from "../../../components/general/krInput/krInput";

interface KrSearchProps {
  onSearch: (text: string | null) => void;
}

 export function KrSearch(props: KrSearchProps) {
  const [active, setActive] = useState(false);

  const handelActive = () => {
    if (!active) {
      setActive(true);
      return;
    }

    props.onSearch(null);
    setActive(false);
  }

  const handelSearch = (text: string) => {
    if (!text || !text.length) {
      setActive(false);
    }

    props.onSearch(text);
  }

  return (
    <div className="kr-search">
      <KrButton type={KrButtonType.ACTION} iconConfig={{ name: active ? 'search_off' : 'search' }} onToggle={handelActive} />
      { active ? <KrInput onEnterDown={handelSearch} focus={true} label={'Search'}/> : '' }
    </div>
  )
}
