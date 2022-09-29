import './App.css';
import List from './pages/list/List';
import UserData from './pages/userData/UserData';
import { Routes, Route, BrowserRouter} from "react-router-dom";
import {useEffect, useState} from "react";

function App() {
  const [users, setUsers] = useState();
  const [allInfo , setAllInfo] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10);
  const [loading, setLoading] = useState(false)


  useEffect(()=> {
      setLoading(true)   
      async function fetchMovies() {
          const response = await fetch(`https://randomuser.me/api/?results=10&page=${currentPage}`);
          const res = await response.json();
          const newVal = await (res.results).map((user, i)=>{
            return(
              {
                ...user,
                userID: i
              }
            )
          });
          setUsers(newVal);
          setLoading(false)
      }
      fetchMovies()
  }, [currentPage])
  

  function allInfoUser(user){
    setAllInfo(user);
    setLoading(false);
  }

  function paginate (pageNumber) {
    setLoading(true)   
    setCurrentPage(pageNumber)
  }    

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<List users={users} allInfoUser={allInfoUser} currentPage={currentPage} usersPerPage={usersPerPage} paginate={paginate} loading={loading} />}/>
      <Route path="/user/:id" element={<UserData allInfo={allInfo} users={users} allInfoUser={allInfoUser} />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
  