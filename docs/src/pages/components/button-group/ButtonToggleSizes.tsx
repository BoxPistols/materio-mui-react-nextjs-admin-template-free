// React Imports
import React, { useState } from "react";
import type { MouseEvent } from "react";

// MUI Imports
import Box from "@mui/material/Box";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

// Icon Imports
import Icon from "../../../components/iconify-icon";

const ButtonToggleSizes = () => {
  // States
  const [alignment, setAlignment] = useState<string | null>("left");

  const handleAlignment = (
    event: MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <Box sx={{ display: "flex", gap: 4, flexDirection: "column", alignItems: 'flex-start' }}>
      <ToggleButtonGroup
        exclusive
        size="small"
        value={alignment}
        onChange={handleAlignment}
        aria-label="text alignment"
      >
        <ToggleButton value="left" aria-label="left aligned">
          <Icon icon="mdi:format-align-left" />
        </ToggleButton>
        <ToggleButton value="center" aria-label="center aligned">
          <Icon icon="mdi:format-align-center" />
        </ToggleButton>
        <ToggleButton value="right" aria-label="right aligned">
          <Icon icon="mdi:format-align-right" />
        </ToggleButton>
        <ToggleButton value="justify" aria-label="justified" disabled>
          <Icon icon="mdi:format-align-justify" />
        </ToggleButton>
      </ToggleButtonGroup>
      <ToggleButtonGroup
        exclusive
        value={alignment}
        onChange={handleAlignment}
        aria-label="text alignment"
      >
        <ToggleButton value="left" aria-label="left aligned">
          <Icon icon="mdi:format-align-left" />
        </ToggleButton>
        <ToggleButton value="center" aria-label="center aligned">
          <Icon icon="mdi:format-align-center" />
        </ToggleButton>
        <ToggleButton value="right" aria-label="right aligned">
          <Icon icon="mdi:format-align-right" />
        </ToggleButton>
        <ToggleButton value="justify" aria-label="justified" disabled>
          <Icon icon="mdi:format-align-justify" />
        </ToggleButton>
      </ToggleButtonGroup>
      <ToggleButtonGroup
        exclusive
        size="large"
        value={alignment}
        onChange={handleAlignment}
        aria-label="text alignment"
      >
        <ToggleButton value="left" aria-label="left aligned">
          <Icon icon="mdi:format-align-left" />
        </ToggleButton>
        <ToggleButton value="center" aria-label="center aligned">
          <Icon icon="mdi:format-align-center" />
        </ToggleButton>
        <ToggleButton value="right" aria-label="right aligned">
          <Icon icon="mdi:format-align-right" />
        </ToggleButton>
        <ToggleButton value="justify" aria-label="justified" disabled>
          <Icon icon="mdi:format-align-justify" />
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};

export default ButtonToggleSizes;
