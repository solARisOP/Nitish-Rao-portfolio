import { PROJECTS } from "../constants"

export const loader = ({params}) => {    
    const index = parseInt(params.idx)
    if(isNaN(index) || index < 0 || index >= PROJECTS.length) {
        throw new Error("");
    }
    return PROJECTS[index]
}