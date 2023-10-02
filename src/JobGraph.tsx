import { Line } from 'react-chartjs-2';
import './JobGraph.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  Filler,
  ArcElement,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  Filler,
  ArcElement
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
      position: 'top' as const,
    },
    title: {
      display: false,
      text: 'Chart.js Line Chart',
    },
  },
};

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Qualified',
      backgroundColor: '#FBE38E',
      borderColor: '#FBE38E',
      data: [300, 660, 570, 500, 480, 390, 600],
    },
    {
      label: 'Disqualified',

      backgroundColor: '#9A89FF',
      borderColor: '#9A89FF',
      data: [290, 450, 290, 370, 470, 370, 500],
      //   hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    },
  ],
};

const JobGraph = () => {
  return (
    <div className="jobGraph">
      <div className="jobGraph_header">
        <select name="" id="">
          <option value="">Recommendation</option>
        </select>
        <div className="jobGraph_header__right">
          <div className="jobGraph__qualify">
            <p></p>
            <span>Qualified</span>
          </div>
          <div className="jobGraph__disqualify">
            <p></p>
            <span>Disqualified</span>
          </div>
        </div>
      </div>
      <Line data={data} options={options} />
    </div>
  );
};
export default JobGraph;
