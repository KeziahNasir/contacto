import React from "react";

function Hero() {
  return (
    <>
      <div className="bg-sky-500 h-screen flex items-center justify-center">
        <div
          class="image"
          style={{
            height:"80vh",
            width:"100%",
            backgroundImage:
              'url("https://images.pexels.com/photos/892757/pexels-photo-892757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="w-[50%] mt-50">
          <div>
            <h1 className="text-white text-4xl">
              Manage & Customize Your Perfect Communication
            </h1>
          </div>
          <div>
            <p>
              Store unlimited contacts and build stronger relationships by
              keeping all your contacts tack in one place.
            </p>
          </div>
        </div>
        {/* Add your hero content here */}

        
        </div>
      </div>
    </>
  );
}

export default Hero;
