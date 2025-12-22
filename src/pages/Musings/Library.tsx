import { Link } from 'react-router-dom';
import { articles } from "@routes/articles";

export default function Library() {
    return (<>
        <h1>Musings</h1>
        <ul>
            {articles.map((a) => (
                <li key={a.path}>
                    <Link to={a.path}>{a.title}</Link>
                </li>
            ))}
        </ul>
    </>);
}