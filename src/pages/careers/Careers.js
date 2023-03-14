import { Link, useLoaderData } from "react-router-dom"

export default function Careers() {

    const data = useLoaderData()

    return (
        <div className="careers">
            {data.map(career => (
                <Link to='/' key={career.id}>
                    <p>{career.title}</p>
                    <p>Based in {career.location}</p>
                </Link>
            ))}
        </div>
    )
}

//loader function
export const careersLoader = async () => {
    const res = await fetch('http://localhost:4000/careers')

    return res.json()
} 