import moment from "moment";
import { GetServerSideProps } from "next";
/* type de serveur time */
export type ServerTime = {
  serverTime: string;
};
const GetHourServer = ({ serverTime }: ServerTime) => {
  return <>{serverTime}</>;
};

/* recuper l'heure dans le serveur */
export const getServerSideProps: GetServerSideProps = async () => {
  const serverTime = new Date().toISOString();

  console.log("serveur");

  // Retournez les données récupérées en tant que props
  return {
    props: {
      serverTime,
    },
  };
};
export default GetHourServer;
