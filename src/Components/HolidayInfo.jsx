import { useNavigate } from "react-router-dom";

const HolidayInfo = (props) => {
  const navigate = useNavigate();

  return (
    <tbody>
      <tr onClick={() => navigate(`/HolidayDetails/${props.uuid}`)}>
        <td>{props.name}</td>
        <td>{props.date}</td>
        <td>{props.observedDate}</td>
        <td>{props.weekday}</td>
        <td>{props.public ? "Yes" : "No"}</td>
      </tr>
    </tbody>
  );
};

export default HolidayInfo;
