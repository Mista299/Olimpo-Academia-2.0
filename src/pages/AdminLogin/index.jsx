import LoginAdmin from '../../components/LoginAdmin'
import Carousel from "../../components/Carousel";

function AdminLogin() {
    return (
      <>
        <div className="relative w-full h-screen flex justify-center items-center mb-6">
          <div className="absolute inset-0 z-0">
            <Carousel />
          </div>
          <div className="overflow-y-auto relative z-10 h-screen md:overflow-y-visible md:h-auto sm:mt-10 md:mt-25 lg:mt-0 md:max-w-5xl p-8 rounded-lg shadow-lg p-6 bg-[rgba(0,13,53,0.8)] rounded-xl text-white">
            <LoginAdmin/>
          </div>
        </div>
      </>
    );
}

export default AdminLogin;
