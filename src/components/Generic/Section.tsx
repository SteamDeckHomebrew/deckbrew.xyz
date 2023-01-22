import React from "react";
import styled from "styled-components";

export const Section = ({
  dark,
  accent,
  children,
}: {
  dark?: boolean;
  accent?: boolean;
  children: React.ReactNode;
}) => {
  return (
    <SectionWrapper dark={dark} accent={accent}>
      <SectionContainer>{children}</SectionContainer>
    </SectionWrapper>
  );
};

const SectionContainer = styled.div`
  padding: 4rem;
  max-width: var(--page-width);
  margin: auto;
`;

const SectionWrapper = styled.div<{ dark?: boolean; accent?: boolean }>`
  /* Accent overrides dark!! */
  background-color: ${(props) =>
    props.accent
      ? "var(--accent)"
      : props.dark
      ? "var(--dark)"
      : "var(--light)"};
  color: ${(props) =>
    props.accent
      ? "var(--light)"
      : props.dark
      ? "var(--light)"
      : "var(--dark)"};
`;

export default Section;
