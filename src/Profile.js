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
          if (loading) {
            return <div>loading...</div>;
          } else {
            return (
              <div className="Profile">
                <h1>Profile</h1>
                {result.body.name ? (
                  <div className="Profile__name">nom : {result.body.name}</div>
                ) : (
                  <div className="Profile__name">
                    nous n'avons pas trouvé votre utilisateur
                  </div>
                )}
                {result.body.email ? (
                  <div className="Profile__mail">
                    vous pouvez contacter cet utilisateur par mail :
                    {result.body.email}
                  </div>
                ) : null}
                {result.body.tel ? (
                  <div className="Profile__tel">
                    ainsi que par tel:
                    {result.body.tel}
                  </div>
                ) : null}
              </div>
            );
          }
        }}
      </Request>
    );
  }
}

export default Profile;
