"use client";
import React, { useState, useCallback, useRef } from "react";
// @ts-ignore
import ReactDatamaps from "react-india-states-map";

interface Tooltip {
  visible: boolean;
  x: number;
  y: number;
  name: string;
}

interface ActiveState {
  name: string;
  data?: any;
}

const IndiaMap: React.FC = () => {
  const [activeState, setActiveState] = useState<ActiveState>({ name: "India" });

  const [tooltip, setTooltip] = useState<Tooltip>({
    visible: false,
    x: 0,
    y: 0,
    name: "",
  });

  const debounceTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Debounced update for tooltip
  const updateTooltip = useCallback(
    (e: React.MouseEvent<SVGElement>, name: string) => {
      if (debounceTimeout.current) clearTimeout(debounceTimeout.current);

      debounceTimeout.current = setTimeout(() => {
        const mapContainer = (e.currentTarget as unknown as HTMLElement).getBoundingClientRect();
        setTooltip({
          visible: true,
          x: e.clientX - mapContainer.left + 20, // Offset tooltip horizontally
          y: e.clientY - mapContainer.top - 40, // Offset tooltip vertically
          name,
        });
      }, 50); // Adjust debounce delay as needed (e.g., 50ms)
    },
    []
  );

  // Handle hover to display tooltip
  const handleMouseMove = (e: React.MouseEvent<SVGElement>, name: string) => {
    updateTooltip(e, name);
  };

  // Hide tooltip on mouse leave
  const handleMouseLeave = () => {
    if (debounceTimeout.current) clearTimeout(debounceTimeout.current);
    setTooltip((prevTooltip) => ({ ...prevTooltip, visible: false }));
  };

  const stateOnClick = (data: Record<string, any>, name: string) => {
    setActiveState({ data, name });
  };

  return (
    <div
      style={{
        width: "830px",
        height: "694px",
        overflow: "hidden",
        position: "relative",
        cursor: "pointer",
        zIndex: -10,
      }}
    >
      {/* Tooltip */}
      {tooltip.visible && (
        <div
          style={{
            position: "absolute",
            top: tooltip.y,
            left: tooltip.x,
            backgroundColor: "white",
            padding: "6px",
            border: "1px solid black",
            borderRadius: "4px",
            fontSize: "14px",
            pointerEvents: "none",
            transform: "translate(-50%, -100%)", // Center tooltip above cursor
          }}
        >
          {tooltip.name || "No Data"}
        </div>
      )}

      <ReactDatamaps
        mapLayout={{
          hoverTitle: "Count",
          noDataColor: "#D36418",
          borderColor: "#ffffff",
          hoverBorderColor: "pink",
          hoverColor: "green",
        }}
        onMouseMove={(region: any, name: string, e: React.MouseEvent<SVGElement>) =>
          handleMouseMove(e, name)
        }
        onMouseLeave={handleMouseLeave}
        onClick={(data: any, name: string) => stateOnClick(data, name)}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
        }}
      />
    </div>
  );
};

export default IndiaMap;
