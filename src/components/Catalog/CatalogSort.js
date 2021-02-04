
const CatalogSort = ({sortHandler}) => {
    return (
        <div className="catalog__sort-container">
          <label htmlFor="sort">Sortuj: </label>
          <select
            name="sort"
            onChange={(e) => sortHandler(e.target.value)}
            id="sort"
            className="catalog__sort"
          >
            <option value="ALFB">Alfabetycznie</option>
            <option value="FREE">Dostępne</option>
            <option value="POP">Popularność</option>
          </select>
        </div>
    )
}

export default CatalogSort
