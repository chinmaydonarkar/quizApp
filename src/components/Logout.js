import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId =
'286448768408-gt4mvhfu21v5sbe62tk6tv2p0or5imp9.apps.googleusercontent.com';

function Logout() {
  const onSuccess = () => {
    console.log('Logout made successfully');
    alert('Logout made successfully ✌');
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;