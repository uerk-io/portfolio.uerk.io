
import { StaticImageData } from 'next/image';
import AmsImage from '../public/ams.jpg'
import PowerschoolImage from '../public/powerschool.jpg'
import PtiImage from '../public/pti.jpg'

export class PriorExperience {
    key: string;
    position_title: string;
    company: string;
    company_logo: StaticImageData;
    time_period: string;
    highlights: string[];

    constructor(key: string, position_title:string, company:string, company_logo: StaticImageData, time_period: string, highlights: string[])
    {
        this.key = key
        this.position_title = position_title;
        this.company = company;
        this.company_logo = company_logo;
        this.time_period = time_period;
        this.highlights = highlights;
    }
}

export const previous_positions: PriorExperience[] =  [
    {
        key: "ams",
        position_title: "Back-End Software Engineer",
        company: "AMS Staffing, Inc.",
        time_period: "July 2022 - December 2022",
        highlights: [
            "Engineered scalable data solutions for global pharmaceutical portfolios",
            "Designed and maintained Java/Angular microservice architectures utilizing Docker/Kubernetes",
            "Rapidly prototyped and delivered reporting applications for a wide range of SQL/NoSQL data sources",
            "Leveraged Atlassian tools for seamless CI/CD experiences"
        ],
        company_logo: AmsImage
    },
    {
        key: "powerschool",
        position_title: "Full-Stack Software Engineer",
        company: "Powerschool",
        time_period: "January 2022 - June 2022",
        highlights: [
            "Developed and maintained Java and JavaScript (React) codebases to handle scalable SaaS solutions",
            "Engineered software solutions for classroom environments using an Agile production format",
            "Hands-on live deployments of massively scaled software (with a certification for deploying to AWS)",
            "Directed quality by fixing user permissions bugs, netting an overall higher validation of data"
        ],
        company_logo: PowerschoolImage

    },
    {
        key: "pti",
        position_title: "Information Systems Developer",
        company: "Plastic Technologies, Inc.",
        time_period: "March 2019 - January 2021",
        highlights: [
            "Developed Python/Flask based web-applications for a company wide project file system",
            "Managed and maintained databases for applications written in SQL, Python, Java, C#, and JS/TS",
            "Collaborated with team members to revisit and improve software implementations",
            "Provided full-stack software solutions with a focus in web microservices"
        ],
        company_logo: PtiImage
    }
    /** {
        key: "ut",
        position_title: "Peer Mentor",
        company: "The University of Toledo",
        time_period: "January 2019 - May 2019, August 2019 - December 2019",
        highlights: [
            "Lead students in understanding the basics of Object-Oriented Programming",
            "Assisted students in testing, debugging, and designing programs",
            "Cooperated with other leaders to adapt the curriculum to student needs",
            "Demonstrated the features of modern IDEs for academic projects"
        ],
        company_logo_path: "/utoledo.jpg" 
    } ***/
    
]
