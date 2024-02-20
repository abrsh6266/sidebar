import { useGlobalContext } from "./Context";
import { FaBars } from "react-icons/fa";
const Home = () => {
  const { openSidebar, closeSidebar, openModal, closeModal } =
    useGlobalContext();
  return (
    <main>
      <button className="sidebar-toggle" onClick={openSidebar}>
        <FaBars />
      </button>
      <button className="btn" onClick={openModal}>Show Modal</button>
    </main>
  );
};

export default Home;
