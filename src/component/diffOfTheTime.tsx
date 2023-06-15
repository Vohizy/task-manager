import { ServerTime } from "./hour";
import moment from "moment";
const DiffOfTheTimeServerAndWeb = ({ serverTime }: ServerTime) => {
  const startTime = serverTime;
  const endTime = new Date().toISOString();

  const startMoment = moment(startTime);
  const endMoment = moment(endTime);

  const duration = moment.duration(endMoment.diff(startMoment));
  const hoursDiff = duration.asHours();
  return <>{hoursDiff}</>;
};
export default DiffOfTheTimeServerAndWeb;
