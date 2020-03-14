import React, { useState, useCallback, useEffect } from "react";
import Forest from "./components/Forest";
import {
  updateTrees,
  findAndAppend,
  findAndCheck,
  findAndRemove
} from "./utils/findAndUpdate";
import axios from "axios";
import { AddCircle } from "@material-ui/icons";

const App = () => {
  const [trees, setTrees] = useState([]);

  const onAppend = useCallback(
    id => {
      setTrees(updateTrees(id, trees, findAndAppend));
    },
    [trees]
  );

  const onToggle = useCallback(
    id => {
      setTrees(updateTrees(id, trees, findAndCheck));
    },
    [trees]
  );

  const onRemove = useCallback(
    id => {
      setTrees(updateTrees(id, trees, findAndRemove));
    },
    [trees]
  );

  useEffect(() => {
    const initialize = async () => {
      try {
        const response = await axios.get("/tree");
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
      <div className="add" onClick={() => onAppend([-1])}>
        <AddCircle />
      </div>
    </div>
  );
};

export default App;
