
import {Link} from "react-router-dom";
    export default function Root() {
        return (
          <>
      <section >
        <div className="container mx-auto flex flex-wrap h-screen">
          <div className="w-1/3 bg-white flex">
            <div className="w-full flex flex-col justify-center items-center">
              <Link to={"/debt"}>
                <button type="button" name id className="inline-block bg align-middle text-center select-none  font-normal whitespace-no-wrap rounded-2xl  no-underline text-2xl font-weight-bolder mb-5 text-gray-100 w-64  h-64 bg-green-500  text-white hover:bg-green-600 py-3 px-4 leading-tight ">
                  Pagos
                </button>
              </Link>
              <Link to={"/"}>
                <button type="button" name id className="inline-block align-middle text-center select-none  font-normal whitespace-no-wrap rounded-2xl no-underline text-2xl font-weight-bolder mb-5 text-gray-100 w-64  h-64 bg-red-600 text-white hover:bg-red-700 py-3 px-4 leading-tight  ">
                    Deudas
                </button>
              </Link>
            </div>
          </div>
          <div className="w-2/3 flex bg-gray-200 shadow-custom justify-center items-center vh-100 vw-100 text-center ">
            <div className>
              <h1>Seleciona una opción</h1>
            </div>
          </div>
        </div></section>
      
          </>
        );
      }