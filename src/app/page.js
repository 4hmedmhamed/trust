import Image from "next/image";
import styles from "./page.module.css";
import Banner from "./Banner";
import Mainpage from "./Mainpage";
import Customers from "./Customers";
export default function Home() {
  return (
    <>
   <div>

        <Banner></Banner>
        <Mainpage></Mainpage>
        <Customers></Customers>
   </div>
    
    </>
  );
}
