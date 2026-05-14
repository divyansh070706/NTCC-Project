const calculateGrowth = (current, previous) => {
  if (previous === 0) return 0;

  return (((current - previous) / previous) * 100).toFixed(2);
};

export default calculateGrowth;