import React, { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';

const Hello = () => {

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    try {
      setError(null);
      setLoading(true);

      Auth.currentAuthenticatedUser({
        bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
      }).then(user => {
        setUsername(user.username);
        setEmail(user.attributes.email);

        console.log(`Load additional settings for user: ${user.username}`);
        console.log(`Load additional settings for user: ${user.email}`);

        // TBD
      }).catch(err => setError(err));
    }
    catch (e) {
      setError(e);
    }
    finally {
      setLoading(false);
    }
  }, []);

  return (
    <div>
      {error ? `Oops... ${error}` : null}
      {loading ? "Loading..." : `Hello ${username}, ${email}`}
    </div>
  )

};

export default Hello;