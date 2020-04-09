import React from "react";
import "./App.css";
import { withAuthenticator, AmplifyTheme } from "aws-amplify-react";

class App extends React.Component {
  state = {};

  render() {
    return <div>App</div>;
  }
 }

  const theme = {
   ...AmplifyTheme,
   navBar: {
    ...AmplifyTheme.navBar,
    backgroundColor: "var(--squidInk)",
    color: "white"
  },
  ...AmplifyTheme,
  button: {
    ...AmplifyTheme.button,
    backgroundColor: "var(--squidInk)",
    color: "white"
  },
  sectionBody: {
    ...AmplifyTheme.sectionBody,
    padding: "5px",
    BackgroundColor: "var(--squidInk)"
  },
  sectionHeader: {
    ...AmplifyTheme.sectionHeader,
    backgroundColor: "var(--squidInk)"
  }










  }


  

export default withAuthenticator(App, true, [], null, theme);
