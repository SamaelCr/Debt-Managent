
import logo from '../assets/arrow.svg';
import logo1 from '../assets/icon.svg';
import logo2 from '../assets/Add-Stroke.svg';
import {Link} from "react-router-dom";
export default function Root() {
    return (
      <>
       <section className="grid flex flex-wrap container mx-auto h-screen">
  <div className="flex flex-col sm:flex-row w-full justify-center my-auto">
    <div className="w-full md:w-40">
      <div className="flex justify-center p-10 bg-green-400 m-0">
      <Link to={"/debt"}><img class="w-full" src={logo} alt="" /></Link>
      </div>
      <a href>
        <div className="flex justify-center px-5 py-5 bg-gray-100">
        <img class="img-plus" src={logo1} alt=""></img>
        </div>
      </a>
    </div>
    <div className="w-full md:w-1/3 flex flex-col bg-gray-100 p-14">
      <div className="text-center text-4xl mb-6">
        Selecciona <br />
        una opcion
      </div>
      <div className="w-100 flex justify-center mb-10">
        <button className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-4 px-4 rounded-lg focus:outline-none focus:shadow-outline" type="button" id="btn">
          Agregar
        </button>
        <button className="w-full bg-white hover:bg-gray-400 text-black font-bold py-4 px-4 rounded-lg focus:outline-none focus:shadow-outline" type="button" id="btn">
          restar
        </button>
      </div>
      <form action>
        <div className="mb-6">
          <p className="text-3xl text-center mb-6">Cantidad de dinero</p>
          <input type="password" id="repeat-password" className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-5 dark:border-gray-600 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Ingrese" required />
        </div>
        <div className="mb-6">
          <p className="text-3xl text-center mb-6">Razon del prestamo</p>
          <textarea id="message" rows={3} className="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..." defaultValue={""} />
        </div>
        <div>
          <button className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-4 px-4 rounded-lg focus:outline-none focus:shadow-outline" type="button" id="btn">
            Enviar
          </button>
        </div>
      </form>
    </div>
    <div className="w-full md:w-2/3 flex overflow-auto border-solid border-2 flex-col rounded-2xl shadow-custom p-20" style={{height: '800px'}}>
      <div className="flex justify-between">
        <div className>
          <h1 className="text-4xl mb-4">Historial</h1>
        </div>
        <div className="flex flex-col">
          <div><h1 className="text-sm">Saldo actual</h1></div>
          <div><h1 className="text-2xl">$1.400,10</h1></div>
        </div>
      </div>
      <div className="flex w-full border-solid rounded-2xl mb-4 justify-between">
        <div className="w-full h-20 bg-gray-200 px-3 flex">
          <div className>
            <div className=" ">
              <div className="flex font-bold">
                <h6>Agregado</h6>
                <div className="ml-3">
                  <img src="./assets/Eye_3.svg" alt="" />
                </div>
                <div className>
                  <img src="./assets/Equalizer_2.svg" alt="" />
                </div>
                <div className>
                  <img src="./assets/Trash_1.svg" alt="" />
                </div>
              </div>
            </div>
            <div className>
              <p>Se solicito prestamo para pago de nomina y demas</p>
            </div>
          </div>
          <div className="font-bold ml-auto">
            <h6 className>10-02-2023</h6>
          </div>
        </div>
        <div className="md:w-40 flex justify-items-center items-center w-full rounded-r-2xl bg-red-300">
          <div className="text-3xl font-bold">
            <h4 className>+ $10,10</h4>
          </div>
        </div>
      </div>
      <div className="flex w-full border-solid rounded-2xl mb-4 justify-between">
        <div className="w-full h-20 bg-gray-200 px-3 flex">
          <div className>
            <div className=" ">
              <div className="flex font-bold">
                <h6>Agregado</h6>
                <div className="ml-3">
                  <img src="./assets/Eye_3.svg" alt="" />
                </div>
                <div className>
                  <img src="./assets/Equalizer_2.svg" alt="" />
                </div>
                <div className>
                  <img src="./assets/Trash_1.svg" alt="" />
                </div>
              </div>
            </div>
            <div className>
              <p>Se solicito prestamo para pago de nomina y demas</p>
            </div>
          </div>
          <div className="font-bold ml-auto">
            <h6 className>10-02-2023</h6>
          </div>
        </div>
        <div className="md:w-40 flex justify-items-center items-center w-full rounded-r-2xl bg-red-300">
          <div className="text-3xl font-bold">
            <h4 className>+ $10,10</h4>
          </div>
        </div>
      </div>
      <div className="flex w-full border-solid rounded-2xl mb-4 justify-between">
        <div className="w-full h-20 bg-gray-200 px-3 flex">
          <div className>
            <div className=" ">
              <div className="flex font-bold">
                <h6>Agregado</h6>
                <div className="ml-3">
                  <img src="./assets/Eye_3.svg" alt="" />
                </div>
                <div className>
                  <img src="./assets/Equalizer_2.svg" alt="" />
                </div>
                <div className>
                  <img src="./assets/Trash_1.svg" alt="" />
                </div>
              </div>
            </div>
            <div className>
              <p>Se solicito prestamo para pago de nomina y demas</p>
            </div>
          </div>
          <div className="font-bold ml-auto">
            <h6 className>10-02-2023</h6>
          </div>
        </div>
        <div className="md:w-40 flex justify-items-center items-center w-full rounded-r-2xl bg-red-300">
          <div className="text-3xl font-bold">
            <h4 className>+ $10,10</h4>
          </div>
        </div>
      </div>
      <div className="flex w-full border-solid rounded-2xl mb-4 justify-between">
        <div className="w-full h-20 bg-gray-200 px-3 flex">
          <div className>
            <div className=" ">
              <div className="flex font-bold">
                <h6>Agregado</h6>
                <div className="ml-3">
                  <img src="./assets/Eye_3.svg" alt="" />
                </div>
                <div className>
                  <img src="./assets/Equalizer_2.svg" alt="" />
                </div>
                <div className>
                  <img src="./assets/Trash_1.svg" alt="" />
                </div>
              </div>
            </div>
            <div className>
              <p>Se solicito prestamo para pago de nomina y demas</p>
            </div>
          </div>
          <div className="font-bold ml-auto">
            <h6 className>10-02-2023</h6>
          </div>
        </div>
        <div className="md:w-40 flex justify-items-center items-center w-full rounded-r-2xl bg-red-300">
          <div className="text-3xl font-bold">
            <h4 className>+ $10,10</h4>
          </div>
        </div>
      </div>
      <div className="flex w-full border-solid rounded-2xl mb-4 justify-between">
        <div className="w-full h-20 bg-gray-200 px-3 flex">
          <div className>
            <div className=" ">
              <div className="flex font-bold">
                <h6>Agregado</h6>
                <div className="ml-3">
                  <img src="./assets/Eye_3.svg" alt="" />
                </div>
                <div className>
                  <img src="./assets/Equalizer_2.svg" alt="" />
                </div>
                <div className>
                  <img src="./assets/Trash_1.svg" alt="" />
                </div>
              </div>
            </div>
            <div className>
              <p>Se solicito prestamo para pago de nomina y demas</p>
            </div>
          </div>
          <div className="font-bold ml-auto">
            <h6 className>10-02-2023</h6>
          </div>
        </div>
        <div className="md:w-40 flex justify-items-center items-center w-full rounded-r-2xl bg-red-300">
          <div className="text-3xl font-bold">
            <h4 className>+ $10,10</h4>
          </div>
        </div>
      </div>
      <div className="flex w-full border-solid rounded-2xl mb-4 justify-between">
        <div className="w-full h-20 bg-gray-200 px-3 flex">
          <div className>
            <div className=" ">
              <div className="flex font-bold">
                <h6>Agregado</h6>
                <div className="ml-3">
                  <img src="./assets/Eye_3.svg" alt="" />
                </div>
                <div className>
                  <img src="./assets/Equalizer_2.svg" alt="" />
                </div>
                <div className>
                  <img src="./assets/Trash_1.svg" alt="" />
                </div>
              </div>
            </div>
            <div className>
              <p>Se solicito prestamo para pago de nomina y demas</p>
            </div>
          </div>
          <div className="font-bold ml-auto">
            <h6 className>10-02-2023</h6>
          </div>
        </div>
        <div className="md:w-40 flex justify-items-center items-center w-full rounded-r-2xl bg-red-300">
          <div className="text-3xl font-bold">
            <h4 className>+ $10,10</h4>
          </div>
        </div>
      </div>
      <div className="flex w-full border-solid rounded-2xl mb-4 justify-between">
        <div className="w-full h-20 bg-gray-200 px-3 flex">
          <div className>
            <div className=" ">
              <div className="flex font-bold">
                <h6>Agregado</h6>
                <div className="ml-3">
                  <img src="./assets/Eye_3.svg" alt="" />
                </div>
                <div className>
                  <img src="./assets/Equalizer_2.svg" alt="" />
                </div>
                <div className>
                  <img src="./assets/Trash_1.svg" alt="" />
                </div>
              </div>
            </div>
            <div className>
              <p>Se solicito prestamo para pago de nomina y demas</p>
            </div>
          </div>
          <div className="font-bold ml-auto">
            <h6 className>10-02-2023</h6>
          </div>
        </div>
        <div className="md:w-40 flex justify-items-center items-center w-full rounded-r-2xl bg-red-300">
          <div className="text-3xl font-bold">
            <h4 className>+ $10,10</h4>
          </div>
        </div>
      </div>
      <div className="flex w-full border-solid rounded-2xl mb-4 justify-between">
        <div className="w-full h-20 bg-gray-200 px-3 flex">
          <div className>
            <div className=" ">
              <div className="flex font-bold">
                <h6>Agregado</h6>
                <div className="ml-3">
                  <img src="./assets/Eye_3.svg" alt="" />
                </div>
                <div className>
                  <img src="./assets/Equalizer_2.svg" alt="" />
                </div>
                <div className>
                  <img src="./assets/Trash_1.svg" alt="" />
                </div>
              </div>
            </div>
            <div className>
              <p>Se solicito prestamo para pago de nomina y demas</p>
            </div>
          </div>
          <div className="font-bold ml-auto">
            <h6 className>10-02-2023</h6>
          </div>
        </div>
        <div className="md:w-40 flex justify-items-center items-center w-full rounded-r-2xl bg-red-300">
          <div className="text-3xl font-bold">
            <h4 className>+ $10,10</h4>
          </div>
        </div>
      </div>
      <div className="flex w-full border-solid rounded-2xl mb-4 justify-between">
        <div className="w-full h-20 bg-gray-200 px-3 flex">
          <div className>
            <div className=" ">
              <div className="flex font-bold">
                <h6>Agregado</h6>
                <div className="ml-3">
                  <img src="./assets/Eye_3.svg" alt="" />
                </div>
                <div className>
                  <img src="./assets/Equalizer_2.svg" alt="" />
                </div>
                <div className>
                  <img src="./assets/Trash_1.svg" alt="" />
                </div>
              </div>
            </div>
            <div className>
              <p>Se solicito prestamo para pago de nomina y demas</p>
            </div>
          </div>
          <div className="font-bold ml-auto">
            <h6 className>10-02-2023</h6>
          </div>
        </div>
        <div className="md:w-40 flex justify-items-center items-center w-full rounded-r-2xl bg-red-300">
          <div className="text-3xl font-bold">
            <h4 className>+ $10,10</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      </>
    );
  }