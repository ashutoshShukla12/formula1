import type { Race, CalendarResponse } from "@/types/calendar"

export const races: Race[] = [
  {
    id: "bahrain",
    name: "Bahrain Grand Prix",
    round: 1,
    circuitName: "Bahrain International Circuit",
    circuitImage: "/circuits/bahrain.jpg",
    location: {
      city: "Sakhir",
      country: "Bahrain",
      countryCode: "BH",
      flagImage: "/flags/bahrain.png",
    },
    date: "2024-03-02",
    time: "16:00",
    status: "completed",
    practices: [
      {
        name: "Practice 1",
        date: "2024-03-01",
        time: "12:30",
      },
      {
        name: "Practice 2",
        date: "2024-03-01",
        time: "16:00",
      },
      {
        name: "Practice 3",
        date: "2024-03-02",
        time: "13:30",
      },
    ],
    qualifying: {
      date: "2024-03-01",
      time: "17:00",
    },
    results: [
      {
        position: 1,
        driver: "Max Verstappen",
        team: "Red Bull Racing",
        points: 25,
        time: "1:31:44.742",
      },
      {
        position: 2,
        driver: "Sergio Perez",
        team: "Red Bull Racing",
        points: 18,
        time: "+2.223s",
      },
      {
        position: 3,
        driver: "Carlos Sainz",
        team: "Ferrari",
        points: 15,
        time: "+2.987s",
      },
    ],
    trackLength: 5.412,
    laps: 57,
    lapRecord: {
      time: "1:31.447",
      driver: "Pedro de la Rosa",
      year: 2005,
    },
    firstGrandPrix: 2004,
    trackMap: "/tracks/bahrain.avif",
  },
  {
    id: "saudi-arabia",
    name: "Saudi Arabian Grand Prix",
    round: 2,
    circuitName: "Jeddah Corniche Circuit",
    circuitImage: "/circuits/jeddah.jpg",
    location: {
      city: "Jeddah",
      country: "Saudi Arabia",
      countryCode: "SA",
      flagImage: "/flags/saudi-arabia.png",
    },
    date: "2024-03-09",
    time: "18:00",
    status: "completed",
    practices: [
      {
        name: "Practice 1",
        date: "2024-03-08",
        time: "14:30",
      },
      {
        name: "Practice 2",
        date: "2024-03-08",
        time: "18:00",
      },
      {
        name: "Practice 3",
        date: "2024-03-09",
        time: "14:30",
      },
    ],
    qualifying: {
      date: "2024-03-08",
      time: "18:00",
    },
    results: [
      {
        position: 1,
        driver: "Max Verstappen",
        team: "Red Bull Racing",
        points: 25,
        time: "1:20:43.273",
      },
      {
        position: 2,
        driver: "Charles Leclerc",
        team: "Ferrari",
        points: 18,
        time: "+13.643s",
      },
      {
        position: 3,
        driver: "Sergio Perez",
        team: "Red Bull Racing",
        points: 15,
        time: "+18.639s",
      },
    ],
    trackLength: 6.174,
    laps: 50,
    lapRecord: {
      time: "1:30.734",
      driver: "Lewis Hamilton",
      year: 2021,
    },
    firstGrandPrix: 2021,
    trackMap: "/tracks/jeddah.svg",
  },
  {
    id: "australia",
    name: "Australian Grand Prix",
    round: 3,
    circuitName: "Albert Park Circuit",
    circuitImage: "/circuits/melbourne.jpg",
    location: {
      city: "Melbourne",
      country: "Australia",
      countryCode: "AU",
      flagImage: "/flags/australia.png",
    },
    date: "2024-03-24",
    time: "05:00",
    status: "completed",
    practices: [
      {
        name: "Practice 1",
        date: "2024-03-22",
        time: "01:30",
      },
      {
        name: "Practice 2",
        date: "2024-03-22",
        time: "05:00",
      },
      {
        name: "Practice 3",
        date: "2024-03-23",
        time: "01:30",
      },
    ],
    qualifying: {
      date: "2024-03-23",
      time: "05:00",
    },
    results: [
      {
        position: 1,
        driver: "Carlos Sainz",
        team: "Ferrari",
        points: 25,
        time: "1:22:15.212",
      },
      {
        position: 2,
        driver: "Charles Leclerc",
        team: "Ferrari",
        points: 18,
        time: "+2.366s",
      },
      {
        position: 3,
        driver: "Lando Norris",
        team: "McLaren",
        points: 15,
        time: "+5.504s",
      },
    ],
    trackLength: 5.278,
    laps: 58,
    lapRecord: {
      time: "1:20.235",
      driver: "Charles Leclerc",
      year: 2022,
    },
    firstGrandPrix: 1996,
    trackMap: "/tracks/melbourne.svg",
  },
  {
    id: "japan",
    name: "Japanese Grand Prix",
    round: 4,
    circuitName: "Suzuka International Racing Course",
    circuitImage: "/circuits/suzuka.jpg",
    location: {
      city: "Suzuka",
      country: "Japan",
      countryCode: "JP",
      flagImage: "/flags/japan.png",
    },
    date: "2024-04-07",
    time: "07:00",
    status: "completed",
    practices: [
      {
        name: "Practice 1",
        date: "2024-04-05",
        time: "03:30",
      },
      {
        name: "Practice 2",
        date: "2024-04-05",
        time: "07:00",
      },
      {
        name: "Practice 3",
        date: "2024-04-06",
        time: "03:30",
      },
    ],
    qualifying: {
      date: "2024-04-06",
      time: "07:00",
    },
    results: [
      {
        position: 1,
        driver: "Max Verstappen",
        team: "Red Bull Racing",
        points: 25,
        time: "1:30:58.421",
      },
      {
        position: 2,
        driver: "Sergio Perez",
        team: "Red Bull Racing",
        points: 18,
        time: "+12.535s",
      },
      {
        position: 3,
        driver: "Carlos Sainz",
        team: "Ferrari",
        points: 15,
        time: "+20.866s",
      },
    ],
    trackLength: 5.807,
    laps: 53,
    lapRecord: {
      time: "1:30.983",
      driver: "Lewis Hamilton",
      year: 2019,
    },
    firstGrandPrix: 1987,
    trackMap: "/tracks/suzuka.svg",
  },
  {
    id: "china",
    name: "Chinese Grand Prix",
    round: 5,
    circuitName: "Shanghai International Circuit",
    circuitImage: "/circuits/shanghai.jpg",
    location: {
      city: "Shanghai",
      country: "China",
      countryCode: "CN",
      flagImage: "/flags/china.png",
    },
    date: "2024-04-21",
    time: "08:00",
    status: "completed",
    practices: [
      {
        name: "Practice 1",
        date: "2024-04-19",
        time: "05:30",
      },
      {
        name: "Practice 2",
        date: "2024-04-19",
        time: "09:00",
      },
      {
        name: "Practice 3",
        date: "2024-04-20",
        time: "05:30",
      },
    ],
    qualifying: {
      date: "2024-04-20",
      time: "09:00",
    },
    sprint: {
      date: "2024-04-20",
      time: "05:00",
      results: [
        {
          position: 1,
          driver: "Max Verstappen",
          team: "Red Bull Racing",
          points: 8,
          time: "30:38.192",
        },
        {
          position: 2,
          driver: "Lewis Hamilton",
          team: "Mercedes",
          points: 7,
          time: "+13.773s",
        },
        {
          position: 3,
          driver: "Sergio Perez",
          team: "Red Bull Racing",
          points: 6,
          time: "+15.961s",
        },
      ],
    },
    results: [
      {
        position: 1,
        driver: "Max Verstappen",
        team: "Red Bull Racing",
        points: 25,
        time: "1:40:52.554",
      },
      {
        position: 2,
        driver: "Lando Norris",
        team: "McLaren",
        points: 18,
        time: "+13.773s",
      },
      {
        position: 3,
        driver: "Sergio Perez",
        team: "Red Bull Racing",
        points: 15,
        time: "+19.160s",
      },
    ],
    trackLength: 5.451,
    laps: 56,
    lapRecord: {
      time: "1:32.238",
      driver: "Michael Schumacher",
      year: 2004,
    },
    firstGrandPrix: 2004,
    trackMap: "/tracks/shanghai.svg",
  },
  {
    id: "miami",
    name: "Miami Grand Prix",
    round: 6,
    circuitName: "Miami International Autodrome",
    circuitImage: "/circuits/miami.jpg",
    location: {
      city: "Miami",
      country: "United States",
      countryCode: "US",
      flagImage: "/flags/usa.png",
    },
    date: "2024-05-05",
    time: "21:00",
    status: "completed",
    practices: [
      {
        name: "Practice 1",
        date: "2024-05-03",
        time: "18:30",
      },
      {
        name: "Practice 2",
        date: "2024-05-03",
        time: "22:00",
      },
      {
        name: "Practice 3",
        date: "2024-05-04",
        time: "18:30",
      },
    ],
    qualifying: {
      date: "2024-05-04",
      time: "22:00",
    },
    sprint: {
      date: "2024-05-04",
      time: "18:00",
      results: [
        {
          position: 1,
          driver: "Max Verstappen",
          team: "Red Bull Racing",
          points: 8,
          time: "30:52.219",
        },
        {
          position: 2,
          driver: "Charles Leclerc",
          team: "Ferrari",
          points: 7,
          time: "+3.371s",
        },
        {
          position: 3,
          driver: "Sergio Perez",
          team: "Red Bull Racing",
          points: 6,
          time: "+5.095s",
        },
      ],
    },
    results: [
      {
        position: 1,
        driver: "Lando Norris",
        team: "McLaren",
        points: 25,
        time: "1:30:49.876",
      },
      {
        position: 2,
        driver: "Max Verstappen",
        team: "Red Bull Racing",
        points: 18,
        time: "+7.612s",
      },
      {
        position: 3,
        driver: "Charles Leclerc",
        team: "Ferrari",
        points: 15,
        time: "+9.920s",
      },
    ],
    trackLength: 5.412,
    laps: 57,
    lapRecord: {
      time: "1:29.708",
      driver: "Max Verstappen",
      year: 2023,
    },
    firstGrandPrix: 2022,
    trackMap: "/tracks/miami.svg",
  },
  {
    id: "emilia-romagna",
    name: "Emilia Romagna Grand Prix",
    round: 7,
    circuitName: "Autodromo Enzo e Dino Ferrari",
    circuitImage: "/circuits/imola.jpg",
    location: {
      city: "Imola",
      country: "Italy",
      countryCode: "IT",
      flagImage: "/flags/italy.png",
    },
    date: "2024-05-19",
    time: "15:00",
    status: "completed",
    practices: [
      {
        name: "Practice 1",
        date: "2024-05-17",
        time: "13:30",
      },
      {
        name: "Practice 2",
        date: "2024-05-17",
        time: "17:00",
      },
      {
        name: "Practice 3",
        date: "2024-05-18",
        time: "12:30",
      },
    ],
    qualifying: {
      date: "2024-05-18",
      time: "16:00",
    },
    results: [
      {
        position: 1,
        driver: "Max Verstappen",
        team: "Red Bull Racing",
        points: 25,
        time: "1:25:25.252",
      },
      {
        position: 2,
        driver: "Lando Norris",
        team: "McLaren",
        points: 18,
        time: "+0.725s",
      },
      {
        position: 3,
        driver: "Charles Leclerc",
        team: "Ferrari",
        points: 15,
        time: "+7.916s",
      },
    ],
    trackLength: 4.909,
    laps: 63,
    lapRecord: {
      time: "1:15.484",
      driver: "Lewis Hamilton",
      year: 2020,
    },
    firstGrandPrix: 1980,
    trackMap: "/tracks/imola.svg",
  },
  {
    id: "monaco",
    name: "Monaco Grand Prix",
    round: 8,
    circuitName: "Circuit de Monaco",
    circuitImage: "/circuits/monaco.jpg",
    location: {
      city: "Monte Carlo",
      country: "Monaco",
      countryCode: "MC",
      flagImage: "/flags/monaco.png",
    },
    date: "2024-05-26",
    time: "15:00",
    status: "completed",
    practices: [
      {
        name: "Practice 1",
        date: "2024-05-24",
        time: "13:30",
      },
      {
        name: "Practice 2",
        date: "2024-05-24",
        time: "17:00",
      },
      {
        name: "Practice 3",
        date: "2024-05-25",
        time: "12:30",
      },
    ],
    qualifying: {
      date: "2024-05-25",
      time: "16:00",
    },
    results: [
      {
        position: 1,
        driver: "Charles Leclerc",
        team: "Ferrari",
        points: 25,
        time: "1:46:19.778",
      },
      {
        position: 2,
        driver: "Oscar Piastri",
        team: "McLaren",
        points: 18,
        time: "+7.152s",
      },
      {
        position: 3,
        driver: "Carlos Sainz",
        team: "Ferrari",
        points: 15,
        time: "+7.585s",
      },
    ],
    trackLength: 3.337,
    laps: 78,
    lapRecord: {
      time: "1:12.909",
      driver: "Lewis Hamilton",
      year: 2021,
    },
    firstGrandPrix: 1950,
    trackMap: "/tracks/monaco.svg",
  },
  {
    id: "canada",
    name: "Canadian Grand Prix",
    round: 9,
    circuitName: "Circuit Gilles Villeneuve",
    circuitImage: "/circuits/montreal.jpg",
    location: {
      city: "Montreal",
      country: "Canada",
      countryCode: "CA",
      flagImage: "/flags/canada.png",
    },
    date: "2024-06-09",
    time: "20:00",
    status: "completed",
    practices: [
      {
        name: "Practice 1",
        date: "2024-06-07",
        time: "18:30",
      },
      {
        name: "Practice 2",
        date: "2024-06-07",
        time: "22:00",
      },
      {
        name: "Practice 3",
        date: "2024-06-08",
        time: "17:30",
      },
    ],
    qualifying: {
      date: "2024-06-08",
      time: "21:00",
    },
    results: [
      {
        position: 1,
        driver: "Max Verstappen",
        team: "Red Bull Racing",
        points: 25,
        time: "1:45:47.927",
      },
      {
        position: 2,
        driver: "Lando Norris",
        team: "McLaren",
        points: 18,
        time: "+3.879s",
      },
      {
        position: 3,
        driver: "George Russell",
        team: "Mercedes",
        points: 15,
        time: "+4.317s",
      },
    ],
    trackLength: 4.361,
    laps: 70,
    lapRecord: {
      time: "1:13.078",
      driver: "Valtteri Bottas",
      year: 2019,
    },
    firstGrandPrix: 1978,
    trackMap: "/tracks/montreal.svg",
  },
  {
    id: "spain",
    name: "Spanish Grand Prix",
    round: 10,
    circuitName: "Circuit de Barcelona-Catalunya",
    circuitImage: "/circuits/barcelona.jpg",
    location: {
      city: "Barcelona",
      country: "Spain",
      countryCode: "ES",
      flagImage: "/flags/spain.png",
    },
    date: "2024-06-23",
    time: "15:00",
    status: "completed",
    practices: [
      {
        name: "Practice 1",
        date: "2024-06-21",
        time: "13:30",
      },
      {
        name: "Practice 2",
        date: "2024-06-21",
        time: "17:00",
      },
      {
        name: "Practice 3",
        date: "2024-06-22",
        time: "12:30",
      },
    ],
    qualifying: {
      date: "2024-06-22",
      time: "16:00",
    },
    results: [
      {
        position: 1,
        driver: "Max Verstappen",
        team: "Red Bull Racing",
        points: 25,
        time: "1:28:20.227",
      },
      {
        position: 2,
        driver: "Lando Norris",
        team: "McLaren",
        points: 18,
        time: "+2.219s",
      },
      {
        position: 3,
        driver: "Lewis Hamilton",
        team: "Mercedes",
        points: 15,
        time: "+17.790s",
      },
    ],
    trackLength: 4.675,
    laps: 66,
    lapRecord: {
      time: "1:18.149",
      driver: "Max Verstappen",
      year: 2021,
    },
    firstGrandPrix: 1991,
    trackMap: "/tracks/barcelona.svg",
  },
  {
    id: "austria",
    name: "Austrian Grand Prix",
    round: 11,
    circuitName: "Red Bull Ring",
    circuitImage: "/circuits/spielberg.jpg",
    location: {
      city: "Spielberg",
      country: "Austria",
      countryCode: "AT",
      flagImage: "/flags/austria.png",
    },
    date: "2024-06-30",
    time: "15:00",
    status: "completed",
    practices: [
      {
        name: "Practice 1",
        date: "2024-06-28",
        time: "13:30",
      },
      {
        name: "Practice 2",
        date: "2024-06-28",
        time: "17:00",
      },
      {
        name: "Practice 3",
        date: "2024-06-29",
        time: "12:30",
      },
    ],
    qualifying: {
      date: "2024-06-29",
      time: "16:00",
    },
    sprint: {
      date: "2024-06-29",
      time: "12:00",
      results: [
        {
          position: 1,
          driver: "Max Verstappen",
          team: "Red Bull Racing",
          points: 8,
          time: "30:23.285",
        },
        {
          position: 2,
          driver: "Oscar Piastri",
          team: "McLaren",
          points: 7,
          time: "+4.616s",
        },
        {
          position: 3,
          driver: "George Russell",
          team: "Mercedes",
          points: 6,
          time: "+4.921s",
        },
      ],
    },
    results: [
      {
        position: 1,
        driver: "George Russell",
        team: "Mercedes",
        points: 25,
        time: "1:24:22.798",
      },
      {
        position: 2,
        driver: "Oscar Piastri",
        team: "McLaren",
        points: 18,
        time: "+1.906s",
      },
      {
        position: 3,
        driver: "Carlos Sainz",
        team: "Ferrari",
        points: 15,
        time: "+4.533s",
      },
    ],
    trackLength: 4.318,
    laps: 71,
    lapRecord: {
      time: "1:05.619",
      driver: "Carlos Sainz",
      year: 2020,
    },
    firstGrandPrix: 1970,
    trackMap: "/tracks/spielberg.svg",
  },
  {
    id: "great-britain",
    name: "British Grand Prix",
    round: 12,
    circuitName: "Silverstone Circuit",
    circuitImage: "/circuits/silverstone.jpg",
    location: {
      city: "Silverstone",
      country: "United Kingdom",
      countryCode: "GB",
      flagImage: "/flags/uk.png",
    },
    date: "2024-07-07",
    time: "16:00",
    status: "completed",
    practices: [
      {
        name: "Practice 1",
        date: "2024-07-05",
        time: "13:30",
      },
      {
        name: "Practice 2",
        date: "2024-07-05",
        time: "17:00",
      },
      {
        name: "Practice 3",
        date: "2024-07-06",
        time: "12:30",
      },
    ],
    qualifying: {
      date: "2024-07-06",
      time: "16:00",
    },
    results: [
      {
        position: 1,
        driver: "Lewis Hamilton",
        team: "Mercedes",
        points: 25,
        time: "1:22:27.095",
      },
      {
        position: 2,
        driver: "Max Verstappen",
        team: "Red Bull Racing",
        points: 18,
        time: "+1.465s",
      },
      {
        position: 3,
        driver: "Lando Norris",
        team: "McLaren",
        points: 15,
        time: "+7.547s",
      },
    ],
    trackLength: 5.891,
    laps: 52,
    lapRecord: {
      time: "1:27.097",
      driver: "Max Verstappen",
      year: 2020,
    },
    firstGrandPrix: 1950,
    trackMap: "/tracks/silverstone.svg",
  },
  {
    id: "hungary",
    name: "Hungarian Grand Prix",
    round: 13,
    circuitName: "Hungaroring",
    circuitImage: "/circuits/hungaroring.jpg",
    location: {
      city: "Budapest",
      country: "Hungary",
      countryCode: "HU",
      flagImage: "/flags/hungary.png",
    },
    date: "2024-07-21",
    time: "15:00",
    status: "completed",
    practices: [
      {
        name: "Practice 1",
        date: "2024-07-19",
        time: "13:30",
      },
      {
        name: "Practice 2",
        date: "2024-07-19",
        time: "17:00",
      },
      {
        name: "Practice 3",
        date: "2024-07-20",
        time: "12:30",
      },
    ],
    qualifying: {
      date: "2024-07-20",
      time: "16:00",
    },
    results: [
      {
        position: 1,
        driver: "Oscar Piastri",
        team: "McLaren",
        points: 25,
        time: "1:36:31.116",
      },
      {
        position: 2,
        driver: "Lando Norris",
        team: "McLaren",
        points: 18,
        time: "+2.141s",
      },
      {
        position: 3,
        driver: "Lewis Hamilton",
        team: "Mercedes",
        points: 15,
        time: "+14.880s",
      },
    ],
    trackLength: 4.381,
    laps: 70,
    lapRecord: {
      time: "1:16.627",
      driver: "Lewis Hamilton",
      year: 2020,
    },
    firstGrandPrix: 1986,
    trackMap: "/tracks/hungaroring.svg",
  },
  {
    id: "belgium",
    name: "Belgian Grand Prix",
    round: 14,
    circuitName: "Circuit de Spa-Francorchamps",
    circuitImage: "/circuits/spa.jpg",
    location: {
      city: "Spa",
      country: "Belgium",
      countryCode: "BE",
      flagImage: "/flags/belgium.png",
    },
    date: "2024-07-28",
    time: "15:00",
    status: "completed",
    practices: [
      {
        name: "Practice 1",
        date: "2024-07-26",
        time: "13:30",
      },
      {
        name: "Practice 2",
        date: "2024-07-26",
        time: "17:00",
      },
      {
        name: "Practice 3",
        date: "2024-07-27",
        time: "12:30",
      },
    ],
    qualifying: {
      date: "2024-07-27",
      time: "16:00",
    },
    results: [
      {
        position: 1,
        driver: "Lewis Hamilton",
        team: "Mercedes",
        points: 25,
        time: "1:17:45.023",
      },
      {
        position: 2,
        driver: "Oscar Piastri",
        team: "McLaren",
        points: 18,
        time: "+3.267s",
      },
      {
        position: 3,
        driver: "Charles Leclerc",
        team: "Ferrari",
        points: 15,
        time: "+5.125s",
      },
    ],
    trackLength: 7.004,
    laps: 44,
    lapRecord: {
      time: "1:46.286",
      driver: "Valtteri Bottas",
      year: 2018,
    },
    firstGrandPrix: 1950,
    trackMap: "/tracks/spa.svg",
  },
  {
    id: "netherlands",
    name: "Dutch Grand Prix",
    round: 15,
    circuitName: "Circuit Zandvoort",
    circuitImage: "/circuits/zandvoort.jpg",
    location: {
      city: "Zandvoort",
      country: "Netherlands",
      countryCode: "NL",
      flagImage: "/flags/netherlands.png",
    },
    date: "2024-08-25",
    time: "15:00",
    status: "upcoming",
    practices: [
      {
        name: "Practice 1",
        date: "2024-08-23",
        time: "13:30",
      },
      {
        name: "Practice 2",
        date: "2024-08-23",
        time: "17:00",
      },
      {
        name: "Practice 3",
        date: "2024-08-24",
        time: "12:30",
      },
    ],
    qualifying: {
      date: "2024-08-24",
      time: "16:00",
    },
    trackLength: 4.259,
    laps: 72,
    lapRecord: {
      time: "1:11.097",
      driver: "Lewis Hamilton",
      year: 2021,
    },
    firstGrandPrix: 1952,
    trackMap: "/tracks/zandvoort.svg",
  },
  {
    id: "italy",
    name: "Italian Grand Prix",
    round: 16,
    circuitName: "Autodromo Nazionale Monza",
    circuitImage: "/circuits/monza.jpg",
    location: {
      city: "Monza",
      country: "Italy",
      countryCode: "IT",
      flagImage: "/flags/italy.png",
    },
    date: "2024-09-01",
    time: "15:00",
    status: "upcoming",
    practices: [
      {
        name: "Practice 1",
        date: "2024-08-30",
        time: "13:30",
      },
      {
        name: "Practice 2",
        date: "2024-08-30",
        time: "17:00",
      },
      {
        name: "Practice 3",
        date: "2024-08-31",
        time: "12:30",
      },
    ],
    qualifying: {
      date: "2024-08-31",
      time: "16:00",
    },
    trackLength: 5.793,
    laps: 53,
    lapRecord: {
      time: "1:21.046",
      driver: "Rubens Barrichello",
      year: 2004,
    },
    firstGrandPrix: 1950,
    trackMap: "/tracks/monza.svg",
  },
  {
    id: "azerbaijan",
    name: "Azerbaijan Grand Prix",
    round: 17,
    circuitName: "Baku City Circuit",
    circuitImage: "/circuits/baku.jpg",
    location: {
      city: "Baku",
      country: "Azerbaijan",
      countryCode: "AZ",
      flagImage: "/flags/azerbaijan.png",
    },
    date: "2024-09-15",
    time: "13:00",
    status: "upcoming",
    practices: [
      {
        name: "Practice 1",
        date: "2024-09-13",
        time: "11:30",
      },
      {
        name: "Practice 2",
        date: "2024-09-13",
        time: "15:00",
      },
      {
        name: "Practice 3",
        date: "2024-09-14",
        time: "11:30",
      },
    ],
    qualifying: {
      date: "2024-09-14",
      time: "15:00",
    },
    trackLength: 6.003,
    laps: 51,
    lapRecord: {
      time: "1:43.009",
      driver: "Charles Leclerc",
      year: 2019,
    },
    firstGrandPrix: 2017,
    trackMap: "/tracks/baku.svg",
  },
]

