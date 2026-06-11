import InfoCard from "../../../components/unitComponents/InfoCard";
import img1 from "../../../assets/images/AsphaltPlant/Gallery/Fabricación de pugmill.webp"
import img2 from "../../../assets/images/AsphaltPlant/Gallery/Fabricación de tanque con caldera.webp"
import img3 from "../../../assets/images/AsphaltPlant/Gallery/Quemadores en fabricación.webp"
import img4 from "../../../assets/images/AsphaltPlant/Gallery/Soldadura interna de tambor mezclador.webp"

export default function App() {
  return (
    <div className="p-8">
      <InfoCard
        sections={[
          {
            id: "A",
            label: "A",
            image: img3.src,
            title: "Precios competitivos sin comprometer la calidad",
            description:
              "Soluciones industriales de alta calidad que garantizan fiabilidad y durabilidad.",
          },
          {
            id: "B",
            label: "B",
            image: img2.src,
            title:
              "Amplios conocimientos técnicos para ofrecer un servicio al cliente excepcional",
            description:
              "Nuestros equipos están diseñados con tecnología de vanguardia para ofrecer el máximo rendimiento.",
          },
          {
            id: "C",
            label: "C",
            image: img4.src,
            title: "Personalización para adaptarse a las necesidades específicas del cliente",
            description:
              "Hemos suministrado e instalado equipos en todo el mundo con resultados probados.",
          },
          {
            id: "D",
            label: "D",
            image: img1.src,
            title: "Disponibilidad inmediata de piezas de repuesto",
            description:
              "Un equipo de soporte especializado para garantizar un funcionamiento fluido y la satisfacción a largo plazo.",
          },
        ]}
      />
    </div>
  );
}
