import TopNav from "./TopNav";
import VerticalBar from "./VerticalBar";

function MainLayout({children}) {
    return (
        <>
            <TopNav />
            <div className="flex">
                <VerticalBar />
                {children}
            </div>
        </>
    )
}

export default MainLayout