// Update circuit image file extensions
races.forEach((race) => {
  // Update circuit image extensions
  if (race.id === "bahrain") race.circuitImage = "/tracks/bahrain.avif"
  if (race.id === "saudi-arabia") race.circuitImage = "/tracks/jeddah.avif"
  if (race.id === "australia") race.circuitImage = "/tracks/melbourne.avif"
  if (race.id === "japan") race.trackMap = "/circuits/suzuka.png"
  if (race.id === "china") race.trackMap = "/circuits/shanghai.png"
  if (race.id === "miami") race.trackMap = "/circuits/miami.png"
  if (race.id === "emilia-romagna") race.trackMap = "/circuits/imola.png"
  if (race.id === "monaco") race.trackMap = "/circuits/monaco.png"
  if (race.id === "canada") race.trackMap = "/circuits/montreal.png"
  if (race.id === "spain") race.trackMap = "/circuits/barcelona.png"
  if (race.id === "austria") race.trackMap = "/circuits/spielberg.png"
  if (race.id === "great-britain") race.trackMap = "/circuits/silverstone.png"
  if (race.id === "hungary") race.trackMap = "/circuits/hungaroring.png"
  if (race.id === "belgium") race.trackMap = "/circuits/spa.png"
  if (race.id === "netherlands") race.trackMap = "/circuits/zandvoort.avif"
  if (race.id === "italy") race.trackMap = "/circuits/monza.avif"
  if (race.id === "azerbaijan") race.trackMap = "/circuits/baku.avif"

  // Update track map extensions
  if (race.id === "bahrain") race.trackMap = "/tracks/bahrain.png"
  if (race.id === "saudi-arabia") race.trackMap = "/circuits/jeddah.png"
  if (race.id === "australia") race.trackMap = "/circuits/melbourne.png"
  if (race.id === "japan") race.circuitImage = "/tracks/suzuka.avif"
  if (race.id === "china") race.circuitImage = "/tracks/shanghai.png"
  if (race.id === "miami") race.circuitImage = "/tracks/miami.avif"
  if (race.id === "emilia-romagna") race.circuitImage = "/tracks/imola.avif"
  if (race.id === "monaco") race.circuitImage = "/tracks/monaco.avif"
  if (race.id === "canada") race.circuitImage = "/tracks/montreal.avif"
  if (race.id === "spain") race.circuitImage = "/tracks/barcelona.avif"
  if (race.id === "austria") race.circuitImage = "/tracks/spielberg.avif"
  if (race.id === "great-britain") race.circuitImage = "/tracks/silverstone.avif"
  if (race.id === "hungary") race.circuitImage = "/tracks/hungaroring.avif"
  if (race.id === "belgium") race.circuitImage = "/tracks/spa.png"
  if (race.id === "netherlands") race.circuitImage = "/tracks/zandvoort.avif"
  if (race.id === "italy") race.circuitImage = "/tracks/monza.avif"
  if (race.id === "azerbaijan") race.circuitImage = "/tracks/azerbaijan.avif"

  // Update flag image extensions
  if (race.location.countryCode === "BH") race.location.flagImage = "/flags/bahrain.png"
  if (race.location.countryCode === "SA") race.location.flagImage = "/flags/saudi-arabia.png"
  if (race.location.countryCode === "AU") race.location.flagImage = "/flags/australia.png"
  if (race.location.countryCode === "JP") race.location.flagImage = "/flags/japan.avif"
  if (race.location.countryCode === "CN") race.location.flagImage = "/flags/china.avif"
  if (race.location.countryCode === "US") race.location.flagImage = "/flags/usa.avif"
  if (race.location.countryCode === "IT") race.location.flagImage = "/flags/italy.avif"
  if (race.location.countryCode === "MC") race.location.flagImage = "/flags/monaco.png"
  if (race.location.countryCode === "CA") race.location.flagImage = "/flags/canada.avif"
  if (race.location.countryCode === "ES") race.location.flagImage = "/flags/spain.avif"
  if (race.location.countryCode === "AT") race.location.flagImage = "/flags/austria.png"
  if (race.location.countryCode === "GB") race.location.flagImage = "/flags/uk.png"
  if (race.location.countryCode === "HU") race.location.flagImage = "/flags/hungary.avif"
  if (race.location.countryCode === "BE") race.location.flagImage = "/flags/belgium.avif"
  if (race.location.countryCode === "NL") race.location.flagImage = "/flags/netherlands.avif"
  if (race.location.countryCode === "AZ") race.location.flagImage = "/flags/azerbaijan.avif"
})

