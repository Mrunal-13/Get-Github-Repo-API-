import logo from "../logo.svg";
import React, { useEffect } from "react";
import axios from "axios";
import { useState , useMemo } from "react";
import "./App.js";
import "./App.css";
import { Table, Row, Col, Pagination } from 'antd';
import 'antd/dist/antd.css';
import Cards from "./Cards"
import Forms from "./Form";

function App() {
  const [avatarUrl , setAvatarUrl] = useState();
  const [username , setGithubUsername] = useState();
  const [state, setstate] = useState([])
  const [user,setUser]=useState();
  const columns = [
      {
        title: "Repository",
        dataIndex: "name" ,// accessor is the "key" in the data
        key:"name"
      },
      {
        title: "Star",
        dataIndex: "stargazers_count",
        key:"name"
      },
    ]
    
    const onFinish = (e) => {
      console.log('Success:', e);
      setUser(e.username)
      console.log(user)
      function Cardrender(){
        axios
        .get("https://api.github.com/users/"+user+"")
        .then((result)=>{
            console.log(result.data);
            setAvatarUrl(result.data.avatar_url);
            setGithubUsername(result.data.login);
    
        });
      }
      Cardrender()
    };
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };
  async function repoData(){
    
        await axios 
        .get("https://api.github.com/users/"+user+"/repos")
        .then((result)=> {
          console.log(result.data);
          setstate(result.data);
        });
    
  }
  const data = state.map(row => ({ name: row.name, stargazers_count: row.stargazers_count }));
  
  // useEffect(()=>{
  //   fetch("https://api.github.com/users/"+user+"")
  //   .then((res) => res.json())
  //   .then(
  //     (result) => {
  //       console.log(result.data);
  //       setAvatarUrl(result.data.avatar_url);
  //       setGithubUsername(result.data.login)
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // },[]);
  return (
    <div className="App">
      <Forms onFinish={onFinish}  onFinishFailed={onFinishFailed}/>
      <div className="top">
      <Cards avatarUrl={avatarUrl} username={username} repoData={repoData}/>

      </div>
      
      
      <Table rowKey="name" columns={columns} dataSource={data} bordered={true}/>
      

    </div>
      
  );
}

export default App;
