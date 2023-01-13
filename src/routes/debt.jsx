import logo from '../assets/arrow.svg';
import logo1 from '../assets/icon.svg';
import logo2 from '../assets/Add-Stroke.svg';
import {Link} from "react-router-dom";
export default function Root() {
    return (
      <>
    <section class="flex container mx-auto h-screen">
        <div class="flex flex-col sm:flex-row w-full  py-0 md:py-32">

            <div class="w-full md:w-1/3 p-0 " >
                <div class="relative p-12 bg-green-400 m-0">
                <Link to={"/select"}><img class="absolute top-10 left-15" src={logo} alt="" /></Link>
                    <h1 class="text-center my-0 text-white text-4xl capitalize">pagos</h1>
                </div>
                <Link to={"/history"}>
                    <div class="hover:text-white hover:bg-green-400 flex justify-between px-5 py-5 bg-gray-200 border-solid border-2 border-gray-400">
                        <img class="img-plus" src={logo1} alt=""></img>
                        <div class="flex justify-center flex-col text-right">
                            <p class="my-0">Estado actual</p>
                            <p class="my-0 font-bold text-red-600 text-3xl">$ "Deuda Total"</p>
                        </div>
                    </div>
                </Link>
                <Link to={"/loan"}>
                    <div class="hover:bg-green-400 btn-2 flex justify-center items-center px-5 py-9 bg-gray-200 border-solid border-2 border-t-0 border-gray-400 text-black hover:text-white mb-50">
                        <img class="" src={logo2} alt="" />
                        <p class="my-0">Agregar nuevo prestamo</p>
                    </div>
                </Link>
            </div>

            <div class="md:w-2/3 flex rounded-b-2xl rounded-r-2xl justify-center items-center shadow-custom bg-gray-200 p-32" >
                <div class="text-center text-4xl">
                    <h2>Selecciona un usuario</h2>
                        <h2>O</h2>
                        <h2>Crea uno nuevo</h2>
                </div>
            </div>
        </div>

    </section>
      </>
    );
  }