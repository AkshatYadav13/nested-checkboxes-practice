import { useState } from "react";
import "./styles.css";
import { DATA } from "./index.js";

function isChecked(data) {
  return data?.every((child) => child.checked);
}

export const Checkboxes = ({ data, onchange, Checked }) => {
  return (
    <div>
      {data.map((checkbox) => {
        return (
          <div key={checkbox.id} className="checkbox-wrap">
            <input
              type="checkbox"
              checked={checkbox.checked || Checked}
              onChange={() => onchange(checkbox.id)}
            />
            <label htmlFor="">{checkbox.label}</label>
            {checkbox.children && checkbox.children.length && (
              <div className="children-wrap">
                <Checkboxes
                  data={checkbox.children}
                  onchange={onchange}
                  Checked={isChecked(checkbox.children)}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default function App() {
  const [checkboxes, setChecboxes] = useState(DATA);

  function updateChildren(children, checked) {
    return (
      children?.map((child) => ({
        ...child,
        checked,
        children: updateChildren(child?.children, checked),
      })) || []
    );
  }

  function checkBoxChangeHandler(id) {
    function updateTree(nodes, targetId) {
      return nodes.map((node) => {
        if (node.id === targetId) {
          return {
            ...node,
            checked: !node.checked,
            children: updateChildren(node?.children, !node.checked),
          };
        }

        if (node.children && node.children.length > 0) {
          const updatedChildren = updateTree(node.children, targetId);
          console.log(updatedChildren);
          return {
            ...node,
            children: updatedChildren,
            checked: isChecked(updatedChildren),
          };
        }

        return node;
      });
    }

    const updatedData = updateTree(checkboxes, id);
    setChecboxes(updatedData);
  }

  return (
    <div className="App">
      <h1>Nested Checkboxes</h1>
      <Checkboxes
        data={checkboxes}
        onchange={checkBoxChangeHandler}
        Checked={isChecked(checkboxes.children)}
      />
    </div>
  );
}
