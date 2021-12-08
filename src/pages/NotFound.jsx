import MainLayout from "../layouts/MainLayout";
import {Link} from "react-router-dom";

function NotFound() {
    return (
        <MainLayout>
            <div className="text-center m-auto">
                <div className="text-9xl">404</div>
                <div className="text-2xl">Les données que vous recherchez n'existent pas</div>
                <div className="text-2xl underline text-highlight"><Link to="/">Retour à la page d'accueil</Link></div>
            </div>
        </MainLayout>
    )
}

export default NotFound