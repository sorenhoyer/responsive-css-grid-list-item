/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import {
  itemStyles,
  typeStyles,
  titleStyles,
  deviceStyles,
  inlineIconStyles,
  addressStyles,
  datetimeStyles,
  troubleshootButtonStyles
} from "./styles";

const AlertListItem: React.FC<{}> = () => {
  return (
    <div css={itemStyles}>
      <div css={typeStyles}>
        <img src="https://via.placeholder.com/32" alt="type-icon" />
      </div>
      <h2 css={titleStyles}>Some bearing fault</h2>
      <div css={deviceStyles}>
        <img
          css={inlineIconStyles}
          src="https://via.placeholder.com/16"
          alt="device-icon"
        />
        Plastic feeder 1
      </div>
      <div css={addressStyles}>
        <img
          css={inlineIconStyles}
          src="https://via.placeholder.com/16"
          alt="address-icon"
        />
        somewhere, Randers
      </div>
      <div css={datetimeStyles}>
        <img
          css={inlineIconStyles}
          src="https://via.placeholder.com/16"
          alt="datetime-icon"
        />
        23m ago
      </div>
      <div css={troubleshootButtonStyles}>
        <button type="button">Troubleshoot</button>
      </div>
    </div>
  );
};

export default AlertListItem;
