export type Driver = {
    name: string
    number: number
    nationality: string
    image: string
    championships: number
    wins: number
    podiums: number
}
export type Team = {
    id: string
    name: string
    logo: string
    car: string
    points: number
    position: number
    color: string
    drivers: Driver[]
    teamPrincipal: string
    teamPrincipalImage?: string
    championships: number
    firstEntry: number
    headquarters: string
    powerUnit: string
    history: string
    records: string[]
    trophies: string[]
    teamUrl: string // New field added
}

export const teams: Team[] = [
    {
        id: "mclaren",
        name: "McLaren F1 Team",
        logo: "/teams/mclaren.png",
        car: "/cars/mclaren-car.jpg",
        points: 666,
        position: 1,
        color: "#FF8700",
        drivers: [
            {
                name: "Lando Norris",
                number: 4,
                nationality: "British",
                image: "/drivers/lando.avif",
                championships: 0,
                wins: 4,
                podiums: 18,
            },
            {
                name: "Oscar Piastri",
                number: 81,
                nationality: "Australian",
                image: "/drivers/oscar.avif",
                championships: 0,
                wins: 2,
                podiums: 8,
            },
        ],
        teamPrincipal: "Andrea Stella",
        teamPrincipalImage: "/principals/andrea-stella.png",
        championships: 9,
        firstEntry: 1966,
        headquarters: "Woking, United Kingdom",
        powerUnit: "Mercedes",
        history:
            "McLaren Racing is one of Formula One's most iconic teams, founded by New Zealand driver Bruce McLaren in 1966. The team has been home to legendary drivers like Ayrton Senna, Alain Prost, and Lewis Hamilton, and is known for its technical innovation and racing excellence.",
        records: [
            "Most consecutive race wins (11 in 1988)",
            "Most 1-2 finishes in a season (10 in 1988)",
            "Highest percentage of laps led in a season (97.5% in 1988)",
        ],
        trophies: [
            "Constructors' Championships: 1974, 1984, 1985, 1988, 1989, 1990, 1991, 1998",
            "Drivers' Championships: 1974, 1976, 1984, 1985, 1986, 1988, 1989, 1990, 1991, 1998, 1999, 2008",
        ],
        teamUrl: "https://www.mclaren.com/racing/",
    },

    {
        id: "ferrari",
        name: "Scuderia Ferrari",
        logo: "/teams/ferrari.png",
        car: "/cars/ferrari-car.jpg",
        points: 652,
        position: 2,
        color: "#008cd1",
        drivers: [
            {
                name: "Charles Leclerc",
                number: 16,
                nationality: "Monegasque",
                image: "/drivers/charles.avif",
                championships: 0,
                wins: 3,
                podiums: 30,
            },
            {
                name: "Carlos Sainz",
                number: 55,
                nationality: "Spanish",
                image: "/drivers/carlos.avif",
                championships: 0,
                wins: 3,
                podiums: 20,
            },
        ],
        teamPrincipal: "Frédéric Vasseur",
        teamPrincipalImage: "/principals/fred-vasseur.png",
        championships: 16,
        firstEntry: 1950,
        headquarters: "Maranello, Italy",
        powerUnit: "Ferrari",
        history:
            "Scuderia Ferrari is the oldest and most successful team in Formula One history. Founded by Enzo Ferrari, the team has been competing in the championship since its inception in 1950 and has become synonymous with the sport itself.",
        records: ["Most Constructors' Championships (16)", "Most Drivers' Championships (15)", "Most race victories (243)"],
        trophies: [
            "Constructors' Championships: 1961, 1964, 1975, 1976, 1977, 1979, 1982, 1983, 1999, 2000, 2001, 2002, 2003, 2004, 2007, 2008",
            "Drivers' Championships: 1952, 1953, 1956, 1958, 1961, 1964, 1975, 1977, 1979, 2000, 2001, 2002, 2003, 2004, 2007",
        ],
        teamUrl: "https://www.ferrari.com/en-EN/formula1",
    },
    {
        id: "red-bull",
        name: "Red Bull Racing Honda RBPT",
        logo: "/teams/red-bull.png",
        car: "/cars/rb20.jpg",
        points: 589,
        position: 3,
        color: "#ffc906",
        drivers: [
            {
                name: "Max Verstappen",
                number: 1,
                nationality: "Dutch",
                image: "/drivers/max.avif",
                championships: 4,
                wins: 59,
                podiums: 102,
            },
            {
                name: "Sergio Perez",
                number: 11,
                nationality: "Mexican",
                image: "/drivers/perez.png",
                championships: 0,
                wins: 6,
                podiums: 35,
            },
        ],
        teamPrincipal: "Christian Horner",
        teamPrincipalImage: "/principals/christian-horner.png",
        championships: 6,
        firstEntry: 2005,
        headquarters: "Milton Keynes, United Kingdom",
        powerUnit: "Honda RBPT",
        history:
            "Red Bull Racing, one of Formula One's most successful teams in recent years, entered the sport in 2005 after acquiring the Jaguar Racing team. Under the leadership of Christian Horner, the team has become known for its aggressive development strategy and innovative designs, particularly during the Adrian Newey era.",
        records: [
            "Most wins in a single season (21 in 2023)",
            "Highest win percentage in a season (95.5% in 2023)",
            "Youngest World Champion (Sebastian Vettel, 2010)",
        ],
        trophies: [
            "Constructors' Championships: 2010, 2011, 2012, 2013, 2022, 2023",
            "Drivers' Championships: 2010, 2011, 2012, 2013, 2021, 2022, 2023",
        ],
        teamUrl: "https://www.redbullracing.com",
    },
    {
        id: "mercedes",
        name: "Mercedes-AMG Petronas",
        logo: "/teams/amg.png",
        car: "/cars/amg-car.webp",
        points: 468,
        position: 4,
        color: "#00D2BE",
        drivers: [
            {
                name: "Lewis Hamilton",
                number: 44,
                nationality: "British",
                image: "/drivers/lewis.avif",
                championships: 7,
                wins: 103,
                podiums: 197,
            },
            {
                name: "George Russell",
                number: 63,
                nationality: "British",
                image: "/drivers/george.avif",
                championships: 0,
                wins: 2,
                podiums: 12,
            },
        ],
        teamPrincipal: "Toto Wolff",
        teamPrincipalImage: "/principals/toto-wolff.png",
        championships: 8,
        firstEntry: 2010,
        headquarters: "Brackley, United Kingdom",
        powerUnit: "Mercedes",
        history:
            "Mercedes-AMG Petronas F1 Team, in its current form, entered Formula One in 2010 after acquiring Brawn GP. Under the leadership of Toto Wolff and with Lewis Hamilton as their star driver, the team dominated the turbo-hybrid era from 2014 to 2021, setting numerous records.",
        records: [
            "Most consecutive Constructors' Championships (8 from 2014-2021)",
            "Most consecutive Drivers' Championships (7 from 2014-2020)",
            "Most pole positions in a season (20 in 2016)",
        ],
        trophies: [
            "Constructors' Championships: 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021",
            "Drivers' Championships: 1954, 1955, 2014, 2015, 2016, 2017, 2018, 2019, 2020",
        ],
        teamUrl: "https://www.mercedesamgf1.com",
    },
]

export interface NewsArticle {
    id: string
    title: string
    slug: string
    excerpt: string
    content: string
    coverImage: string
    publishedAt: string
    author: {
        name: string
        avatar?: string
    }
    relatedTeams: string[] // Array of team IDs
    tags: string[]
    featured: boolean
}

export interface NewsResponse {
    articles: NewsArticle[]
    pagination: {
        total: number
        page: number
        pageSize: number
        totalPages: number
    }
}
