import Link from "next/link";

async function fetchInfoContents(name) {
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const response = await fetch(`https://api.github.com/repos/MarkusEicher/${name}/contents`);
    const contents = await response.json();
    return contents;    
}

const InfoDetails = async ({ name }) => {
    const contents = await fetchInfoContents(name);
    const details = contents.filter((content) => content.type === 'dir');

    return (<>
        <h3>Directories</h3>
        <ul>
            {details.map((content) => (
                <li key={details.path}>
                    <Link href={`/info/code/${content.path}`}>
                        {content.path}
                    </Link>
                </li>
            ))}
        </ul>
    
    
    </>)
}

export default InfoDetails