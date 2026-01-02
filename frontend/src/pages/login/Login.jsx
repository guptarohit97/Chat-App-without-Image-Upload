
const Login = () => {
  return (
    <div class="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div class="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 class="text-3xl font-semibold text-center text-gray-300">
          Login
          <span class="text-blue-500"> ChatApp</span>
        </h1>
        <form >
          <div>
            <label class="label p-2">
              <span class="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username "
              class="input input-bordered w-full h-10"
            />
          </div>
          <div>
            <label class="label">
              <span class="text-base label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="Enter Password "
              class="input input-bordered w-full h-10"
            />
          </div>
          <a href="#" class="text-sm hover:text-blue-500 hover:underline inline-block mt-2">
            {"Don't"} have an account
          </a>
          <div class="mt-4">
            <button class="w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
