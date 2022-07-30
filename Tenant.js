import { Link } from "react-router-dom";
 
const Tenant = () => {
    return (
        <section>
            <h1>Tenant Page</h1>
            <br />
            <p>You must have been assigned an Tenant role.</p>
            <div className="flexGrow">
                <Link to="/">Home</Link>
            </div>
        </section>
    )
}
 
export default Tenant