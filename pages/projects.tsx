import {NextPage} from "next";
import { Search } from "../components/projects/Search";
import { SearchResults } from "../components/projects/SearchResults";
import projects from '../data/projects.json'

const Projects: NextPage = ()=> {
    console.log(projects);
    return (
        <div className="h-screen">
            <Search />
            <SearchResults />
        </div>
    )
}

export default Projects;