import React from "react";
import Profile from "../Profile";
import { Bar, Line } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const Storm = ({chartDataStorm, sortedByProject, StudentProfile}) => {

    const StormData = sortedByProject.filter((person) => person.name === `Storm`)
  
    const getChartStorm = () => {
      chartDataStorm.labels = StormData.map((data) => data.project)
      chartDataStorm.datasets[0].data = StormData.map((data) => data.fun)
      chartDataStorm.datasets[1].data = StormData.map((data) => data.difficulty)
    }
    getChartStorm()

  return (
    <div>
      <h4>Student</h4>
      <Profile StudentProfile={StudentProfile[9]}></Profile>
      <h4>Bar Chart</h4>
      <h6>
        Click on the label fun rating/ difficulty rating to exclude/ include the
        data
      </h6>
      <Bar data={chartDataStorm} />
      <h4>Line Chart</h4>
      <h6>Click on the label fun rating/ difficulty rating to exclude/ include the data</h6>
      <Line data={chartDataStorm}/>
    </div>
  );
};

export default Storm
