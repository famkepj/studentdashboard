import React from "react";
import Profile from "../Profile"
import { Bar, Line} from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const Aranka = ({chartDataAranka, sortedByProject, StudentProfile}) => {

  const ArankaData = sortedByProject.filter((person) => person.name === `Aranka`)
  const getChartAranka = () => {
    chartDataAranka.labels = ArankaData.map((data) => data.project)
    chartDataAranka.datasets[0].data = ArankaData.map((data) => data.fun)
    chartDataAranka.datasets[1].data = ArankaData.map((data) => data.difficulty)
}
getChartAranka()

  return (
    <div>
    <h4>Student</h4>
    <Profile StudentProfile={StudentProfile[1]}></Profile>
    <h5>The charts are sorted as last chosen by all students table; sort by default by refreshing page</h5>
    <h4>Bar Chart</h4>
    <h6>Click on the label fun rating/ difficulty rating to exclude/ include the data</h6>
    <Bar data={chartDataAranka}/>
    <h4>Line Chart</h4>
    <h6>Click on the label fun rating/ difficulty rating to exclude/ include the data</h6>
    <Line data={chartDataAranka}/>
  </div>
  );
};

export default Aranka

