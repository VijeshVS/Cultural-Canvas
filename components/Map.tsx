"use client";
import React, { useState, useCallback } from "react";
// @ts-ignore
import ReactDatamaps from "react-india-states-map";

const IndiaMap = () => {
  const [activeState, setactiveState] = useState({
    name: "India",
  });

  const [tooltip, setTooltip] = useState({
    visible: false,
    x: 0,
    y: 0,
    name: "",
  });

  let debounceTimeout;

  // Debounced update for tooltip
  const updateTooltip = useCallback((e, name) => {
    if (debounceTimeout) clearTimeout(debounceTimeout);

    debounceTimeout = setTimeout(() => {
      const mapContainer = e.currentTarget.getBoundingClientRect(); // Get bounding box of the map container
      setTooltip({
        visible: true,
        x: e.clientX - mapContainer.left + 20, // Offset tooltip from the cursor horizontally
        y: e.clientY - mapContainer.top - 40, // Offset tooltip above the cursor
        name,
      });
    }, 50); // Adjust debounce delay as needed (e.g., 50ms)
  }, []);

  // Handle hover to display tooltip
  const handleMouseMove = (e, name) => {
    updateTooltip(e, name);
  };

  // Hide tooltip on mouse leave
  const handleMouseLeave = () => {
    if (debounceTimeout) clearTimeout(debounceTimeout);
    setTooltip({ ...tooltip, visible: false });
  };

  const stateOnClick = (data, name) => {
    setactiveState({ data, name });
  };

  return (
    <div
      style={{
        width: "1000px",
        height: "1000px",
        overflow: "hidden",
        position: "relative",
        cursor: "pointer",
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
            zIndex: 1000,
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
        onMouseMove={(region, name, e) => handleMouseMove(e, name)}
        onMouseLeave={handleMouseLeave}
        onClick={stateOnClick}
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
