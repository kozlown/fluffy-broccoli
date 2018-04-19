import React from "react";
import Request from "react-http-request";

const User = props => {
  return (
    <Request
      url="http://localhost:8080/JsonSrv"
      method="get"
      accept="application/json"
      verbose={true}
    >
      {({ error, result, loading }) => {
        if (loading) {
          return <div>loading...</div>;
        } else {
          return <div>{JSON.stringify(result)}</div>;
        }
      }}
    </Request>
  );
};
export default User;
