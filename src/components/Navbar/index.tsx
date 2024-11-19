import "./index.scss"
import { FaSearch, FaHome } from "react-icons/fa";

export default function Navbar({setSearchTerm,}: {setSearchTerm: (term: string) => void;}) {
    const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const searchInput = (event.currentTarget.elements[0] as HTMLInputElement).value;
        
      if (searchInput !== "") {
        setSearchTerm(searchInput);
      }else{
        alert("Digite no campo de pesquisa para prosseguir")
        return
      }
    };
  
    const handleRefresh = () => {
      window.location.reload();
      
    };
    return(
        <nav className="Nav">
            <h1 className="title">Filmes</h1>

            <div className="divform" >
                <form className="form" onSubmit={handleSearch}>
                    <input type="text" className="input" placeholder="Pesquisar Filme..."/>
                    <button className="btn" type="submit"> <FaSearch /> </button>
                </form>
                    <button onClick={handleRefresh} className="btn">
                    <FaHome />
                    </button>
            </div>
        </nav>
    )
}