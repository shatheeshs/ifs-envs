import React, { useState } from 'react';
import { ToolTipRight} from "./styles";
import { Tooltip } from "react-tooltip";

export interface ITooltipProps {
    message: string;
  }

export function TabTooltip({ message }: ITooltipProps) {
    return (
      <div>
        <ToolTipRight data-tooltip-id="my-tooltip" data-tooltip-content={"Hello world!"}>
            {message}
        </ToolTipRight>
        <Tooltip id="my-tooltip" />
      </div>
    );
  }
