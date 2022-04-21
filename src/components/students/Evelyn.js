import React from "react";
import Profile from "../Profile"
import { Bar, Line } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);


const Evelyn = ({chartDataEvelyn, sortedByProject, StudentProfile}) => {

  const EvelynData = sortedByProject.filter((person) => person.name === `Evelyn`)
  const getChartEvelyn = () => {
    chartDataEvelyn.datasets[0].data = EvelynData.map((data) => data.fun)
    chartDataEvelyn.datasets[1].data = EvelynData.map((data) => data.difficulty)
  }
  getChartEvelyn()

console.log(StudentProfile)

  return (
    <div>
      <h4>Student</h4>
      <Profile StudentProfile={StudentProfile[0]}></Profile>
      <h4>Bar Chart</h4>
      <h6>Click on the label fun rating/ difficulty rating to exclude/ include the data</h6>
      <Bar data={chartDataEvelyn}/>
      <h4>Line Chart</h4>
      <h6>Click on the label fun rating/ difficulty rating to exclude/ include the data</h6>
      <Line data={chartDataEvelyn}/>
    </div>
  );
};

export default Evelyn

