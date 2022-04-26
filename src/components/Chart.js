import { Bar, Line } from "react-chartjs-2";
import React, { useState } from "react";

const Chart = ({chartData, chartAllStudents, UserData}) => {

  const [state, setState] = useState(
    {
      sortName: [],
      sortNameB: [],
      sortProj: [],
      sortProjB: [],
      sortDif: [],
      sortDifB: [],
      sortFun: [],
      sortFunB: [],
      sortFunAvg: [],
      sortFunBAvg: [],
    },
    []
  );
  const sortedByName = () => {
    const sortName = [...UserData.sort((a, b) => a.name.localeCompare(b.name))];
    setState(sortName);
  };
  const sortedByNameB = () => {
    const sortNameB = [
      ...UserData.sort((a, b) => b.name.localeCompare(a.name)),
    ];
    setState(sortNameB);
  };
  const sortedByProj = () => {
    const sortProject = [
      ...UserData.sort((a, b) => a.project.localeCompare(b.project)),
    ];
    setState(sortProject);
  };
  const sortedByProjB = () => {
    const sortProjectB = [
      ...UserData.sort((a, b) => b.project.localeCompare(a.project)),
    ];
    setState(sortProjectB);
  };
  const sortedByProjAvg = () => {
    const sortProjectAvg = [
      ...chartAllStudents.sort((a, b) => a.project.localeCompare(b.project)),
    ];
    setState(sortProjectAvg);
  };
  const sortedByProjBAvg = () => {
    const sortProjectBAvg = [
      ...chartAllStudents.sort((a, b) => b.project.localeCompare(a.project)),
    ];
    setState(sortProjectBAvg);
  };
  const sortedByDif = () => {
    const sortDif = [
      ...UserData.sort((a, b) => a.difficulty.localeCompare(b.difficulty)),
    ];
    setState(sortDif);
  };
  const sortedByDifB = () => {
    const sortDifB = [
      ...UserData.sort((a, b) => b.difficulty.localeCompare(a.difficulty)),
    ];
    setState(sortDifB);
  };
  const sortedByDifAvg = () => {
    const sortDifAvg = [
      ...chartAllStudents.sort((a, b) => a.avgDif- b.avgDif),
    ];
    setState(sortDifAvg);
    };
  const sortedByDifBAvg = () => {
    const sortDifBAvg = [
      ...chartAllStudents.sort((a, b) => b.avgDif - a.avgDif),
    ];
    setState(sortDifBAvg);
  };
  const sortedByFun = () => {
    const sortFun = [...UserData.sort((a, b) => a.fun.localeCompare(b.fun))];
    setState(sortFun);
  };
  const sortedByFunB = () => {
    const sortFun = [...UserData.sort((a, b) => b.fun.localeCompare(a.fun))];
    setState(sortFun);
  };
  const sortedByFunAvg = () => {
    const sortFunAvg = [...chartAllStudents.sort((a, b) => a.avgFun - b.avgFun)];
    setState(sortFunAvg);
  };
  const sortedByFunBAvg = (datasetFun) => {
    const sortFunBAvg = [...chartAllStudents.sort((a, b) => b.avgFun - a.avgFun)];
    setState(sortFunBAvg);
  };

  const getChartAll = () => {
    chartData.labels = chartAllStudents.map((data) => data.project);
    chartData.datasets[0].data = chartAllStudents.map((data) => data.avgFun);
    chartData.datasets[1].data = chartAllStudents.map((data) => data.avgDif);
  };
  getChartAll();

  return (
    <div className="chart">
      <h4>Bar chart from all students</h4>
      <h6>
        Click on the label fun rating/ difficulty rating to exclude/ include the
        data
      </h6>
      <Bar data={chartData}/>
      <h4>Line chart from all students</h4>
      <h6>
        Click on the label fun rating/ difficulty rating to exclude/ include the
        data
      </h6>
      <Line data={chartData}
      />
    <h4>Table from all students - All data</h4>

    <div className="buttongroup">
    </div>
    <div className="buttongroup">
        <button
          onClick={sortedByName}
          type="button"
          className="btn btn-outline-secondary"
        >
          Sort by name a-z
        </button>
        <button
          onClick={sortedByProj}
          type="button"
          className="btn btn-outline-success"
        >
          Sort by project a-z
        </button>
        <button
          onClick={sortedByDif}
          type="button"
          className="btn btn-outline-warning"
        >
          Sort by difficulty 1-5{" "}
        </button>
        <button
          onClick={sortedByFun}
          type="button"
          className="btn btn-outline-info"
        >
          Sort by fun 1-5
        </button>
      </div>
      <div className="buttongroup">
        <button
          onClick={sortedByNameB}
          type="button"
          className="btn btn-outline-secondary"
        >
          Sort by name z-a
        </button>
        <button
          onClick={sortedByProjB}
          type="button"
          className="btn btn-outline-success"
        >
          Sort by project z-a
        </button>
        <button
          onClick={sortedByDifB}
          type="button"
          className="btn btn-outline-warning"
        >
          Sort by difficulty 5-1
        </button>

        <button
          onClick={sortedByFunB}
          type="button"
          className="btn btn-outline-info"
        >
          Sort by fun 5-1
        </button>
      </div>
      <div className="tablegroup">
      <table className="table table-striped table-hover">
        <thead> 
          <tr>
            <th>All data:</th>
            <th onClick={sortedByName}>Name</th>
            <th onClick={sortedByProj}>Project</th>
            <th onClick={sortedByDif}>Difficulty</th>
            <th onClick={sortedByFun}>Fun</th>
          </tr>
        </thead>
        <tbody className="table">
          {UserData.map((data, index) => {
            return (
              <tr key={index}>
                <td>{data.name}</td>
                <td>{data.project}</td>
                <td>{data.difficulty}</td>
                <td>{data.fun}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </div>
      <h4></h4>
    </div>
  );
};

export default Chart 
