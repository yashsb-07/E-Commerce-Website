import "./Pagination.css";

function Pagination() {
  return (
    <div className="pagination">

      <button className="page-btn active-page">1</button>
      <button className="page-btn">2</button>
      <button className="page-btn">3</button>

      <button className="page-btn next-btn">
        Next →
      </button>

    </div>
  );
}

export default Pagination;