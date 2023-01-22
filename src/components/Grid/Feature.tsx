import React from "react";
import styled from "styled-components";

import { GridItem } from "./GridItem";

export const Feature = ({
  header,
  description,
  icon,
}: {
  header: React.ReactNode;
  description: React.ReactNode;
  icon?: React.ReactElement;
}) => {
  return (
    <GridItem>
      <h4
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        {icon &&
          React.cloneElement(icon, {
            style: { marginRight: "1rem" },
          })}
        {header}
      </h4>
      <p style={{ marginTop: "8px", color: "#aaa" }}>{description}</p>
    </GridItem>
  );
};

export default Feature;
