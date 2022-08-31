import styled from "styled-components";
import Head from "next/head";

import { Subtitle } from "../components/Texts";
import { Experience } from "../components/Containers";
import { PageLayout } from "../components/sections";
import { media } from "../utils";

const experiences = {
    2022: [
        {
            company: "Kiavi",
            position: "Software Engineering Intern",
            content: "Platform team! Worked on building a data provider microservice to reduce data retrieval times. Other focuses including researching and implementing internal tooling for configuration, monitoring, and communication for all platform services.",
            tags: ["Internship"],
            date: "Jan - April 2022",
            linkTo: "https://www.kiavi.com/"
        },
        {
            company: "Prospective Medical Professionals",
            position: "Head of Technology",
            content: "Exploring leadership and designing a website from scratch. Currently, creating systems to automate logistics processes.",
            tags: ["Volunteering", "Long-term Project"],
            date: "Jan 2021 - Present",
            linkTo: "projects/pump-redesign"
        },
        {
            company: "UW Blueprint",
            position: "Software Developer",
            content: "Creating technological solutions for nonprofit organizations. Worked on building a module builder and dashboard, and a scheduling platform for food sharing. Lots of fun with other UW students.",
            tags: ["Volunteering", "Long-term Project"],
            date: "Sept 2021 - Apr 2022",
            linkTo: "https://github.com/uwblueprint/community-fridge-kw"
        }
    ],
    2021: [
        {
            company: "Geotab",
            position: "Software Developer Intern",
            content: "Building and exploring data pipelines and infrastructure with Docker, Kubernetes, GCP, Helm, Prometheus, Grafana, and so on. Enhanced some data reporting features with C# too. Also unit testing.",
            tags: ["Internship"],
            date: "May - Aug 2021",
            linkTo: "https://www.kiavi.com/"
        },
        {
            company: "CheaprEats",
            position: "Software Developer Intern",
            content: "Building a virtual web receipt builder and learning lots about front-end engineering and component-driven methodology.",
            tags: ["Internship"],
            date: "Aug 2020 - Jan 2021",
            linkTo: "https://www.cheapreats.com/"
        }
    ],
    2020: [
        {
            company: "Elucidate AI",
            position: "Data Science Intern",
            content: "Creating ML models to investigate real-estate industry trends.",
            tags: ["Internship"],
            date: "Oct - Dec 2020",
            linkTo: "https://www.elucidate.ai/"
        },
        {
            company: "Lead Technical Analyst",
            position: "Coronavirus Visualization Team",
            content: "Investigating how the flight industry was impacted by COVID-19. Also did some web-scraping and learnt-about some NLP models to analyze vaccination sediment on Twitter.",
            tags: ["Volunteering"],
            date: "Jun - Sep 2020",
            linkTo: "/projects/cvt"
        }
    ]
};

export default function Experiences() {
    return (
        <>
            <Head>
                <meta
                    name="description"
                    content="Sharon He is a 20 y/o developer from Toronto, Canada who is passionate about data, infrastructure, and predictive analytics."
                />
            </Head>
            <PageLayout title="Experiences">
                <Wrapper>
                    <Subtitle>
                        A brief history of all my experiences - internships,
                        volunteer work, and long-term projects.
                    </Subtitle>
                    <h2>2022</h2>
                    <div>
                        {experiences[2022].map(exp => (
                            <Experience
                                title={exp.company}
                                content={exp.content}
                                position={exp.position}
                                tags={exp.tags}
                                date={exp.date}
                                linkTo={exp.linkTo}
                            />
                        ))}
                    </div>
                    <h2>2021</h2>
                    <div>
                        {experiences[2021].map(exp => (
                            <Experience
                                title={exp.company}
                                content={exp.content}
                                position={exp.position}
                                tags={exp.tags}
                                date={exp.date}
                                linkTo={exp.linkTo}
                            />
                        ))}
                    </div>
                    <h2>2020</h2>
                    <div>
                        {experiences[2020].map(exp => (
                            <Experience
                                title={exp.company}
                                content={exp.content}
                                position={exp.position}
                                tags={exp.tags}
                                date={exp.date}
                                linkTo={exp.linkTo}
                            />
                        ))}
                    </div>
                </Wrapper>
            </PageLayout>
        </>
    )
};

const Wrapper = styled.div`
    width: 60%;
    margin: auto;
    padding: 0 20px 60px 20px;
    ${media(
        1000,
        `
            width: 70%;
        `
    )}
    ${media(
        "tablet",
        `
            width: 80%;
        `
    )}
    ${media(
        "mobile",
        `
            width: 90%;
        `
    )}
`;
// const Wrapper = styled.div`
//     font-size: 1.2rem;
//     padding-bottom: 80px;
//     h1, h2 {
//         font-size: 50px;
//         font-weight: 600;
//         text-align: center;
//         ${({ theme }) => `
//             font-family: ${theme.font.header};
//         `};
//         ${media(
//             "half_laptop",
//             `
//                 font-size: 40px;
//                 `
//         )};
//     }
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     div {
//         margin: 2% 1%;
//         width: 60%;
//         margin: auto;
//         ${media(
//             "tablet",
//             `
//                 width: 80%;
//             `
//         )}
//         ${media(
//             "mobile",
//             `
//                 width: 90%;
//             `
//         )}
//     }
// `;
