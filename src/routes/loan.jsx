import logo from '../assets/arrow.svg';
import logo1 from '../assets/icon.svg';
import logo2 from '../assets/Add-Stroke.svg';
import {Link} from "react-router-dom";
export default function Root() {
    return (
      <>
  <section className="flex container mx-auto h-screen">
    <div className="flex flex-col sm:flex-row bg-gray-300 w-full my-auto justify-center items-center">
      <div className="self-start w-full md:w-1/3 p-0">
        <div className="relative p-12 bg-green-400  m-0">
        <Link to={"/debt"}><img class="absolute top-10 left-15" src={logo} alt="" /></Link>
          <h1 className="text-center my-0 text-white text-4xl capitalize">pagos</h1>
        </div>
        <a href>
          <div className="blur-sm flex justify-between px-5 py-5 bg-gray-200 border-solid border-2 border-gray-400 blur-sm">
            <img className="w-1/4" src={"/src/assets/icon.svg"} alt="" />
            <div className="flex justify-center flex-col text-right text-white">
              <p className="my-0 text-black-600 hover:text-white">Estado actual</p>
              <p className="my-0 font-bold text-red-600 text-3xl">$1.400,10</p>
            </div>
          </div>
        </a>
          <div className="hover:bg-green-400 btn-2 flex justify-center items-center px-5 py-9 bg-gray-200 border-solid border-2 border-t-0 border-gray-400 text-black hover:text-white mb-50">
            <img className="img-plus" src={"/src/assets/Add-Stroke.svg"} alt="" />
            <p className="my-0">Agregar nuevo <br /> prestamo</p>
          </div>
      </div>
      <div className="w-full md:w-2/3 rounded-b-2xl rounded-r-2xl flex justify-center items-center shadow-custom p-7 bg-gray-200 h-auto">
        <div className="flex flex-col bg-white rounded-2xl text-center p-4">
          <div className="self-start mx-auto w-full max-w-lg my-3 ">
            <div className="flex items-start flex-col w-full ">
              <h1 className="text-4xl mb-2">Crear nuevo Prestamo</h1>
              <h5 className="my-3">Agregar foto</h5>
              <a className="link-custom" href>
                <div className="hover:bg-green-400 flex flex-col rounded-2xl btn-2 flex justify-center items-center px-5 py-5 bg-gray-200  text-black hover:text-white">
                  <img className="img-plus" src={"/src/assets/Add-Stroke.svg"} alt="" />
                  <p className="my-0">Subir foto</p>
                </div>
              </a>
            </div>
          </div>
          <form className="self-start mx-auto w-full max-w-lg">
            <div className="flex flex-col md:flex-row">
              <div className="flex flex-col flex-wrap mx-3 mb-6">
                <div className="w-full px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                    Nombre de usuario
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700  rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Nombre" />
                </div>
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                    Cantidad de prestamo
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Cantidad" />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-1">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                    Razón del prestamo
                  </label>
                  <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4  leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="Describir razón" defaultValue={""} />
                </div>
              </div>
            </div>
            <button className="shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
              Crear
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
      </>
    );
  }