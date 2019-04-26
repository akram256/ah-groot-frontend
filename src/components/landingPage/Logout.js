import React from 'react';

const Logout = (props) => {
    const {logout} = props;
      // complete function ....
        /* istanbul ignore next */
  return (
    <div>
      <a href="#" onClick={() => logout()} className="log-out">Log out</a>
    </div>
  )
}

export default  Logout
