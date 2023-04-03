import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const Chart = (props) => {
  let jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec, mon, tue, wed, thur, fri, sat, sun;
  jan = feb = mar = apr = may = jun = jul = aug = sep = oct = nov = dec = mon = tue = wed = thur = fri = sat = sun = 0;

  props.list.forEach((holiday) => {
    if (holiday.date.includes("-01-")) {
      jan++;
    } else if (holiday.date.includes("-02-")) {
      feb++;
    } else if (holiday.date.includes("-03-")) {
      mar++;
    } else if (holiday.date.includes("-04-")) {
      apr++;
    } else if (holiday.date.includes("-05-")) {
      may++;
    } else if (holiday.date.includes("-06-")) {
      jun++;
    } else if (holiday.date.includes("-07-")) {
      jul++;
    } else if (holiday.date.includes("-08-")) {
      aug++;
    } else if (holiday.date.includes("-09-")) {
      sep++;
    } else if (holiday.date.includes("-10-")) {
      oct++;
    } else if (holiday.date.includes("-11-")) {
      nov++;
    } else if (holiday.date.includes("-12-")) {
      dec++;
    }

    switch (holiday.weekday.date.name) {
      case "Monday":
        mon++;
        break;
      case "Tuesday":
        tue++;
        break;
      case "Wednesday":
        wed++;
        break;
      case "Thursday":
        thur++;
        break;
      case "Friday":
        fri++;
        break;
      case "Saturday":
        sat++;
        break;
      case "Sunday":
        sun++;
        break;
      default:
        break;
    }
  });

  const monthData = [
    { month: "Jan", totalHolidays: jan },
    { month: "Feb", totalHolidays: feb },
    { month: "Mar", totalHolidays: mar },
    { month: "Apr", totalHolidays: apr },
    { month: "May", totalHolidays: may },
    { month: "Jun", totalHolidays: jun },
    { month: "Jul", totalHolidays: jul },
    { month: "Aug", totalHolidays: aug },
    { month: "Sep", totalHolidays: sep },
    { month: "Oct", totalHolidays: oct },
    { month: "Nov", totalHolidays: nov },
    { month: "Dec", totalHolidays: dec },
  ];

  const weekdayData = [
    {weekday: "Mon", totalHolidays: mon },
    {weekday: "Tue", totalHolidays: tue },
    {weekday: "Wed", totalHolidays: wed },
    {weekday: "Thur", totalHolidays: thur },
    {weekday: "Fri", totalHolidays: fri },
    {weekday: "Sat", totalHolidays: sat },
    {weekday: "Sun", totalHolidays: sun },
  ]

  return (
    <>
      <LineChart
        width={600}
        height={300}
        data={monthData}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <Line type="monotone" dataKey="totalHolidays" stroke="#4baee0" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
      </LineChart>

      <BarChart width={600} height={300} data={weekdayData}>
        <XAxis dataKey="weekday" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="totalHolidays" barSize={30} fill="#4baee0" />
      </BarChart>
    </>
  );
};

export default Chart;