// Update the races array to change more races to "upcoming" status
// For races that are now upcoming, remove their results

// First, let's update the races from Bahrain through Belgium to be completed (races 1-14)
// These races will keep their results

// Then, let's update the Netherlands race and all subsequent races to be upcoming
// For these races, we'll remove any results data

// Update the Netherlands race (round 15)
races[14].status = "upcoming"
delete races[14].results

// Update the Italy race (round 16)
races[15].status = "upcoming"
delete races[15].results

// Update the Azerbaijan race (round 17)
races[16].status = "upcoming"
delete races[16].results


// Update the getCalendarData function to reflect the current date
export const getCalendarData = (filters?: { status?: string; season?: number }): CalendarResponse => {
  // Use April 19, 2025 as the current date to match the system time
  const currentDate = new Date("2025-04-19T07:26:35")
  let filteredRaces = [...races]

  // Filter by status if specified
  if (filters?.status && filters.status !== "all") {
    filteredRaces = filteredRaces.filter((race) => race.status === filters.status)
  }

  // Sort races by date
  filteredRaces.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

  // Find next race
  const nextRace = races.find((race) => {
    const raceDate = new Date(race.date)
    return raceDate > currentDate && race.status === "upcoming"
  })

  // Find last completed race
  const completedRaces = races.filter((race) => race.status === "completed")
  const lastRace = completedRaces.length > 0 ? completedRaces[completedRaces.length - 1] : undefined

  return {
    races: filteredRaces,
    season: 2024,
    nextRace,
    lastRace,
  }
}
