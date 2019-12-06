/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const itemStyles = css`
  display: grid;
  grid-template-areas: "type title datetime" "type device ." "type address .";
  grid-template-columns: max-content auto max-content;
  grid-column-gap: 1rem;
  background: red;
  padding: 1rem;
  justify-items: left;

  @media (min-width: 920px) {
    grid-template-areas: "type title device address datetime troubleshoot";
    grid-template-columns: max-content max-content max-content auto max-content max-content;
    align-items: center;
  }
`;

const typeStyles = css`
  grid-area: type;
  align-self: center;
`;

const datetimeStyles = css`
  grid-area: datetime;
`;

const titleStyles = css`
  grid-area: title;
  margin-top: 0rem;

  @media (min-width: 920px) {
    margin-block-end: auto;
  }
`;

const deviceStyles = css`
  grid-area: device;
`;

const inlineIconStyles = css`
  margin-right: 0.5rem;
`;

const addressStyles = css`
  grid-area: address;
`;

const troubleshootButtonStyles = css`
  display: none;

  @media (min-width: 920px) {
    display: unset;
  }
`;

export {
  itemStyles,
  typeStyles,
  datetimeStyles,
  titleStyles,
  deviceStyles,
  inlineIconStyles,
  addressStyles,
  troubleshootButtonStyles
};
