import type { NewsArticle } from "@/types/types"

export const newsArticles: NewsArticle[] = [
    {
        id: "1",
        title: "McLaren Unveils Major Upgrade Package for Upcoming Race",
        slug: "mclaren-unveils-major-upgrade-package",
        excerpt: "McLaren F1 Team has revealed significant aerodynamic improvements ahead of the next Grand Prix.",
        content: `
      <p>McLaren F1 Team has unveiled a comprehensive upgrade package that they hope will further strengthen their position at the top of the constructors' championship. The upgrades, which include a redesigned floor, new sidepods, and modifications to the rear wing, are expected to provide a significant performance boost.</p>
      
      <p>"We've been working on these upgrades for several months," said Andrea Stella, McLaren's Team Principal. "Our data from the wind tunnel and CFD simulations suggests we could gain up to three-tenths of a second per lap, which would be a substantial improvement."</p>
      
      <p>Lando Norris, who has been in excellent form this season, expressed his excitement about the upgrades. "The car has been feeling great all year, but these new parts should give us that extra edge we need to stay ahead of Ferrari and Red Bull. I'm looking forward to testing them on track."</p>
      
      <p>The upgrades come at a crucial time in the championship battle, with Ferrari closing the gap in recent races. McLaren currently leads the constructors' standings with 666 points, but Ferrari is just 14 points behind.</p>
      
      <p>Technical experts suggest that McLaren's focus on improving the floor design could be particularly beneficial at high-downforce circuits, which make up several of the remaining races on the calendar.</p>
    `,
        coverImage: "/news/mclaren-upgrade.webp",
        publishedAt: "2024-04-15T09:30:00Z",
        author: {
            name: "Sarah Johnson",
            avatar: "/news/avatar.png",
        },
        relatedTeams: ["mclaren"],
        tags: ["technical", "development", "upgrades"],
        featured: true,
    },
    {
        id: "2",
        title: "Ferrari Signs New Technical Director from Rival Team",
        slug: "ferrari-signs-new-technical-director",
        excerpt: "Scuderia Ferrari has announced a major signing to strengthen their technical department.",
        content: `
      <p>Scuderia Ferrari has made a significant move in the Formula 1 technical personnel market by signing a highly respected technical director from a rival team. The Italian outfit announced today that the new addition will join their technical department starting from next season.</p>
      
      <p>While Ferrari has not officially named the individual due to contractual obligations with their current employer, sources close to the team suggest it is someone with a strong track record of developing championship-winning cars.</p>
      
      <p>Frédéric Vasseur, Ferrari's Team Principal, commented on the signing: "We are delighted to welcome this exceptional talent to our team. Their expertise and fresh perspective will be invaluable as we continue to build for the future. This appointment underlines our commitment to returning Ferrari to the very top of Formula 1."</p>
      
      <p>The move comes as part of Ferrari's ongoing restructuring of their technical department, which began when Vasseur took over as Team Principal. The team has shown improved form this season, currently sitting second in the constructors' championship.</p>
      
      <p>Charles Leclerc, who has been with Ferrari since 2019, welcomed the news: "It's always positive when we strengthen the team. I'm looking forward to working with them and seeing what new ideas they bring to help us challenge for championships."</p>
      
      <p>Industry analysts view this as a statement of intent from Ferrari as they look to end their championship drought, having not won a constructors' title since 2008.</p>
    `,
        coverImage: "/news/ferrari-signing.webp",
        publishedAt: "2024-04-12T14:15:00Z",
        author: {
            name: "Marco Rossi",
            avatar: "/news/avatar.png",
        },
        relatedTeams: ["ferrari"],
        tags: ["personnel", "technical", "development"],
        featured: true,
    },
    {
        id: "3",
        title: "Verstappen Criticizes Red Bull's Recent Development Direction",
        slug: "verstappen-criticizes-red-bull-development",
        excerpt: "Max Verstappen has expressed concerns about Red Bull's car development after recent performance issues.",
        content: `
      <p>Three-time world champion Max Verstappen has publicly voiced his concerns about Red Bull Racing's recent development direction following a string of races where the team has struggled to match the pace of McLaren and Ferrari.</p>
      
      <p>"We started the season strongly, but it feels like we've lost our way a bit with the development," Verstappen said after finishing third in the latest Grand Prix. "The car doesn't feel as connected as it did at the beginning of the year, and we're seeing that in the results."</p>
      
      <p>Red Bull, who dominated the 2023 season with a record number of wins, has found themselves increasingly under pressure as their rivals have made significant strides forward. The team currently sits third in the constructors' championship, trailing McLaren by 77 points.</p>
      
      <p>Team Principal Christian Horner acknowledged Verstappen's comments but remained optimistic: "Max is right to push us - that's what champions do. We know where we need to improve, and we have updates coming that should address some of the issues we've been experiencing. This championship is far from over."</p>
      
      <p>Technical Director Pierre Waché added: "We've identified the areas where we've lost performance relative to our competitors. Sometimes in F1, you take a development path that doesn't yield the expected results. The important thing is how quickly you can correct course."</p>
      
      <p>Red Bull is expected to bring a significant upgrade package to the next race as they look to regain their early-season form and close the gap to the leaders.</p>
    `,
        coverImage: "/news/verstappen-red-bull.jpg",
        publishedAt: "2024-04-10T16:45:00Z",
        author: {
            name: "Jan Peters",
            avatar: "/news/avatar.png",
        },
        relatedTeams: ["red-bull"],
        tags: ["drivers", "technical", "development"],
        featured: false,
    },
    {
        id: "4",
        title: "Mercedes Confirms Hamilton Replacement for Next Season",
        slug: "mercedes-confirms-hamilton-replacement",
        excerpt:
            "Mercedes-AMG Petronas has announced who will partner George Russell following Lewis Hamilton's departure to Ferrari.",
        content: `
      <p>Mercedes-AMG Petronas F1 Team has officially confirmed their driver lineup for the next season, announcing who will replace the departing Lewis Hamilton. The seven-time world champion will join Ferrari in 2025, ending his highly successful 12-year partnership with the Silver Arrows.</p>
      
      <p>After months of speculation and a thorough evaluation of available drivers, Mercedes has decided to promote their junior driver Andrea Kimi Antonelli to partner George Russell. The 18-year-old Italian has impressed in the junior categories and has been part of Mercedes' young driver program since 2019.</p>
      
      <p>Toto Wolff, Team Principal of Mercedes, explained the decision: "While we had several experienced options available to us, we believe in Kimi's exceptional talent and potential. He represents the future of our team, and we're confident he has what it takes to succeed at the highest level of motorsport."</p>
      
      <p>Antonelli expressed his excitement about the opportunity: "Joining Mercedes in Formula 1 is a dream come true. I've been part of this family for several years now, and to make this step up to partner George is an incredible honor. I know I have big shoes to fill following Lewis, but I'm ready for the challenge."</p>
      
      <p>George Russell, who will become the team's senior driver in 2025, welcomed his new teammate: "Kimi is an incredible talent, and I'm looking forward to working with him. We have a good relationship already from his time with the team, and I think we'll push each other to achieve great results."</p>
      
      <p>The announcement ends months of speculation about Hamilton's replacement, with several established drivers having been linked to the seat. Mercedes' decision to promote from within reflects their long-term strategy and confidence in their driver development program.</p>
    `,
        coverImage: "/news/mercedes-driver.jpg",
        publishedAt: "2024-04-08T10:00:00Z",
        author: {
            name: "Emma Wilson",
            avatar: "/news/avatar.png",
        },
        relatedTeams: ["mercedes", "ferrari"],
        tags: ["drivers", "transfers", "team news"],
        featured: true,
    },
    {
        id: "5",
        title: "All Teams Agree to 2026 Regulation Changes",
        slug: "teams-agree-2026-regulation-changes",
        excerpt: "Formula 1 teams have unanimously approved the proposed regulation changes for the 2026 season.",
        content: `
      <p>In a rare show of unity, all ten Formula 1 teams have agreed to the proposed regulation changes for the 2026 season. The new rules, which include significant changes to the power units and aerodynamics, aim to make the sport more sustainable and competitive.</p>
      
      <p>The 2026 power units will increase the electrical component to 50% of the total power output, while continuing to use sustainable fuels. The aerodynamic regulations will focus on reducing the cars' sensitivity to dirty air, which should improve racing and overtaking opportunities.</p>
      
      <p>FIA President Mohammed Ben Sulayem expressed his satisfaction with the agreement: "This unanimous decision demonstrates the shared commitment of all stakeholders to the future of Formula 1. The 2026 regulations represent a bold step forward for our sport, balancing technological innovation with sustainability and exciting racing."</p>
      
      <p>Formula 1 CEO Stefano Domenicali added: "The 2026 regulations are the result of extensive collaboration between the FIA, Formula 1, the current teams, and the new manufacturers entering the sport. We believe these changes will create an even more compelling spectacle for our fans while addressing important environmental concerns."</p>
      
      <p>The agreement is particularly significant as it has secured the commitment of new manufacturers entering the sport in 2026, including Audi, who will take over the Sauber team, and potentially others who have expressed interest.</p>
      
      <p>Team principals from across the grid welcomed the clarity provided by the finalized regulations, which will allow them to begin development work for the 2026 cars. The early agreement gives teams more than two years to prepare for what will be one of the most significant technical shifts in the sport's recent history.</p>
    `,
        coverImage: "/news/f1-regulations.jpg",
        publishedAt: "2024-04-05T13:20:00Z",
        author: {
            name: "David Chen",
            avatar: "/news/avatar.png",
        },
        relatedTeams: ["mclaren", "ferrari", "red-bull", "mercedes"],
        tags: ["regulations", "technical", "future"],
        featured: false,
    },
]
