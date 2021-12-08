import {Link} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

function HomePage() {
    return (
        <MainLayout>
            <div className="m-auto text-center">
                <nav><span className="text-xl font-bold">Choisir l'utilisteur</span>
                    <div className="text-4xl text-highlight underline">
                        <Link to="/user/12">12</Link>
                    </div>
                    <div className="text-4xl text-highlight underline">
                        <Link to="/user/18">18</Link>
                    </div>
                </nav>
            </div>
        </MainLayout>
    )
}

export default HomePage