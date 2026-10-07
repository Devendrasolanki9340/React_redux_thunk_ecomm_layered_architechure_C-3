import { useAuth } from "../../hooks/useAuthHook"







const LoginPage = () => {
  let {navigate,register, handleSubmit,errors, loginForm} = useAuth()

   

  return (
     <div className="min-h-screen bg-[#0b0b0b] flex items-center justify-center px-4 py-10">
      
      <div className="w-full max-w-md">
        
        {/* Logo / Heading */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white">
            SKY <span className="text-lime-400">Mart</span>
          </h1>

          <p className="text-gray-400 mt-2">
            Welcome back! Please login to your account.
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-[#111111] border border-gray-800 rounded-3xl p-8 shadow-2xl">
          
          <h2 className="text-2xl font-semibold text-white mb-6">
            Login
          </h2>


          <form onSubmit={handleSubmit(loginForm)}>
            {/* Email Input */}
            <div className="mb-5">
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Email Address
              </label>

            <input 
               {...register("username", {
                required: "Username is required",
                // pattern: {
                //   value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                //   message: "Invalid email address"
                // }
              })}
              type="text"
              placeholder="Enter your username"
              className="w-full bg-[#0b0b0b] border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 outline-none transition duration-300 focus:border-lime-400 focus:ring-1 focus:ring-lime-400"
            /> 
             {/* { errors.email && <p className="text-red">{errors.email.message}</p> } */}
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label className="block text-gray-300 text-sm font-medium mb-2">
              Password
            </label>

            <input 
               {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long"
                }
              })}
              type="password"
              placeholder="Enter your password"
              className="w-full bg-[#0b0b0b] border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 outline-none transition duration-300 focus:border-lime-400 focus:ring-1 focus:ring-lime-400"
            /> 
            { errors.password && <p className="text-red">{errors.password .message}</p> }
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-lime-400 hover:bg-lime-300 text-black font-semibold py-3 rounded-xl transition duration-300"
          >
            Login
          </button>
          </form>

          {/* Register Section */}
          <div className="flex items-center gap-3 my-7">
            <div className="h-px bg-gray-800 flex-1"></div>

            <span className="text-gray-500 text-sm">
              OR
            </span>

            <div className="h-px bg-gray-800 flex-1"></div>
          </div>

          <p className="text-center text-gray-400 text-sm">
            Don't have an account?
            <button 
              onClick={()=> navigate('/register')}
              type="button"
              className="ml-2 text-lime-400 hover:text-lime-300 font-semibold transition duration-300"
            >
              Register
            </button>
          </p>

        </div>

      </div>
    </div>
  )
}




export default LoginPage

