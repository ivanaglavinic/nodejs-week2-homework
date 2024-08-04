import { useParams } from "react-router"
import "./memberDetailsPage.css"

export const MemberDetailsPage = () => {
    const params = useParams();

    return (
    <div className="member-details-page">
        <h3>details for member {params.id}</h3>
    </div>
    );
};