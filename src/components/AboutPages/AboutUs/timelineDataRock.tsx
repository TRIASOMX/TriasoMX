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
export const timelineDataRock: TimelineDate[] = [
    {
        id: "d1",
        date: "2009",
        label: "2009",
        events: [
            { id: "e1", description: "Crusher No. 24 was our first fully original crusher design." , image:"https://placehold.co/600x400/png" },
        ],
    },
    {
        id: "d2",
        date: "2010",
        label: "2010",
        events: [
            { id: "e2", description: "We aligned our conveyor belt manufacturing with the CEMA Sixth Edition standards.", image:"https://placehold.co/600x400/png" },
        ],
    },
    {
        id: "d3",
        date: "2012",
        label: "2012",
        events: [
            { id: "e3", description: "We began in-house fabrication of our jaw and cone crushers.", image:"https://placehold.co/600x400/png" },
        ],
    },
    {
        id: "d4",
        date: "2015",
        label: "2015",
        events: [
            { id: "e4", description: "We aligned our conveyor belt manufacturing with the CEMA Seventh Edition standards and redesigned the mounting chassis to improve resistance to vibration fatigue.", image:"https://placehold.co/600x400/png" },
        ],
    },
    {
        id: "d5",
        date: "2016",
        label: "2016",
        events: [
            { id: "e5", description: "We upgraded our screen vibration systems to improve performance when handling difficult materials.", image:"https://placehold.co/600x400/png" },

        ],
    },
    {
        id: "d6",
        date: "2017",
        label: "2017",
        events: [
            { id: "e6", description: "We changed our horizontal screens for inclined ones for better adaptation and greater material diversity.", image:"https://placehold.co/600x400/png" },
        ],
    },

    {
        id: "d7",
        date: "2021",
        label: "2021",
        events: [
            { id: "e7", description: "We introduced our horizontal impact crushers in response to client demand.", image:"https://placehold.co/600x400/png" },
        ],
    },

    {
        id: "d8",
        date: "2022",
        label: "2022",
        events: [
            { id: "e8", description: "We introduced our vertical impact crushers to complete the product line.", image:"https://placehold.co/600x400/png" },
        ],
    },

    {
        id: "d9",
        date: "2023",
        label: "2023",
        events: [
            { id: "e9", description: "We introduced our ball mills, targeting mining and diverse materials processing applications.", image:"https://placehold.co/600x400/png" },
            { id: "e10", description: "We also launched our HP Series cone crushers.", image:"https://placehold.co/600x400/png" },
        ],
    },  

];