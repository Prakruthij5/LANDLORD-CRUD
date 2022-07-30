import { Link } from "react-router-dom";
 
const Landlord = () => {
    return (
        <section>
            <h1>Landlord Page</h1>
            <br />
            <p>You must have been assigned an landlord role.</p>
            <div className="flexGrow">
                <Link to="/">Home</Link>
            </div>
        </section>
    )
}
 
export default Landlord