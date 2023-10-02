import SummaryTable from './SummaryTable';
import './overview.css';

function Overview() {
  return (
    <div className="overview">
      <h6>Detailed Opportunity Overview</h6>
      <div className="container">
        <form className="nosubmit">
          <input
            className="nosubmit"
            type="search"
            placeholder="Search by employer name"
          />
          <img
            src={require('./images/searchIcon.png')}
            alt="search"
            width={'15px'}
            height={'15px'}
            style={{ marginRight: '15px' }}
          />
        </form>
        <div className="sortBy">
          <select>
            <option>Sort by</option>
            <option>Applied</option>
            <option>Recommended</option>
            <option>Interview</option>
            <option>Offer</option>
            <option>Hired</option>
            <option>Rejected</option>
          </select>
          <img
            src={require('./images/sortIcon.png')}
            alt="search"
            width={'15px'}
            height={'15px'}
            style={{ marginRight: '15px' }}
          />
        </div>
        <div className="export">
          <p>Export All As CSV</p>
        </div>
      </div>
      <SummaryTable />
    </div>
  );
}

export default Overview;
