import Slider from "../sections/Slider";
import Header from "../sections/Header";
export default function Home() {
  return (
    <>
    <Header/>
    <div className="bg-gray-400"> 
    <h2 className="text-4xl font-bold font-mono p-6 text-center">You can't hide who you are</h2>
    <Slider/></div>
    </>
  ); 
}