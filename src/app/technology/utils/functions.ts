import { Jobs } from "src/app/jobs/class/jobs";
import { Technology } from "../class/technology";

export const joinJobsAndTecnologies = (jobs: Jobs[], technologies:Technology[]) =>{
    return jobs.map((job: Jobs) => {
        return technologies
            .filter((technology:Technology) =>  technology.id === job.id_technology)
            .map((tech: Technology)=> ({
                id: job.id,
                name_job: job.name_job,
                id_technology: job.id_technology,
                id_tech: tech.id,
                name_technology: tech.name_technology
            }))
    })
    .reduce((a,b)=>{
        return a.concat(b)
    },[])
}

