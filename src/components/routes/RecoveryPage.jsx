import Navbar from "../Navbar";
import Data from "../Data";
import Footer from "../Footer";
import "../../RecoveryStyles.css";

const RecoveryPage = () => {
  return (
    <>
      <Navbar />
      <Data recovery={true} />
      <Footer />
    </>
  );
};

export default RecoveryPage;
