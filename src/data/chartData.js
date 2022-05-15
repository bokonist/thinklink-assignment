const weekData = {};
const monthData = {};
const yearData = {};

for (let i = 0; i < 31; i += 1) {
  monthData[`${i} May`] = (Math.random() * 50000).toFixed(0);
}
weekData.MON = (Math.random() * 50000).toFixed(0);
weekData.TUE = (Math.random() * 50000).toFixed(0);
weekData.WED = (Math.random() * 50000).toFixed(0);
weekData.THU = (Math.random() * 50000).toFixed(0);
weekData.FRI = (Math.random() * 50000).toFixed(0);
weekData.SAT = (Math.random() * 50000).toFixed(0);
weekData.SUN = (Math.random() * 50000).toFixed(0);

yearData.JAN = (Math.random() * 50000).toFixed(0);
yearData.FEB = (Math.random() * 50000).toFixed(0);
yearData.MAR = (Math.random() * 50000).toFixed(0);
yearData.APR = (Math.random() * 50000).toFixed(0);
yearData.MAY = (Math.random() * 50000).toFixed(0);
yearData.JUN = (Math.random() * 50000).toFixed(0);
yearData.JUL = (Math.random() * 50000).toFixed(0);
yearData.AUG = (Math.random() * 50000).toFixed(0);
yearData.SEP = (Math.random() * 50000).toFixed(0);
yearData.OCT = (Math.random() * 50000).toFixed(0);
yearData.NOV = (Math.random() * 50000).toFixed(0);
yearData.DEC = (Math.random() * 50000).toFixed(0);

export { yearData, monthData, weekData };
