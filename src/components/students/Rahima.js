import React from "react";
import Profile from "../Profile";
import { Bar, Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const Rahima = ({ chartDataRahima, sortedByProject, StudentProfile }) => {
  const RahimaData = sortedByProject.filter(
    (person) => person.name === `Rahima`
  );

  const getChartRahima = () => {
    chartDataRahima.labels = RahimaData.map((data) => data.project)
    chartDataRahima.datasets[0].data = RahimaData.map((data) => data.fun);
    chartDataRahima.datasets[1].data = RahimaData.map(
      (data) => data.difficulty
    );
  };
  getChartRahima();

  return (
    <div>
      <h4>Student</h4>
      <Profile StudentProfile={StudentProfile[6]}></Profile>
      <h4>Bar Chart</h4>
      <h6>
        Click on the label fun rating/ difficulty rating to exclude/ include the
        data
      </h6>
      <Bar data={chartDataRahima} />
      <h4>Line Chart</h4>
      <h6>
        Click on the label fun rating/ difficulty rating to exclude/ include the
        data
      </h6>
      <Line data={chartDataRahima} />
    </div>
  );
};

export default Rahima;
