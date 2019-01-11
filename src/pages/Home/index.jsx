import React from "react";

import Animation from "./Animation";

const Home = ({ animation = true }) => {
  if (animation) return <Animation text="Hello." />;
  return <p>hello</p>;
};

export default Home;
