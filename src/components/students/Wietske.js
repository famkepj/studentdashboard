import React from "react";
import Profile from "../Profile";
import { Bar, Line} from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const Wietske = ({chartDataWietske, sortedByProject, StudentProfile}) => {

    const WietskeData = sortedByProject.filter((person) => person.name === `Wietske`)
  
    const getChartWietske = () => {
      chartDataWietske.labels = WietskeData.map((data) => data.project)
      chartDataWietske.datasets[0].data = WietskeData.map((data) => data.fun)
      chartDataWietske.datasets[1].data = WietskeData.map((data) => data.difficulty)
    }
    getChartWietske()

  return (
    <div>
      <h4>Student</h4>
      <Profile StudentProfile={StudentProfile[8]}></Profile>
      <h5>The charts are sorted as last chosen by all students table; sort by default by refreshing page</h5>
      <h4>Bar Chart</h4>
      <h6>
        Click on the label fun rating/ difficulty rating to exclude/ include the
        data
      </h6>
      <Bar data={chartDataWietske} />
      <h4>Line Chart</h4>
      <h6>Click on the label fun rating/ difficulty rating to exclude/ include the data</h6>
      <Line data={chartDataWietske}/>
    </div>
  );
};

export default Wietske

