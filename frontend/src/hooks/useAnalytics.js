import { useEffect, useState } from "react";

const useAnalytics = () => {
  const [analytics, setAnalytics] = useState([]);

  useEffect(() => {
    const sampleData = [
      {
        title: "Revenue Growth",
        value: "+24%",
      },
      {
        title: "Customer Growth",
        value: "+18%",
      },
    ];

    setAnalytics(sampleData);
  }, []);

  return analytics;
};

export default useAnalytics;