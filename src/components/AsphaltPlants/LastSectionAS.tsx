import InfoCard from "../../components/unitComponents/InfoCard";
import img1 from "../../assets/images/AsphaltPlant/Gallery/Fabricación de pugmill.webp";
import img2 from "../../assets/images/AsphaltPlant/Gallery/Fabricación de tanque con caldera.webp";
import img3 from "../../assets/images/AsphaltPlant/Gallery/Quemadores en fabricación.webp";
import img4 from "../../assets/images/AsphaltPlant/Gallery/Soldadura interna de tambor mezclador.webp";

export default function App() {
  return (
    <div className="px-4">
      <InfoCard
        sections={[
          {
            id: "A",
            label: "A",
            image: img3.src,
            title: "Precios competitivos sin comprometer la calidad",
            description:
              "Soluciones industriales de alta calidad que garantizan confiabilidad y durabilidad.",
          },
          {
            id: "B",
            label: "B",
            image: img2.src,
            title:
              "Amplia experiencia técnica para ofrecer un servicio al cliente excepcional",
            description:
              "Nuestro equipo está diseñado con tecnología de vanguardia para lograr el máximo rendimiento.",
          },
          {
            id: "C",
            label: "C",
            image: img1.src,
            title:
              "Personalización para adaptarnos a las necesidades específicas de cada cliente",
            description:
              "Hemos suministrado e instalado equipos en todo el mundo con resultados comprobados.",
          },
          {
            id: "D",
            label: "D",
            image: img4.src,
            title: "Disponibilidad inmediata de refacciones",
            description:
              "Equipo de soporte dedicado para garantizar una operación fluida y satisfacción a largo plazo.",
          },
        ]}
      />
    </div>
  );
}
