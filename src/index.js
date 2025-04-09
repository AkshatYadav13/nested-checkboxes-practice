import { Children, StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

export const DATA = [
  {
    id: 0,
    label: "root",
    checked: false,
    children: [
      {
        id: 1,
        label: "node 1",
        checked: false,
        children: [
          {
            id: 2,
            label: "node 2",
            checked: false,
            children: [
              {
                id: 20,
                label: "node 20",
                checked: false,
                children: [],
              },
            ],
          },
          {
            id: 3,
            label: "node 3",
            checked: true,
            children: [],
          },
        ],
      },
      {
        id: 4,
        label: "node 4",
        checked: true,
        children: [
          {
            id: 5,
            label: "node 5",
            checked: true,
            children: [],
          },
        ],
      },
      {
        id: 6,
        label: "node 6",
        checked: false,
        children: [
          {
            id: 7,
            label: "node 7",
            checked: true,
            children: [
              {
                id: 8,
                label: "node 8",
                checked: true,
                children: [],
              },
              {
                id: 9,
                label: "node 9",
                checked: true,
                children: [],
              },
            ],
          },
          {
            id: 10,
            label: "node 10",
            checked: false,
            children: [],
          },
        ],
      },
      {
        id: 11,
        label: "node 11",
        checked: false,
        children: [],
      },
    ],
  },
];
