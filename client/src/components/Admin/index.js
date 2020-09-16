import React, { useEffect, useState } from "react";

function Admin(props) {
  const [data, setData] = useState({ results: [], fetched: false });

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("http://localhost:8080/admin").then((res) =>
        res.json()
      );
      setData({
        results: data.results,
        fetched: true,
      });
    };

    if (!data.fetched) {
      fetchData();
    }
  });
  return (
    <>
      {data.results.map((msgObj) => {
        return (
          <p key={msgObj.message_id}>
            FROM:{msgObj.message_first_name} {msgObj.message_last_name} <br />
            AT:{msgObj.message_created_at} <br />
            MSG: {msgObj.message_text}
          </p>
        );
      })}
    </>
  );
}

export default Admin;
