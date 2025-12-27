function Header(){
    return (
    <> 
        <img src="src/assets/images/pexels-tdcat-70912.jpg" className="w-full h-full"></img>
        <div className="absolute inset-0 w-full h-24 bg-black items-center justify-center  text-white font-bold text-4xl flex">
            FCC - For Car Crazy
        </div>
        <div className="absolute inset-0 flex items-center justify-left px-6">
        <p className="text-white text-xl font-sans text-left bg-black/20 p-10 rounded-lg ">
            Welcome to our car information website,<br />
            a platform dedicated to showcasing popular automobile brands.
            <br />
            This website provides detailed information and high-quality images of various cars.
        </p>
    
        </div>
    
        
     </> 
    )
}

export default Header;