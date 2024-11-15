import "./index.scss"
import { FaSearch, FaHome } from "react-icons/fa";

export default function Navbar({
    setSearchTerm,
  }: {
    setSearchTerm: (term: string) => void;
  }) {
    const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const searchInput = (event.currentTarget.elements[0] as HTMLInputElement)
        .value;
      if (searchInput.trim()) {
        setSearchTerm(searchInput);
      }
    };
  
    const handleRefresh = () => {
      window.location.reload();
    };
    return(
        <nav className="Nav">
            <h1 className="title">Filmes</h1>

            <div className="form" >
                <form className="form" onSubmit={handleSearch}>
                    <input type="text" className="input" placeholder="Pesquisar Filme..."/>
                    <button className="btn" type="submit"> <FaSearch /> </button>
                    <button onClick={handleRefresh} className="btn">
                    <FaHome />
                    </button>
                </form>
            </div>
        </nav>
    )
}