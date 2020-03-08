import React, { useState, useCallback, useEffect } from "react";
import Forest from "./components/Forest";
import findAndChange from "./utils/findAndChange";
import findAndAppend from "./utils/findAndAppend";
import findAndRemove from "./utils/findAndRemove";
import axios from "axios";

const App = () => {

  const [trees, setTrees] = useState([]);

  const onAppend = useCallback(
    id => {
      setTrees(trees.map(root => findAndAppend(id, root)));
    },
    [trees]
  );

  const onToggle = useCallback(
    id => {
      setTrees(trees.map(root => findAndChange(id, root)));
    },
    [trees]
  );

  const onRemove = useCallback(
    id => {
      setTrees(trees.map(root => findAndRemove(id, root)));
    },
    [trees]
  );

  useEffect(() => {
    const initialize = async () => {
      try {
        const response = await axios.get('/tree')
        if (response) setTrees(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    initialize();
  }, []);

  return (
    <div>
      <Forest
        trees={trees}
        onToggle={onToggle}
        onAppend={onAppend}
        onRemove={onRemove}
      />
    </div>
  );
};

export default App;
