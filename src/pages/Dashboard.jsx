import React, { useCallback, useState, useEffect } from "react";
import { get } from "../httprequest/httprequest";

import UserForm from "../components/UserForm/UserForm";
import PetsForm from "../components/PetsForm/PetsForm";

const Dashboard = (props) => {
  const [gettingData, setGettingData] = useState(true);
  const [userList, setUserList] = useState([]);

  const url = process.env.REACT_APP_API_BASE_URL;

  const cbResponseUser = useCallback((response) => {
    setUserList(response);
    setGettingData(false);
  }, []);

  const getData = useCallback(() => {
    get(`${url}/users`, cbResponseUser);
  }, [url, cbResponseUser]);

  useEffect(() => {
    gettingData && getData();
  }, [gettingData, url, getData]);

  return (
    <div>
      <h2 className="mt-3">pagina de control</h2>
      <div className="w-full px-10 flex flex-col md:flex-row justify-around">
        <UserForm userList={userList} getData={getData} />
        <PetsForm getData={() => {}} userList={userList} />
      </div>
    </div>
  );
};

export default Dashboard;
