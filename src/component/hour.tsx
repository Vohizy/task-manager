/* type de serveur time */
export type ServerTime = {
  serverTime: string;
};
const GetHourServer = ({ serverTime }: ServerTime) => {
  return <>{serverTime}</>;
};
export default GetHourServer;
