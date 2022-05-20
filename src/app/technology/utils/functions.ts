import { Jobs } from "src/app/jobs/class/jobs";
import { Technology } from "../class/technology";

export const joinJobsAndTecnologies = (jobs: Jobs[], technologies:Technology[]) =>{
    return jobs.map((job) => {
        return technologies
            .filter((technology:Technology) =>  technology.id === job.id_technology)
            .map((tech)=> ({...job, ...tech} ))                        
    })
    .reduce((a,b)=>{
        return a.concat(b)
    },[])
}

