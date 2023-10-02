import React from 'react';
import './jobSummary.css';
import JobGraph from './JobGraph';

function JobSummary() {
  const jobSummaryArr: {
    currentJob: string;
    numberOfApplied: number;
    period: string;
    previousApplied: number;
    percentageDiff: number;
    imgUp: string;
    imgDown: string;
  }[] = [
    {
      currentJob: 'Applied',
      numberOfApplied: 3122,
      period: 'Previous Period',
      previousApplied: 1590,
      percentageDiff: 15,
      imgUp: require('./images/signal.png'),
      imgDown: require('./images/downSignal.png'),
    },
    {
      currentJob: 'Offer',
      numberOfApplied: 183,
      period: 'Previous Period',
      previousApplied: 71,
      percentageDiff: 15,
      imgUp: require('./images/signal.png'),
      imgDown: require('./images/downSignal.png'),
    },
    {
      currentJob: 'Hired',
      numberOfApplied: 98,
      period: 'Previous Period',
      previousApplied: 167,
      percentageDiff: 15,
      imgUp: require('./images/signal.png'),
      imgDown: require('./images/downSignal.png'),
    },
  ];
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div className="job">
        <div className="jobInfo">
          {jobSummaryArr.map((job, i) => (
            <div className="jobSummary" key={i}>
              <p className="applied">{job.currentJob}</p>
              <h6>{job?.numberOfApplied} </h6>
              <div className="previousJob">
                <p className="period">{job?.period}</p>
                <div className="previousSummary">
                  <span>{job?.numberOfApplied} </span>
                  <p
                    className={`percentDiff ${
                      job?.currentJob === 'Hired' ? 'back' : ''
                    }`}
                  >
                    <img
                      src={`${
                        job.currentJob === 'Applied' ||
                        job.currentJob === 'Offer'
                          ? job.imgUp
                          : job?.imgDown
                      }`}
                      alt="home Icon"
                      width={'14px'}
                      height={'14px'}
                      className="signalIcon"
                    />
                    <span>{`${job?.percentageDiff}%`}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <JobGraph />
    </div>
  );
}

export default JobSummary;
