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
    { title: "Fabricación de consolas de control", image: img1, altTitle:"Fabricación de consola de control" },
    { title: "Fabricación de quemadores", image: img2, altTitle:"Fabricación de quemadores" },
    { title: "Fabricación de un tanque de asfalto con calentador de aceite", image: img3, altTitle:"Fabricación de tanque de asfalto con caldera de aceite térmico" },
    { title: "Fabricación de plantas de mezcla en frío", image: img4, altTitle:"Fabricación de planta de mezcla en frío"},
    { title: "Colocación de álabes en el tambor", image: img5, altTitle:"Colocación de álabes en el tambor" },
    { title: "Corte de las aletas del tambor con plasma", image: img6, altTitle:"Corte de álabes del tambor con plasma" },
    { title: "Soldadura interna del tambor del mezclador", image: img7, altTitle:"Soldadura interna del tambor mezclador" },
    { title: "Fabricación de casas de bolsa", image: img8, altTitle:"Fabricación de casa de bolsas" },
    { title: "Fabricación de ascensores curvos", image: img9, altTitle:"Fabricación de elevador curvo" },
    { title: "Fabricación de secadores de tambor: los inicios", image: img10, altTitle:"Fabricación de tambor secador: los comienzos" },
    { title: "Fabricación de chasis", image: img11, altTitle:"Fabricación de chasis" },
    { title: "Fabricación de silos", image: img12, altTitle:"Fabricación de silo" },
    {title: "Fabricación de casa de bolsa", image: img13, altTitle:"Fabricación de casa de bolsas"},
    {title:"Fabricación de bisagras para ascensores", image: img14, altTitle:"Fabricación de bisagras del elevador"},
    {title:"Fabricación de extractores de humos", image: img15, altTitle:"Fabricación de extractor de gases"},
    {title: "Fabricación de serpentines para tanques", image: img16, altTitle:"Fabricación del serpentín de un tanque"},
    {title:"Fabricación de mezcladoras", image: img17, altTitle:"Fabricación de pugmill"},
    {title:"Fabricación de secadores de tambor", image: img18, altTitle:"Fabricación de tambor secador"},
    {title:"Fabricación de tanques de asfalto", image: img19, altTitle:"Fabricación de tanque de asfalto"},
    {title:"Aislamiento térmico de un calentador de aceite", image: img20, altTitle:"Aislamiento térmico de caldera de aceite térmico"},
    {title:"Mecanizado de piezas en serie", image: img21, altTitle:"Maquinado de piezas en serie"},
    {title:"Alimentación automática de ejes", image: img22, altTitle:"Alimentación automática de ejes"},
    {title:"Fabricación de consolas de control", image: img23, altTitle:"Fabricación de consolas de control"},
    {title:"Fabricación de elevadores de silos", image: img24, altTitle:"Fabricación del elevador de un silo"},
    {title:"Fabricación automática de pines", image: img25, altTitle:"Fabricación automática de pernos"},
    {title:"Mecanizado de chapas", image: img26, altTitle:"Maquinado de placa"},
    {title:"Fabricación de neumáticos para tambores", image: img27, altTitle:"Fabricación de aros del tambor"},
    {title:"Tratamiento térmico de piezas", image: img28, altTitle:"Tratamiento térmico de piezas"},
    {title:"Fabricación de calefactores de aceite", image: img29, altTitle:"Fabricación de caldera de aceite térmico"},
    {title:"Cabina de control, aplicación de pintura", image: img30, altTitle:"Aplicación de pintura en caseta de control"},
    {title:"Fabricación de contenedores", image: img31, altTitle:"Fabricación de tolvas de agregados"},
    {title:"Fundición de válvulas", image: img32, altTitle:"Fundición de válvulas"},
    {title:"Moldes para la fundición de válvulas", image: img33, altTitle:"Moldes para fundición de válvulas"},
    {title:"Rodillos con pintura electrostática", image: img34, altTitle:"Rodillos con pintura electrostática"},
    {title:"Unión de banda vulcanizada", image: img35, altTitle:"Unión vulcanizada de banda"},
    {title:"Fabricación de alas de tambor", image: img36, altTitle:"Fabricación de álabes del tambor"},
    {title:"Aplicación de soldadura con carro robótico", image: img37, altTitle:"Soldadura con carro robotizado"},
    {title:"Fabricación de plantas de mezcla en frío: los comienzos", image: img38, altTitle:"Fabricación de planta de mezcla en frío: los comienzos"},
    
  ];
  return (
    <div className="w-full flex flex-col justify-center items-center">

      <div className="w-full px-4 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-10 py-10 max-w-7xl items-center">
        {ItemGallery.map((element) => (
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
                <h3 className="text-xs md:text-sm text-white font-bold text-center">
                  {element.title}
                </h3>
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
