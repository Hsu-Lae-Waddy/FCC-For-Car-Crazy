import Slider from "../sections/Slider";
import Footer from "../sections/Footer";
import Header from "../sections/header";
export default function Home() {
  return (
    <>
    <Header/>
    <div className="bg-gray-400"> 
    <h2 className="text-4xl font-bold font-mono p-6 text-center">You can't hide who you are</h2>
    <Slider/></div>
    <Footer></Footer>
    </>
  ); 
}