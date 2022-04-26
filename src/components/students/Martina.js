import React from "react";
import Profile from "../Profile";
import { Bar, Line } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const Martina = ({chartDataMartina, sortedByProject, StudentProfile}) => {

  const MartinaData = sortedByProject.filter((person) => person.name === `Martina`)

  const getChartMartina = () => {
    chartDataMartina.labels = MartinaData.map((data) => data.project)
    chartDataMartina.datasets[0].data = MartinaData.map((data) => data.fun)
    chartDataMartina.datasets[1].data = MartinaData.map((data) => data.difficulty)
  }
  getChartMartina()


  return (
    <div>
      <h4>Student</h4>
      <Profile StudentProfile={StudentProfile[4]}></Profile>
      <h5>The charts are sorted as last chosen by all students table; sort by default by refreshing page</h5>
      <h4>Bar Chart</h4>
      <h6>
        Click on the label fun rating/ difficulty rating to exclude/ include the
        data
      </h6>
      <Bar data={chartDataMartina} />
      <h4>Line Chart</h4>
      <h6>Click on the label fun rating/ difficulty rating to exclude/ include the data</h6>
      <Bar data={chartDataMartina}/>
      <h6>Click on the label fun rating/ difficulty rating to exclude/ include the data</h6>
      <Line data={chartDataMartina}/>
    </div>
  );
};

export default Martina

