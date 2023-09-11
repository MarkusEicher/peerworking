import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye, FaCode } from "react-icons/fa";


async function fetchInfo(name) {
    const response = await fetch(`https://api.github.com/repos/MarkusEicher/${name}`);
    const info = await response.json();

    return info;
}

const Info = async ({ name }) => {
    const info = await fetchInfo(name);
    

    return <>
    
        <h2>{info.name}</h2>
        <p>{info.description}</p>
        <div className="card-stats">
            <div className="card-stat">
                <FaStar /> 
                <span>{info.stargazers_count}</span>
            </div>
            <div className="card-stat">
                <FaCodeBranch /> 
                <span>{info.forks_count}</span>
            </div>
            <div className="card-stat">
                <FaEye /> 
                <span>{info.watchers_count}</span>
            </div>
        </div>
    
    </>
    
};

export default Info