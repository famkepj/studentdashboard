import React from "react";
import Profile from "../Profile";
import { Bar, Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const Maurits = ({ chartDataMaurits, sortedByProject, StudentProfile }) => {
  const MauritsData = sortedByProject.filter(
    (person) => person.name === `Maurits`
  );

  const getChartMaurits = () => {
    chartDataMaurits.labels = MauritsData.map((data) => data.project)
    chartDataMaurits.datasets[0].data = MauritsData.map((data) => data.fun);
    chartDataMaurits.datasets[1].data = MauritsData.map(
      (data) => data.difficulty
    );
  };
  getChartMaurits();

  return (
    <div>
      <h4>Student</h4>
      <Profile StudentProfile={StudentProfile[5]}></Profile>
      <h4>Bar Chart</h4>
      <h6>
        Click on the label fun rating/ difficulty rating to exclude/ include the
        data
      </h6>
      <Bar data={chartDataMaurits} />
      <h4>Line Chart</h4>
      <h6>
        Click on the label fun rating/ difficulty rating to exclude/ include the
        data
      </h6>
      <Line data={chartDataMaurits} />
    </div>
  );
};

export default Maurits;
