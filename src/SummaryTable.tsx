import './SummaryTable.css';

function SummaryTable() {
  const RecruitmentSummary: {
    applied: number;
    recommended: number;
    interviewed: number;
    offer: number;
    hired: number;
    totalRejection: number;
  } = {
    applied: 95,
    recommended: 57,
    interviewed: 39,
    offer: 33,
    hired: 15,
    totalRejection: 50,
  };

  const summaryArr: {
    opportunity?: string;
    status: string;
    applied: number;
    recommended: number;
    interview: number;
    offer: number;
    hire: number;
  }[] = [
    {
      status: 'Active',
      applied: 20,
      recommended: 17,
      interview: 4,
      offer: 3,
      hire: 1,
    },
    {
      opportunity: 'UX Internship',
      status: 'Disqualified',
      applied: 7,
      recommended: 4,
      interview: 1,
      offer: 1,
      hire: 1,
    },
    {
      status: 'Sub-Total',
      applied: 27,
      recommended: 21,
      interview: 5,
      offer: 4,
      hire: 2,
    },

    {
      status: 'Active',
      applied: 44,
      recommended: 32,
      interview: 21,
      offer: 19,
      hire: 10,
    },
    {
      opportunity: 'Art Internship',
      status: 'Disqualified',
      applied: 24,
      recommended: 4,
      interview: 7,
      offer: 8,
      hire: 3,
    },

    {
      status: 'Sub-Total',
      applied: 68,
      recommended: 36,
      interview: 26,
      offer: 27,
      hire: 13,
    },
  ];

  return (
    <div className="summaryTable">
      <div className="summary__header">
        <p>Google</p>
        <div>
          <img
            src={require('./images/Chart_Pie.png')}
            alt="search"
            width={'15px'}
            height={'15px'}
            style={{ marginRight: '15px' }}
            className="summary__header_img"
          />

          <img
            src={require('./images/File_Download.png')}
            alt="search"
            width={'15px'}
            height={'15px'}
            // style={{ marginRight: '15px' }}
            className="summary__header_img"
          />
        </div>
      </div>

      <div className="summary">
        <div className="summaryByNumber">
          <p className="period">Applied</p>
          <p>{RecruitmentSummary?.applied}</p>
        </div>
        <div className="summaryByNumber">
          <p className="period">Recommended</p>
          <p>{RecruitmentSummary?.recommended} </p>
        </div>
        <div className="summaryByNumber">
          <p className="period">Inverview</p>
          <p>{RecruitmentSummary?.interviewed} </p>
        </div>
        <div className="summaryByNumber">
          <p className="period">Offer</p>
          <p>{RecruitmentSummary?.offer} </p>
        </div>
        <div className="summaryByNumber">
          <p className="period">Hired</p>
          <p>{RecruitmentSummary?.hired} </p>
        </div>
        <div className="summaryByNumber">
          <p className="period">Total Rejection</p>
          <p>{RecruitmentSummary?.totalRejection} </p>
        </div>
      </div>

      <div className="summary__table">
        <table>
          <thead>
            <tr>
              <th className="opportune">Opportunity Name</th>
              <th>Status</th>
              <th>Applied</th>

              <th>Recommended</th>
              <th>Interview</th>

              <th>Offer</th>
              <th>Hired</th>
            </tr>
          </thead>
          <tbody>
            {summaryArr?.map((item, i) => (
              <tr key={i}>
                <td className="opportune">{item?.opportunity}</td>
                <td
                  className={`status ${
                    item?.status === 'Disqualified'
                      ? 'statusDis'
                      : 'statusActive'
                  }`}
                >
                  {item?.status}
                </td>
                <td>{item?.applied}</td>

                <td>{item?.recommended}</td>
                <td>{item?.interview}</td>

                <td>{item?.offer}</td>
                <td>{item?.hire}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SummaryTable;
