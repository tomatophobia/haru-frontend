import React, { useState, useCallback, useEffect } from "react";
import Forest from "./components/Forest";
import {
  updateTrees,
  findAndAppend,
  findAndCheck,
  findAndRemove,
  findAndChangeWithText,
} from "./utils/findAndUpdate";
import axios from "axios";
import { AddCircle } from "@material-ui/icons";

const App = () => {
  const [trees, setTrees] = useState([]);

  const onAppend = useCallback(
    async (id) => {
      try {
        setTrees(updateTrees(id, trees, findAndAppend));
        const response = await axios.post("/trees", trees);
      } catch (e) {
        console.log(e);
      }
    },
    [trees]
  );

  const onToggle = useCallback(
    (id) => {
      setTrees(updateTrees(id, trees, findAndCheck));
    },
    [trees]
  );

  const onRemove = useCallback(
    (id) => {
      setTrees(updateTrees(id, trees, findAndRemove));
    },
    [trees]
  );

  const onChange = useCallback(
    (id, newText) => {
      const findAndChange = findAndChangeWithText(newText);
      setTrees(updateTrees(id, trees, findAndChange));
    },
    [trees]
  );

  useEffect(() => {
    const initialize = async () => {
      try {
        const response = await axios.get("/trees");
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
        onChange={onChange}
      />
      <div className="add" onClick={() => onAppend([-1])}>
        <AddCircle />
      </div>
    </div>
  );
};

export default App;
