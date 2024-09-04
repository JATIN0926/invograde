const SVGDashedLine = () => {
    return (
      <svg height="100%" width="10px" className=" mx-4">
        <line
          x1="5"
          y1="0"
          x2="5"
          y2="100%"
          style={{ stroke: "#2C1F46", strokeWidth: 2, strokeDasharray: "10, 10" }}
        />
      </svg>
    );
  };
  
  export default SVGDashedLine;
  