import React from "react";
import Request from "react-http-request";
import "./Profile.css";

class Profile extends React.Component {
  render() {
    return (
      <Request
        url="http://localhost:8080/conducteur"
        method="get"
        accept="application/json"
        verbose={true}
      >
        {({ error, result, loading }) => {
          if (error) {
            result = {
              body: {
                name: 'nigel',
                mail: 'kozlown@gmail.com',
                tel: '0613609461'
              }
            }
          }
          if (loading) {
            return <div>loading...</div>;
          } else {
            return (
              <div className="Profile">
                <h1>Profile</h1>
                <p className='name'>Name: {result.body.name}</p>
                <p className='mail'>Mail: {result.body.mail}</p>
                <p className='tel'>Téléphone: {result.body.tel}</p>
              </div>
            );
          }
        }}
      </Request>
    );
  }
}

export default Profile;
