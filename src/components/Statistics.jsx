import React from "react";
import GitHubCalendar from "react-github-calendar";
const Statistics = () => {
  const selectLastHalfYear = (contributions) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 6;

    return contributions.filter((day) => {
      const date = new Date(day.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };
  return (
    <div
      style={{ height: "auto" }}
      name="statistics"
      className="  w-full h-screen bg-gradient-to-r from-sky-400 to-indigo-900">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p style={{textShadow: "0 0 5px #040404, 0 0 15px #4a53cf, 0 0 20px #040404, 0 0 40px #040404, 0 0 60px #3bb6c4, 0 0 10px #4a53cf, 0 0 98px #040404"}}
            className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Statistics
          </p>
          <p className="py-6">
            These are some of statistics graphs to determine my contribution and
            knowledge in this digital world.
          </p>
        </div>
        {/* git Calender */}
        <div className="flex gap-9  justify-center mt-14">
      <p><img align="center" src="https://github-readme-stats.vercel.app/api/top-langs?username=Abdul-Rub&show_icons=true&locale=en&layout=compact&theme=prussian" alt="Abdulrub" /></p>
      <p><img align="center" src="https://github-readme-streak-stats.herokuapp.com/?user=Abdul-Rub&theme=prussian" alt="abdulrub" /></p>
      </div>
      <div className="flex justify-center items-center  mt-16 text-6xl font-medium">
        <GitHubCalendar 
     username="Abdul-Rub" 
  transformData={selectLastHalfYear} />
      </div>
      {/* <div style={{marginTop:"60px"}}>
          <img  alt="Abdul Rub's Activity Graph" src="https://activity-graph.herokuapp.com/graph?username=Abdul-Rub&theme=prussian&color=FFA500&line=FFA500&point=FFA500&hide_border=true" />
        </div> */}
      </div>
    </div>
  );
};
export default Statistics;
