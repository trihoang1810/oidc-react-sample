import React from "react";
import { signoutRedirect } from "../services/userService";
import { useSelector } from "react-redux";

function Home() {
  const user = useSelector((state) => state.auth.user);
  function signOut() {
    signoutRedirect();
  }

  return (
    <div>
      <h1>Home</h1>
      <p>Hello, {user.profile.given_name}.</p>
      <p>
        I have given you a token to call your favourite doughnut based API 🍩
      </p>

      <p>
        💡 <strong>Tip: </strong>
        <em>
          Use the Redux dev tools and network tab to inspect what user data was
          returned from identity and stored in the client.
        </em>
      </p>
      <button className="button button-clear" onClick={() => signOut()}>
        Sign Out
      </button>
      {/* 
      <pre>
        <code>
          {prettifyJson(doughnutData ? doughnutData : "No doughnuts yet :(")}
        </code>
      </pre> */}
      <p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/tappyy/react-IS4-auth-demo"
        >
          Github Repo
        </a>
      </p>
    </div>
  );
}

export default Home;
