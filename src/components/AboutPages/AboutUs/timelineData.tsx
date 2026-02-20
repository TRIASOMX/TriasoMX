import img1 from "../../../assets/images/About/Timeline/Asphalt/1.webp"
import img2 from "../../../assets/images/About/Timeline/Asphalt/2.webp"
import img3 from "../../../assets/images/About/Timeline/Asphalt/3.webp"
import img4 from "../../../assets/images/About/Timeline/Asphalt/4.webp"
import img5 from "../../../assets/images/About/Timeline/Asphalt/5.webp"
import img6 from "../../../assets/images/About/Timeline/Asphalt/6.webp"
import img7 from "../../../assets/images/About/Timeline/Asphalt/7.webp"
import img8 from "../../../assets/images/About/Timeline/Asphalt/8.webp"
import img9 from "../../../assets/images/About/Timeline/Asphalt/9.webp"
import img10 from "../../../assets/images/About/Timeline/Asphalt/10.webp"
import img11 from "../../../assets/images/About/Timeline/Asphalt/11.webp"
import img12 from "../../../assets/images/About/Timeline/Asphalt/12.webp"
import img13 from "../../../assets/images/About/Timeline/Asphalt/13.webp"
import img14 from "../../../assets/images/About/Timeline/Asphalt/14.webp"
import img15 from "../../../assets/images/About/Timeline/Asphalt/15.webp"
import img16 from "../../../assets/images/About/Timeline/Asphalt/16.webp"
import img17 from "../../../assets/images/About/Timeline/Asphalt/17.webp"
import img18 from "../../../assets/images/About/Timeline/Asphalt/18.webp"
import img19 from "../../../assets/images/About/Timeline/Asphalt/19.webp"
import img20 from "../../../assets/images/About/Timeline/Asphalt/20.webp"
import img21 from "../../../assets/images/About/Timeline/Asphalt/21.webp"
import img22 from "../../../assets/images/About/Timeline/Asphalt/22.webp"
import img23 from "../../../assets/images/About/Timeline/Asphalt/23.webp"
import img24 from "../../../assets/images/About/Timeline/Asphalt/24.webp"
import img25 from "../../../assets/images/About/Timeline/Asphalt/25.webp"
import img26 from "../../../assets/images/About/Timeline/Asphalt/26.webp"
import img27 from "../../../assets/images/About/Timeline/Asphalt/27.webp"
import img28 from "../../../assets/images/About/Timeline/Asphalt/28.webp"
import img29 from "../../../assets/images/About/Timeline/Asphalt/29.webp"
import img30 from "../../../assets/images/About/Timeline/Asphalt/30.webp"


