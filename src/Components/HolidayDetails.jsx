import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const API_KEY = import.meta.env.VITE_APP_API_KEY;

const HolidayDetails = () => {
  const navigate = useNavigate();
  let params = useParams();
  const [selectedHoliday, setSelectedHoliday] = useState({});

  useEffect(() => {
    const fetchAllHolidays = async () => {
      const res = await fetch(
        `https://holidayapi.com/v1/holidays?pretty&key=${API_KEY}&country=US&year=2022`
      );
      const json = await res.json();
      json.holidays.forEach((holiday) => {
        if (holiday.uuid === params.uuid) {
          setSelectedHoliday(holiday);
        }
      })
    };
    fetchAllHolidays().catch(console.error);
  }, []);

  return (
    <div className="holidayDetail">
      <h1>{selectedHoliday.name}</h1>

      <div className="details">
        <p>Date: {selectedHoliday.date}</p>
        <p>Observed Date: {selectedHoliday.observed}</p>
        <p>Public: {selectedHoliday.public ? "Yes" : "No"}</p>
        <p>Country: {selectedHoliday.country}</p>
      </div>

      <button id="backButton" onClick={() => navigate("/")}>Go Back</button>
    </div>
  )
}

export default HolidayDetails