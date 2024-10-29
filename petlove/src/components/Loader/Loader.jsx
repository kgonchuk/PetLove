import React, { useEffect, useState } from "react";
import {
  LoaderContainer,
  LoaderFill,
  LoaderPercent,
  LoaderText,
} from "./Loader.styled";

const Loader = () => {
  const [percentage, setPercentage] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setLoaded(true);
          return 100;
        }
        return prev + 1;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <LoaderContainer>
      <Loader>
        {loaded && (
          <>
            <LoaderFill
              style={{ transform: `rotate(${(percentage / 100) * 360}deg)` }}
            ></LoaderFill>
            <LoaderPercent>{Math.floor(percentage)}%</LoaderPercent>
          </>
        )}
        {loaded && <LoaderText>Petlove</LoaderText>}
      </Loader>
    </LoaderContainer>
  );
};

export default Loader;