export interface TimelineEvent {
    id: string;
    title?: string;
    description?: string;
    category?: string;
    image?: any;
}
export interface TimelineDate {
    id: string;
    date: string;
    label: string;
    events: TimelineEvent[];
}
export const timelineData: TimelineDate[] = [
    {
        id:"d16",
        date:"1997",
        label:"1997",
        events:[{
            id:"e30", description:"Company's first asphalt plant produced", image: img1.src
        }]
    },

    {
        id: "d1",
        date: "2006",
        label: "2006",
        events: [
            { id: "e1", description: "We introduced our open-flame burner design." , image: img2.src },
            {id: "e31", image:img3.src}
        ],
    },
    {
        id: "d2",
        date: "2011",
        label: "2011",
        events: [
            { id: "e2", description: "We introduced our counterflow drum paired with a pulse-jet baghouse.", image: img4.src },
        ],
    },
    {
        id: "d3",
        date: "2012",
        label: "2012",
        events: [
            { id: "e4", description: "We introduced our curved elevator, a distinctive design that reduced truck unloading height and provided clear operational advantages. However, due to higher maintenance requirements, the design was later discontinued.", image: img5.src },
        ],
    },
    {
        id: "d4",
        date: "2013",
        label: "2013",
        events: [
            { id: "e5", description: "We launched our cold-mix plant for applications in construction, industrial, and mining sectors.", image:img6.src },
            { id: "e6", description: "We implemented an adjustable flight system in our counterflow drum.", image:img7.src },
        ],
    },
    {
        id: "d5",
        date: "2014",
        label: "2014",
        events: [
            { id: "e8", description: "We implemented an optional computerized control system in our asphalt tanks for inventory monitoring and loss prevention.", image: img9.src },
            { id: "e9", description: "We incorporated emission sampling ports on the exhaust stack to enable verification of emissions in accordance with environmental regulations.", image: img8.src },
        ],
    },
    {
        id: "d6",
        date: "2015",
        label: "2015",
        events: [
            { id: "e10", description: "We transitioned the baghouses of our counterflow plants in Mexico from pulse-jet systems to reverse-air systems. Today, we offer both configurations based on client preference.", image: img11.src },
            { id: "e11", description: "We introduced two parallel-flow asphalt plant models—Basic and Plus—to address different performance requirements and budget levels.", image: img10.src },
            { id: "e12", description: "We built our first hot-mix storage silo, starting with the most complex configuration: a self-erecting design.", image: img12.src }
        ],
    },
    {
        id: "d7",
        date: "2016",
        label: "2016",
        events: [
            { id: "e10", description: "We upgraded the exhaust fan to reduce noise, improve efficiency, and use direct drive for lower maintenance.", image: img14.src },
            { id: "e11", description: "We changed the color of our plants from yellow to sand and fully insulated all drums, finishing them with stainless steel cladding.", image: img13.src },
            { id: "e12", description: "We completely re-designed our cold-mix plant with a very modern appearance.", image: img15.src }
        ],
    },
    {
        id: "d8",
        date: "2017",
        label: "2017",
        events: [
            { id: "e13", description: "We introduced an external pugmill (paddle mixer) as an optional configuration for counterflow drum plants.", image: img17.src },
            { id: "e14", description: "We introduced our current “Total Air” burner, equipped with a fuel preheater to efficiently burn higher-viscosity fuels.", image: img16.src },
        ],
    },
    {
        id: "d9",
        date: "2018",
        label: "2018",
        events: [
            { id: "e15", description: "We built our first powdered tire rubber incorporation system for asphalt, enabling the production of rubberized asphalt mixes. This technology supports tire recycling and waste reduction, although market adoption remains limited.", image: img18.src },
            { id: "e16", description: "To reduce fuel consumption, we fully sealed unwanted air inlets along the drum.", image: img19.src },
        ],
    },
    {
        id: "d10",
        date: "2019",
        label: "2019",
        events: [{ id: "e17", description: "We developed in-house control software for optimized plant operation, programmed using Siemens TIA Portal with a LabVIEW-based operator interface.", image: img20.src }]
    },
    {
        id: "d11",
        date: "2021",
        label: "2021",
        events: [{ id: "e18", description: "We discontinued the Basic and Plus models and shifted to a modular, menu-based configuration system with individually priced components, allowing clients to define their plant according to budget and requirements.", image: img21.src }]
    },
    {
        id: "d12",
        date: "2022",
        label: "2022",
        events: [{ id: "e19", description: "We continued expanding this options menu to address specific applications, including galvanized plants for coastal installations, variable-speed drum rotation, and asphalt tanks with auxiliary supply directly to the drum.", image: img22.src }]
    },
    {
        id: "d13",
        date: "2023",
        label: "2023",
        events: [{ id: "e20", description: "We upsized key components to maintain production capacity when aggregate moisture is 3% instead of 5%.", image: img23.src }]
    }, 
    {
        id: "d14",
        date: "2024",
        label: "2024",
        events: [{ id: "e21", description: "We increased baghouse sizing to meet U.S. standards of 175 ACFM per ton of production.", image: img24.src }]
    },    

    {
        id: "d15",
        date: "2025",
        label: "2025",
        events:[{
            id:"e22",
            title:"We introduced our newest burner:",
            description: "Plasma-assisted fuel ionization for more efficient and cleaner combustion, self regulating excess oxygen, for no manual fuel carburization adjustment, burner muffler for silent operation for strict low-noise, reducing burner noise.",
            image: img25.src
        },
        {
         id: "e23", description: "Supersonic nozzles in the baghouse enable a high air-to-cloth ratio of 8:1.", image: img29.src
        },
        {
            id:"e24", description:"We upgraded the exhaust fan to reduce noise by implementing a more aerodynamic blade design for strict low-noise requirements.", image: img26.src
        },
        {
            id:"e25", description:"RAP system modifications for up to 50% incorporation capacity.", image: img27.src
        },
        {
            id:"e26", description:"Incorporation of aerodynamic blades that reduce exhaust system noise, allowing the asphalt plant to operate in urban areas or locations with strict noise regulations."
        },
        {
            id:"e27", description:"Variable-Speed Rotation Drives for Drum Rotation Systems for total control of heat exposure time inside the drum, for higher RAP incorporation or other mix design compliance.", image: img28.src
        },
        {
            id:"e28",
            title:"Triaso Relief, new control & supervision system.",
            description:"Offering a practical and efficient way to manage industrial equipment operations. With advanced monitoring and automation, it simplifies the control of key processes like temperature, material dosing, and production rates. Built to adapt to different setups, it ensures reliable performance while prioritizing safety and ease of use.",
            image: img30.src
        },
        {
            id:"e29",
            description:"Currently, our plants consume less fuel than the best plants in the competition. The quality of our asphaltic mix is also among the best, and it is homogeneous throughout the day, no matter the production rate (tph). Additionally, we comply with environmental regulations against pollution. Our counterflow plant with baghouses can work in zones with the highest environmental regulations."
        }
    ]
    }

];