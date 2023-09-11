import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

export const metadata = {
    title: "peerworking.ch's GitHub Repos",
    description: 'SEO optimized description goes here',
    keywords: 'open source, training, coaching, peerworking, healthcare, mental health'
  }

async function fetchRepos() {
    const response = await fetch(
        'https://api.github.com/users/MarkusEicher/repos', 
        {
            next: {
                revalidate: 60
            }
        }
    );

    const repos = await response.json();
    return repos;
}

// await new Promise(resolve => setTimeout(resolve, 1000));

const ReposPage = async () => {
    const repos = await fetchRepos();

    return (
        <div className="repos-container">
            <h2>GitHub Repositories</h2>
            <ul className="repo-list">
                {repos.map((repo) => (
                    <li key={repo.id}>
                        <Link href={`/info/code/${repo.name}`}>
                            <h3>{repo.name}</h3>
                            <p>{repo.description}</p>
                            <div className="repo-details">
                                <span>
                                    <FaStar /> {repo.stargazers_count}
                                </span>
                                <span>
                                    <FaCodeBranch /> {repo.forks_count}
                                </span>
                                <span>
                                    <FaEye /> {repo.watchers_count}
                                </span>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ReposPage