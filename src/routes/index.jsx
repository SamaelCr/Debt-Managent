
import {Link} from "react-router-dom";
export default function Root() {
    return (
      <>
         <body class="bg-gray-50">
            <section class="grid flex flex-wrap container mx-auto h-screen w-100">
                <div class="flex flex-col sm:flex-row w-full justify-center items-center">

                    <div class="w-100 max-w-lg" style={{width: "400px"}}>
                    <form class="bg-gray-200 shadow-xl text-center rounded-lg px-8 pt-6 pb-8 mb-4">

                        <div class="mb-4">
                        <label class="block text-gray-700 text-lg font-bold mb-2" for="username">
                            Usuario
                        </label>
                        
                        <input class="shadow appearance-none border rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                        </div>

                        <div class="mb-6">
                        <label class="block text-gray-700 text-lg font-bold mb-2" for="password">
                            Password
                        </label>

                        <input class="shadow appearance-none border border-red-500 rounded w-full py-4 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                    
                        </div>
                        <div class="flex flex-col items-center justify-between">
                        <Link to={"select"}>
                        <button class="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-4 rounded-lg focus:outline-none focus:shadow-outline" type="button" id="btn">
                            Sign In
                        </button>
                        </Link>
                        <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                            Forgot Password?
                        </a>
                        </div>
                    </form>
                    </div>
                </div>
            </section>
        </body>
      </>
    );
  }