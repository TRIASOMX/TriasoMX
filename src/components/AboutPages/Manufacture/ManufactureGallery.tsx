import React from "react";
import { useState } from "react";
import img1 from "../../../assets/images/Manufacture/1.webp";
import img2 from "../../../assets/images/Manufacture/2.webp";
import img3 from "../../../assets/images/Manufacture/3.webp";
import img4 from "../../../assets/images/Manufacture/4.webp";
import img5 from "../../../assets/images/Manufacture/5.webp";
import img6 from "../../../assets/images/Manufacture/6.webp";
import img7 from "../../../assets/images/Manufacture/7.webp";
import img8 from "../../../assets/images/Manufacture/8.webp";
import img9 from "../../../assets/images/Manufacture/9.webp";
import img10 from "../../../assets/images/Manufacture/10.webp";
import img11 from "../../../assets/images/Manufacture/11.webp";
import img12 from "../../../assets/images/Manufacture/12.webp";
import img13 from "../../../assets/images/Manufacture/13.webp";
import img14 from "../../../assets/images/Manufacture/14.webp";
import img15 from "../../../assets/images/Manufacture/15.webp";
import img16 from "../../../assets/images/Manufacture/16.webp";
import img17 from "../../../assets/images/Manufacture/17.webp";
import img18 from "../../../assets/images/Manufacture/18.webp";
import img19 from "../../../assets/images/Manufacture/19.webp";
import img20 from "../../../assets/images/Manufacture/20.webp";
import img21 from "../../../assets/images/Manufacture/21.webp";
import img22 from "../../../assets/images/Manufacture/22.webp";
import img23 from "../../../assets/images/Manufacture/23.webp";
import img24 from "../../../assets/images/Manufacture/24.webp";
import img25 from "../../../assets/images/Manufacture/25.webp";
import img26 from "../../../assets/images/Manufacture/26.webp";
import img27 from "../../../assets/images/Manufacture/27.webp";
import img28 from "../../../assets/images/Manufacture/28.webp";
import img29 from "../../../assets/images/Manufacture/29.webp";
import img30 from "../../../assets/images/Manufacture/30.webp";
import img31 from "../../../assets/images/Manufacture/31.webp";
import img32 from "../../../assets/images/Manufacture/32.webp";
import img33 from "../../../assets/images/Manufacture/33.webp";
import img34 from "../../../assets/images/Manufacture/34.webp";
import img35 from "../../../assets/images/Manufacture/35.webp";
import img36 from "../../../assets/images/Manufacture/36.webp";
import img37 from "../../../assets/images/Manufacture/37.webp";
import img38 from "../../../assets/images/Manufacture/38.webp";

const ManufactureGallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState("");
  const [currentAlt, setCurrentAlt] = useState("");
  const ItemGallery = [
    { title: "Control console manufacture", image: img1, altTitle:"Control console manufacture" },
    { title: "Burners manufacture", image: img2, altTitle:"Burners manufacture" },
    { title: "Manufacturing of asphalt tank, with oil heater", image: img3, altTitle:"Manufacturing of asphalt tank, with oil heater" },
    { title: "Cold mixing plant manufacturing", image: img4, altTitle:"Cold mixing plant manufacturing"},
    { title: "Placing of drum flights", image: img5, altTitle:"Placing of drum flights" },
    { title: "Cutting of drum flights with plasma", image: img6, altTitle:"Cutting of drum flights with plasma" },
    { title: "Internal welding of the mixer drum", image: img7, altTitle:"Internal welding of the mixer drum" },
    { title: "Baghouse manufacture", image: img8, altTitle:"Baghouse manufacture" },
    { title: "Curved elevator manufacturing", image: img9, altTitle:"Curved elevator manufacturing" },
    { title: "Drum dryer manufacturing, beginings", image: img10, altTitle:"Drum dryer manufacturing, beginings" },
    { title: "Chassis manufacture", image: img11, altTitle:"Chassis manufacture" },
    { title: "Silo manufacture", image: img12, altTitle:"Silo manufacture" },
    {title: "Baghouse manufacture", image: img13, altTitle:"Baghouse manufacture"},
    {title:"Elevator hinges manufacture", image: img14, altTitle:"Elevator hinges manufacture"},
    {title:"Exhaust extractor manufacture", image: img15, altTitle:"Exhaust extractor manufacture"},
    {title: "Tank coil manufacture", image: img16, altTitle:"Tank coil manufacture"},
    {title:"Pugmill manufacture", image: img17, altTitle:"Pugmill manufacture"},
    {title:"Drum dryer manufacturing", image: img18, altTitle:"Drum dryer manufacturing"},
    {title:"Asphalt tank manufacture", image: img19, altTitle:"Asphalt tank manufacture"},
    {title:"Oil heater thermal insulation", image: img20, altTitle:"Oil heater thermal insulation"},
    {title:"Serial parts machining", image: img21, altTitle:"Serial parts machining"},
    {title:"Automatic shaft feeding", image: img22, altTitle:"Automatic shaft feeding"},
    {title:"Manufacturing of control consoles", image: img23, altTitle:"Manufacturing of control consoles"},
    {title:"Silo elevator manufacture", image: img24, altTitle:"Silo elevator manufacture"},
    {title:"Automatic pin fabrication", image: img25, altTitle:"Automatic pin fabrication"},
    {title:"Plate machining", image: img26, altTitle:"Plate machining"},
    {title:"Drum tires manufacture", image: img27, altTitle:"Drum tires manufacture"},
    {title:"Thermal treatment of parts", image: img28, altTitle:"Thermal treatment of parts"},
    {title:"Oil heater manufacture", image: img29, altTitle:"Oil heater manufacture"},
    {title:"Control cabin, paint application", image: img30, altTitle:"Control cabin, paint application"},
    {title:"Bins unit manufacture", image: img31, altTitle:"Bins unit manufacture"},
    {title:"Valve casting", image: img32, altTitle:"Valve casting"},
    {title:"Molds for valve casting", image: img33, altTitle:"Molds for valve casting"},
    {title:"Rollers with electrostatic paint", image: img34, altTitle:"Rollers with electrostatic paint"},
    {title:"Vulcanized band joint", image: img35, altTitle:"Vulcanized band joint"},
    {title:"Drum flights manufacture", image: img36, altTitle:"Drum flights manufacture"},
    {title:"Welding application with robotic trolley", image: img37, altTitle:"Welding application with robotic trolley"},
    {title:"Cold mixing plant manufacturing, beginings", image: img38, altTitle:"Cold mixing plant manufacturing, beginings"},
    
  ];
  return (
    <div className="w-full flex flex-col justify-center items-center">

      <div className="w-full px-4 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-10 py-10 max-w-7xl items-center">
        {ItemGallery.map((element, i) => (
          <div
            className="w-full bg-white flex cursor-pointer shadow hover:scale-105 transition-transform"
            onClick={() => {
              setCurrentImg(element.image.src);
              setCurrentAlt (element.altTitle)
              setIsOpen(true);
            }}
          >
            <div className="w-1 md:w-2 self-stretch bg-blueMain text-blueMain px-1 md:px-2"></div>

            <div className="w-full relative items-center aspect-[16/9] overflow-hidden group ">
              <img
                src={element.image.src}
                alt={element.title}
                className="w-full h-auto z-10"
                loading="lazy"
                fetchPriority="high"
              />
              <div
                className="w-full h-full flex items-center justify-center bg-black/50 absolute top-0 z-20 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              >
                <h1 className="text-xs md:text-sm text-white font-bold text-center">
                  {element.title}
                </h1>
              </div>
            </div>
          </div>
        ))}

        {/* Modal */}
        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
            <div className="relative w-11/12 md:w-1/2">
              {/* Botón cerrar */}
              <button
                className="absolute top-2 right-2 bg-white rounded-full px-3 py-1 shadow hover:bg-gray-200"
                onClick={() => setIsOpen(false)}
              >
                ✖
              </button>

              {/* Imagen */}
              <img
                src={currentImg}
                alt={currentAlt}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManufactureGallery;
