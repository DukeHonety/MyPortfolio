import Navbar from '../components/Nav';
const Layout = ({children}: any) => {
    return (
        <div className="bg-black text-white" id="particles">
            <div className="w-full fixed z-10 border-b-2 border-white top-0">
                <Navbar/>
            </div>
            <div className="min-h-screen">
                {children}
            </div>
        </div>
    )
};

export default Layout;