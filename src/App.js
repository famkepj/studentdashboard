import "./App.css"
import React, { useState, useEffect } from "react"
import { csv } from "d3"
import studentsdata from "./studentsdata.csv"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Chart from "./components/Chart"
import StudentProfile from "./profile.json"

import Aranka from "./components/students/Aranka"
import Evelyn from "./components/students/Evelyn"
import Floris from "./components/students/Floris"
import Hector from "./components/students/Hector"
import Martina from "./components/students/Martina"
import Maurits from "./components/students/Maurits"
import Rahima from "./components/students/Rahima"
import Sandra from "./components/students/Sandra"
import Wietske from "./components/students/Wietske"
import Storm from "./components/students/Storm"

const App= ()=> {
  const [UserData, setUserData] = useState([])
  useEffect(() =>{
    csv(studentsdata).then(data =>{
    setUserData(data)
    })
  }, [])
 
  function compare(a, b){
    if (a.project > b.project) return 1;
    if (a.project < b.project) return -1;
    return 0;
  }
  const sortedByProject = UserData.sort(compare);

  const studentNames = [...new Map (sortedByProject.map((item) =>[item["name"], item.name])).values(),]
  const projectNames = [...new Map (sortedByProject.map((item) =>[item["project"], item.project])).values(),]   

  const getAverage = () =>{
    const avgArray = []
    projectNames.map(projectItem => {
      const filteredByProject = sortedByProject.filter(({ project }) => project === projectItem)
      const avgDiff = filteredByProject.reduce((r, c) => r + c.difficulty*1, 0) / filteredByProject.length;
      const avgFun = filteredByProject.reduce((r, c) => r + c.fun*1, 0) / filteredByProject.length;
      avgArray.push({
        avgFun: avgFun,
        avgDif: avgDiff,
        project: projectItem
      })
    })
  return avgArray
  }
  const chartAllStudents = getAverage()

  const chartDataAll = ({
    labels: [],
    datasets: [{
      label: "Fun rating",
      backgroundColor: '#0bcbf2',
      borderColor: "#07829b",
      borderWidht: 2,
      data: [],
    },
    {
      label:"Difficulty rating",
      backgroundColor:'#f7bd03',
      borderColor:"#c59a0d",
      borderWidth:2,
      data: []
    }
  ]
  })

  return (
    <div className="App">
      <h1 className="App-header">Student dashboard</h1>
      <Router>
        <div className="nav nav-tabs">
          <Link className="nav-link active" to="/">All students</Link>
          <Link className="nav-link active" to="students/Evelyn">Evelyn</Link>
          <Link className="nav-link active" to="students/Aranka">Aranka</Link>
          <Link className="nav-link active" to="students/Floris">Floris</Link>
          <Link className="nav-link active" to="students/Hector">Hector</Link>
          <Link className="nav-link active" to="students/Martina">Martina</Link>
          <Link className="nav-link active" to="students/Maurits">Maurits</Link>
          <Link className="nav-link active" to="students/Rahima">Rahima</Link>
          <Link className="nav-link active" to="students/Sandra">Sandra</Link>
          <Link className="nav-link active" to="students/Wietske">Wietske</Link>
          <Link className="nav-link active" to="students/Storm">Storm</Link>
        </div>
        <Routes>
          <Route path="/" element={<Chart chartData={chartDataAll} chartAllStudents={chartAllStudents} UserData={UserData}/>}></Route>
          <Route path="students/Evelyn" element={<Evelyn chartDataEvelyn={chartDataAll} sortedByProject={sortedByProject} StudentProfile={StudentProfile}/>}></Route>
          <Route path="students/Aranka" element={<Aranka chartDataAranka={chartDataAll} sortedByProject={sortedByProject} StudentProfile={StudentProfile}/>}></Route>
          <Route path="students/Floris" element={<Floris chartDataFloris={chartDataAll} sortedByProject={sortedByProject} StudentProfile={StudentProfile}/>}></Route>
          <Route path="students/Hector" element={<Hector chartDataHector={chartDataAll} sortedByProject={sortedByProject} StudentProfile={StudentProfile}/>}></Route>
          <Route path="students/Martina" element={<Martina chartDataMartina={chartDataAll} sortedByProject={sortedByProject} StudentProfile={StudentProfile}/>}></Route>
          <Route path="students/Maurits" element={<Maurits chartDataMaurits={chartDataAll} sortedByProject={sortedByProject} StudentProfile={StudentProfile}/>}></Route>
          <Route path="students/Rahima" element={<Rahima chartDataRahima={chartDataAll} sortedByProject={sortedByProject} StudentProfile={StudentProfile}/>}></Route>
          <Route path="students/Sandra" element={<Sandra chartDataSandra={chartDataAll} sortedByProject={sortedByProject} StudentProfile={StudentProfile}/>}></Route>
          <Route path="students/Wietske" element={<Wietske chartDataWietske={chartDataAll} sortedByProject={sortedByProject} StudentProfile={StudentProfile}/>}></Route>
          <Route path="students/Storm" element={<Storm chartDataStorm={chartDataAll} sortedByProject={sortedByProject} StudentProfile={StudentProfile}/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;


