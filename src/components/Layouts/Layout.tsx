import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';

const Layout = ({ children }: any) => {
    return (
        <>
            <Navbar />
            <div className="flex">
                <Sidebar />
                <main className="flex-1 p-4">{children}</main>
            </div>
            <Footer />
        </>
    );
};

export default Layout;
