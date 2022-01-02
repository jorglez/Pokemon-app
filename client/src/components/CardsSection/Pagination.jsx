import { PaginationCss, PButtonCss } from "../styles/PaginationCss"



const Pagination = ({ page, setPage, length }) => {

  //variables passed as props since they come from the parent - variables pasadas como props ya que vienen del padre
  const limit = Math.ceil(length/12)

  const clickHandler = action => {

    if(action === "plus"){
      const newPage = page+1
      return setPage(newPage)
    }
    if(action === "minus"){
      const newPage = page-1
      return setPage(newPage)
    }
  }

  return (
    <PaginationCss>
      {page > 1 ? <PButtonCss onClick={()=> clickHandler("minus")}><i className="fas fa-arrow-left fa-2x"></i></PButtonCss> : null}
      {limit > page ? <PButtonCss onClick={()=> clickHandler("plus")}><i className="fas fa-arrow-right fa-2x"></i></PButtonCss> : null}
    </PaginationCss>
  );
}

export default Pagination;