import { Outlet } from "react-router-dom";
import Header from "../layouts/Header"
import SideBar from "../layouts/SideBar"
import { useSelector } from "react-redux";
import Create from "../components/article/Create";


function App() {

  const sideBarMenu = useSelector((state) => state.sideBarMenu.value)

  return (
    <>
      <SideBar />
      <div className={sideBarMenu ? 'xl:pl-72' : 'xl:pl-[70px]'}>
        <Header/>
        <main>
          <Outlet />
        </main>
      </div>
      
      
    </>
  )
}

export default App