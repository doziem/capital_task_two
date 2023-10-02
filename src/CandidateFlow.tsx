import React from 'react';
import './CandidateFlow.css';

function CandidateFlow() {
  const applicationFlow: {
    stage: string;
    qualified: number;
    unqualified: number;
  }[] = [
    {
      stage: 'Applied',
      qualified: 3122,
      unqualified: 1445,
    },
    {
      stage: 'Recommended',
      qualified: 2164,
      unqualified: 958,
    },
    {
      stage: 'Interview',
      qualified: 443,
      unqualified: 1721,
    },
    {
      stage: 'Offer',
      qualified: 183,
      unqualified: 260,
    },
    {
      stage: 'Hired',
      qualified: 118,
      unqualified: 65,
    },
  ];
  return (
    <div className="candidate">
      <h5>Total Candidate Flow</h5>
      <h5>4,567</h5>
      <div className="candiadte__summary">
        <div className="summary_line">
          <p className="summary_qualified">Qualified</p>
        </div>
        <span className="summary_unqualified">
          <span className="summary_unqual__line">Unqualified</span>
        </span>
      </div>
      <div className="candidate__table">
        <table>
          <thead>
            <tr>
              <th className="stage">Stage</th>
              <th className="qualify">Qualified</th>
              <th className="qualify">Unqualified</th>
            </tr>
          </thead>
          <tbody>
            {applicationFlow?.map((item, i) => (
              <tr key={i}>
                <td className="stage">{item?.stage}</td>
                <td>{item?.qualified}</td>
                <td>{item?.unqualified}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="recommendInterview">
        <div className="recommend">
          <div className="recommended">
            <h5>Recommended</h5>
            <p>2,164</p>
          </div>
          <div className="previousJob">
            <p className="period">Previous Period</p>
            <div className="previousSummary">
              <span>90 </span>
              <p
                className={`percentDiff ? 'back' : ''
                  }`}
              >
                <img
                  src={require('./images/signal.png')}
                  alt="home Icon"
                  width={'14px'}
                  height={'14px'}
                  className="signalIcon"
                />
                <span>15%</span>
              </p>
            </div>
          </div>
        </div>
        <div className="seperated"></div>
        <div className="interviewed">
          <div className="recommended">
            <h5>Interview</h5>
            <p>443</p>
          </div>
          <div className="previousJob">
            <p className="period">Previous Period</p>
            <div className="previousSummary">
              <span>90 </span>
              <p
                className={`percentDiff ? 'back' : ''
                  }`}
              >
                <img
                  src={require('./images/signal.png')}
                  alt="home Icon"
                  width={'14px'}
                  height={'14px'}
                  className="signalIcon"
                />
                <span>15%</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CandidateFlow;
