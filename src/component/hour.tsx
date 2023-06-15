import moment from "moment";

/* type de serveur time */
export type ServerTime = {
  serverTime: string;
};
const GetHourServer = ({ serverTime }: ServerTime) => {
  const date = new Date();

  return <>{serverTime}</>;
};
export default GetHourServer;
