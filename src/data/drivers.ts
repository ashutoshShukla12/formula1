/*
Made with ❤️ by DilpreetKaur Dhanjal
Student Number - 8669553
*/
export interface DriverStats {
  wins: number
  podiums: number
  polePositions: number
  fastestLaps: number
  championships: number
  careerPoints: number
  racesEntered: number
  firstRace: string
  firstWin?: string
}

export interface DriverTeam {
  id: string
  name: string
  logo: string
  color: string
  joinedYear: number
}

export interface Driver {
  id: string
  name: string
  number: number
  code: string
  nationality: string
  countryCode: string
  flagImage: string
  dateOfBirth: string
  placeOfBirth: string
  image: string
  helmetImage: string
  team: DriverTeam
  stats: DriverStats
  biography: string
  socialMedia: {
    twitter?: string
    instagram?: string
    facebook?: string
    website?: string
  }
}

export interface DriversResponse {
  drivers: Driver[]
}


export const drivers: Driver[] = [
  {
    id: "max-verstappen",
    name: "Max Verstappen",
    number: 1,
    code: "VER",
    nationality: "Dutch",
    countryCode: "NL",
    flagImage: "/flags/netherlands.avif",
    dateOfBirth: "1997-09-30",
    placeOfBirth: "Hasselt, Belgium",
    image: "/drivers/max.avif",
    helmetImage: "/helmets/verstappen.webp",
    team: {
      id: "red-bull",
      name: "Red Bull Racing",
      logo: "/teams/red-bull.png",
      color: "#ffc906",
      joinedYear: 2016
    },
    stats: {
      wins: 59,
      podiums: 102,
      polePositions: 39,
      fastestLaps: 30,
      championships: 4,
      careerPoints: 2586.5,
      racesEntered: 189,
      firstRace: "2015 Australian Grand Prix",
      firstWin: "2016 Spanish Grand Prix"
    },
    biography: "Max Emilian Verstappen is a Belgian-Dutch racing driver and the 2021, 2022, and 2023 Formula One World Champion. He competes under the Dutch flag in Formula One with Red Bull Racing. At the 2015 Australian Grand Prix, when he was aged 17 years, 166 days, he became the youngest driver to compete in Formula One.\n\nAfter spending the 2015 season with Scuderia Toro Rosso, he started his 2016 campaign with the Italian team before being promoted to parent team Red Bull Racing after four races as a replacement for Daniil Kvyat. At the age of 18, he won the 2016 Spanish Grand Prix on his debut for Red Bull Racing, becoming the youngest-ever driver and the first Dutch driver to win a Formula One Grand Prix.\n\nAfter winning the 2021 Abu Dhabi Grand Prix, Verstappen became the first Dutch driver to win the Formula One World Championship, and the 34th Formula One World Drivers' Champion. He followed this up by defending his title with a dominant performance in 2022, winning a record 15 races in a single season. In 2023, he broke the record for most consecutive race wins in a season with 10 consecutive wins.",
    socialMedia: {
      twitter: "https://twitter.com/Max33Verstappen",
      instagram: "https://www.instagram.com/maxverstappen1/",
      facebook: "https://www.facebook.com/MaxVerstappen/",
      website: "https://www.verstappen.com/"
    }
  },
  {
    id: "lewis-hamilton",
    name: "Lewis Hamilton",
    number: 44,
    code: "HAM",
    nationality: "British",
    countryCode: "GB",
    flagImage: "/flags/uk.png",
    dateOfBirth: "1985-01-07",
    placeOfBirth: "Stevenage, United Kingdom",
    image: "/drivers/lewis.avif",
    helmetImage: "/helmets/hamilton.webp",
    team: {
      id: "mercedes",
      name: "Mercedes-AMG Petronas",
      logo: "/teams/amg.png",
      color: "#00D2BE",
      joinedYear: 2013
    },
    stats: {
      wins: 103,
      podiums: 197,
      polePositions: 104,
      fastestLaps: 62,
      championships: 7,
      careerPoints: 4639.5,
      racesEntered: 332,
      firstRace: "2007 Australian Grand Prix",
      firstWin: "2007 Canadian Grand Prix"
    },
    biography: "Sir Lewis Carl Davidson Hamilton is a British racing driver currently competing in Formula One, driving for Mercedes-AMG Petronas Formula One Team. In Formula One, Hamilton has won a joint-record seven World Drivers' Championship titles (tied with Michael Schumacher), and holds the records for the most wins (103), pole positions (104), and podium finishes (197), among others.\n\nBorn and raised in Stevenage, Hertfordshire, Hamilton was signed to the McLaren young driver programme in 1998. This later resulted in a Formula One drive with McLaren from 2007 to 2012, making Hamilton the first black driver to race in the series. In his inaugural season, Hamilton set numerous records as he finished runner-up to Kimi Räikkönen by one point. The following season, he won his maiden title in dramatic fashion—making a crucial overtake on the last lap of the last race of the season—to become the then-youngest Formula One World Champion in history.\n\nAfter six years with McLaren, Hamilton signed with Mercedes in 2013. Changes to the regulations for 2014 mandating the use of turbo-hybrid engines came at the start of a highly successful period for Hamilton, during which he won six further drivers' titles from 2014 to 2020. Hamilton won consecutive titles from 2014 to 2015 and from 2017 to 2020.",
    socialMedia: {
      twitter: "https://twitter.com/LewisHamilton",
      instagram: "https://www.instagram.com/lewishamilton/",
      facebook: "https://www.facebook.com/LewisHamilton/",
      website: "https://www.lewishamilton.com/"
    }
  },
  {
    id: "charles-leclerc",
    name: "Charles Leclerc",
    number: 16,
    code: "LEC",
    nationality: "Monegasque",
    countryCode: "MC",
    flagImage: "/flags/monaco.png",
    dateOfBirth: "1997-10-16",
    placeOfBirth: "Monte Carlo, Monaco",
    image: "/drivers/charles.avif",
    helmetImage: "/helmets/leclerc.jpeg",
    team: {
      id: "ferrari",
      name: "Scuderia Ferrari",
      logo: "/teams/ferrari.png",
      color: "#008cd1",
      joinedYear: 2019
    },
    stats: {
      wins: 3,
      podiums: 30,
      polePositions: 23,
      fastestLaps: 7,
      championships: 0,
      careerPoints: 1034,
      racesEntered: 131,
      firstRace: "2018 Australian Grand Prix",
      firstWin: "2019 Belgian Grand Prix"
    },
    biography: "Charles Leclerc is a Monégasque racing driver, currently racing in Formula One for Scuderia Ferrari. Leclerc won the GP3 Series championship in 2016 and the FIA Formula 2 Championship in 2017. He made his Formula One debut in 2018 for Sauber, a team affiliated with Ferrari, for which he was part of the Ferrari Driver Academy. With Sauber having finished last the year before, Leclerc led the charge to improve the finishing position in the constructors' championship to eighth, being the higher-scoring driver.\n\nIn his first season with Ferrari, Leclerc took his first career win in Belgium, followed by winning his first Italian Grand Prix as a Ferrari driver the week after. He won the Pole Trophy in the 2019 season becoming the youngest driver ever and the first non-Mercedes driver to win it since the trophy's inception in 2014.\n\nLeclerc is often regarded as one of the most talented drivers of his generation. He is widely recognized for his speed over a single lap, as evidenced by his impressive qualifying performances and pole positions. His aggressive yet calculated driving style, combined with his ability to extract the maximum from his car, has earned him praise from peers and pundits alike.",
    socialMedia: {
      twitter: "https://twitter.com/Charles_Leclerc",
      instagram: "https://www.instagram.com/charles_leclerc/",
      facebook: "https://www.facebook.com/CharlesLeclercOfficiel/",
      website: "https://www.charlesleclerc.com/"
    }
  },
  {
    id: "lando-norris",
    name: "Lando Norris",
    number: 4,
    code: "NOR",
    nationality: "British",
    countryCode: "GB",
    flagImage: "/flags/uk.png",
    dateOfBirth: "1999-11-13",
    placeOfBirth: "Bristol, United Kingdom",
    image: "/drivers/lando.avif",
    helmetImage: "/helmets/norris.webp",
    team: {
      id: "mclaren",
      name: "McLaren F1 Team",
      logo: "/teams/mclaren.png",
      color: "#FF8700",
      joinedYear: 2019
    },
    stats: {
      wins: 4,
      podiums: 18,
      polePositions: 3,
      fastestLaps: 8,
      championships: 0,
      careerPoints: 696,
      racesEntered: 131,
      firstRace: "2019 Australian Grand Prix",
      firstWin: "2023 Miami Grand Prix"
    },
    biography: "Lando Norris is a British-Belgian racing driver currently competing in Formula One with McLaren, racing under the British flag. He won the MSA Formula championship in 2015, and the Toyota Racing Series, Eurocup Formula Renault 2.0 and Formula Renault 2.0 Northern European Cup in 2016. He also received the McLaren Autosport BRDC Award that year. He subsequently won the 2017 FIA Formula 3 European Championship. He was a member of the McLaren Young Driver Programme.\n\nIn 2018, he finished second in the 2018 FIA Formula 2 Championship, driving for Carlin Motorsport. He joined McLaren as a test and reserve driver in 2017 and 2018, before being promoted to a full-time race seat for the 2019 Formula One World Championship. He achieved his first Formula One podium at the 2020 Austrian Grand Prix and his first pole position at the 2021 Russian Grand Prix.\n\nNorris is known for his engaging personality and strong social media presence, which has helped him build a large fan base. His streaming activities on platforms like Twitch have made him particularly popular among younger Formula One fans. On track, he is recognized for his smooth driving style, consistency, and strong qualifying performances.",
    socialMedia: {
      twitter: "https://twitter.com/LandoNorris",
      instagram: "https://www.instagram.com/landonorris/",
      facebook: "https://www.facebook.com/landonorris/",
      website: "https://www.landonorris.com/"
    }
  },
  {
    id: "george-russell",
    name: "George Russell",
    number: 63,
    code: "RUS",
    nationality: "British",
    countryCode: "GB",
    flagImage: "/flags/uk.png",
    dateOfBirth: "1998-02-15",
    placeOfBirth: "King's Lynn, United Kingdom",
    image: "/drivers/george.avif",
    helmetImage: "/helmets/russel.webp",
    team: {
      id: "mercedes",
      name: "Mercedes-AMG Petronas",
      logo: "/teams/amg.png",
      color: "#00D2BE",
      joinedYear: 2022
    },
    stats: {
      wins: 2,
      podiums: 12,
      polePositions: 3,
      fastestLaps: 6,
      championships: 0,
      careerPoints: 452,
      racesEntered: 112,
      firstRace: "2019 Australian Grand Prix",
      firstWin: "2022 São Paulo Grand Prix"
    },
    biography: "George Russell is a British racing driver currently competing in Formula One for Mercedes. Russell previously drove for Williams from 2019 to 2021. Prior to his Formula One career, he achieved success in junior categories, winning the GP3 Series championship in 2017 and the Formula 2 championship in 2018.\n\nRussell was part of the Mercedes junior driver programme since 2017. He made a one-off appearance for Mercedes at the 2020 Sakhir Grand Prix, replacing Lewis Hamilton who was unable to compete due to COVID-19. Russell impressed on his Mercedes debut, qualifying second and leading most of the race before a pit stop error and puncture relegated him to ninth place.\n\nAfter three years at Williams, Russell joined Mercedes as a full-time driver for the 2022 season, partnering seven-time World Champion Lewis Hamilton. He achieved his first Formula One victory at the 2022 São Paulo Grand Prix.\n\nRussell is known for his exceptional qualifying performances, particularly during his time at Williams where he regularly outperformed the car's capabilities. His technical feedback and consistency have earned him the nickname 'Mr. Saturday' for his ability to extract maximum performance in qualifying sessions.",
    socialMedia: {
      twitter: "https://twitter.com/GeorgeRussell63",
      instagram: "https://www.instagram.com/georgerussell63/",
      facebook: "https://www.facebook.com/GeorgeRussellRacing/",
      website: "https://www.georgerussellracing.com/"
    }
  },
  {
    id: "carlos-sainz",
    name: "Carlos Sainz",
    number: 55,
    code: "SAI",
    nationality: "Spanish",
    countryCode: "ES",
    flagImage: "/flags/spain.avif",
    dateOfBirth: "1994-09-01",
    placeOfBirth: "Madrid, Spain",
    image: "/drivers/carlos.avif",
    helmetImage: "/helmets/sainz.webp",
    team: {
      id: "ferrari",
      name: "Scuderia Ferrari",
      logo: "/teams/ferrari.png",
      color: "#008cd1",
      joinedYear: 2021
    },
    stats: {
      wins: 3,
      podiums: 20,
      polePositions: 5,
      fastestLaps: 3,
      championships: 0,
      careerPoints: 1048.5,
      racesEntered: 189,
      firstRace: "2015 Australian Grand Prix",
      firstWin: "2022 British Grand Prix"
    },
    biography: "Carlos Sainz Jr. is a Spanish racing driver currently competing in Formula One for Scuderia Ferrari. He is the son of Carlos Sainz, a two-time World Rally Champion. Before his Formula One career, Sainz won the Formula Renault 3.5 Series in 2014.\n\nSainz made his Formula One debut with Toro Rosso in 2015. In 2017, he moved to Renault for the final four races of the season and continued with the team for 2018. He then drove for McLaren in 2019 and 2020, achieving his first podium finish at the 2019 Brazilian Grand Prix and his best championship finish of sixth in 2020.\n\nIn 2021, Sainz joined Ferrari alongside Charles Leclerc. He achieved his first Formula One victory at the 2022 British Grand Prix and followed it up with wins at the 2023 Singapore Grand Prix and the 2024 Australian Grand Prix.\n\nSainz is known for his consistency, adaptability, and strong race craft. He has demonstrated an ability to quickly adapt to different teams and cars throughout his career, consistently delivering strong performances regardless of the machinery at his disposal. His technical feedback and tire management skills are particularly noted within the paddock.",
    socialMedia: {
      twitter: "https://twitter.com/Carlossainz55",
      instagram: "https://www.instagram.com/carlossainz55/",
      facebook: "https://www.facebook.com/CarlosSainzOficial/",
      website: "https://www.carlossainz.es/"
    }
  },
  {
    id: "sergio-perez",
    name: "Sergio Perez",
    number: 11,
    code: "PER",
    nationality: "Mexican",
    countryCode: "MX",
    flagImage: "/flags/mexico.avif",
    dateOfBirth: "1990-01-26",
    placeOfBirth: "Guadalajara, Mexico",
    image: "/drivers/perez.png",
    helmetImage: "/helmets/perez.jpg",
    team: {
      id: "red-bull",
      name: "Red Bull Racing",
      logo: "/teams/red-bull.png",
      color: "#ffc906",
      joinedYear: 2021
    },
    stats: {
      wins: 6,
      podiums: 35,
      polePositions: 3,
      fastestLaps: 10,
      championships: 0,
      careerPoints: 1380,
      racesEntered: 259,
      firstRace: "2011 Australian Grand Prix",
      firstWin: "2020 Sakhir Grand Prix"
    },
    biography: "Sergio 'Checo' Pérez is a Mexican racing driver currently driving for Red Bull Racing in Formula One. He made his Formula One debut with Sauber during the 2011 season and took his first Formula One podium at the 2012 Malaysian Grand Prix. He drove for McLaren for one season in 2013, before moving to Force India (later Racing Point) from 2014 to 2020.\n\nIn 2020, at the Sakhir Grand Prix, Pérez claimed his first Formula One victory, becoming the first Mexican driver to win a Formula One race since Pedro Rodríguez in 1970. Following his win and strong performances throughout the 2020 season, he was signed by Red Bull Racing for 2021.\n\nAt Red Bull, Pérez has played a crucial supporting role to teammate Max Verstappen while also achieving race victories of his own, including wins at the Azerbaijan Grand Prix in 2021 and 2023, and the Monaco Grand Prix in 2022.\n\nPérez is known for his exceptional tire management skills, often executing alternative strategies to gain positions. His defensive driving abilities have earned him the nickname 'Minister of Defense,' particularly after his crucial role in holding up Lewis Hamilton at the 2021 Abu Dhabi Grand Prix, which helped Verstappen secure his first World Championship.",
    socialMedia: {
      twitter: "https://twitter.com/SChecoPerez",
      instagram: "https://www.instagram.com/schecoperez/",
      facebook: "https://www.facebook.com/SChecoPerez/",
      website: "https://www.sergioperez.mx/"
    }
  },
  {
    id: "oscar-piastri",
    name: "Oscar Piastri",
    number: 81,
    code: "PIA",
    nationality: "Australian",
    countryCode: "AU",
    flagImage: "/flags/australia.png",
    dateOfBirth: "2001-04-06",
    placeOfBirth: "Melbourne, Australia",
    image: "/drivers/oscar.avif",
    helmetImage: "/helmets/piastri.jpg",
    team: {
      id: "mclaren",
      name: "McLaren F1 Team",
      logo: "/teams/mclaren.png",
      color: "#FF8700",
      joinedYear: 2023
    },
    stats: {
      wins: 2,
      podiums: 8,
      polePositions: 1,
      fastestLaps: 2,
      championships: 0,
      careerPoints: 212,
      racesEntered: 47,
      firstRace: "2023 Bahrain Grand Prix",
      firstWin: "2023 Qatar Grand Prix"
    },
    biography: "Oscar Piastri is an Australian racing driver currently competing in Formula One for McLaren. Before his Formula One career, Piastri achieved remarkable success in junior categories, winning the Formula Renault Eurocup in 2019, the FIA Formula 3 Championship in 2020, and the Formula 2 Championship in 2021, all in consecutive years and as a rookie.\n\nDespite his impressive junior career, Piastri spent 2022 as Alpine's reserve driver without a race seat. After a contractual dispute between Alpine and McLaren, Piastri was confirmed as a McLaren driver for the 2023 season alongside Lando Norris.\n\nIn his rookie Formula One season, Piastri impressed with his maturity and pace, securing his first podium at the 2023 Japanese Grand Prix and his first win at the 2023 Qatar Sprint. He followed this with a full Grand Prix victory at the 2024 Hungarian Grand Prix.\n\nPiastri is known for his calm demeanor, technical understanding, and adaptability. His smooth driving style and ability to quickly learn new circuits have drawn comparisons to some of the sport's greats. Despite his youth, he has demonstrated remarkable composure under pressure and a mature approach to racing.",
    socialMedia: {
      twitter: "https://twitter.com/OscarPiastri",
      instagram: "https://www.instagram.com/oscarpiastri/",
      facebook: "https://www.facebook.com/OscarPiastri/",
      website: "https://www.oscarpiastri.com/"
    }
  }
]
