import { useAuth } from "../../hooks/useAuthHook";






const RegisterPage = () => {
    let {navigate,register,handleSubmit,errors,registerForm} = useAuth()
  




  return (
    <div
      className="
        flex
        min-h-screen
        px-4 py-10
        bg-[#0b0b0b]
        items-center justify-center
      "
    >
      <div
        className="
          w-full max-w-md
        "
      >
        {/* Logo / Heading */}
        <div
          className="
            mb-8
            text-center
          "
        >
          <h1
            className="
              text-4xl font-bold text-white
            "
          >
            SKY{" "}
            <span
              className="
                text-lime-400
              "
            >
              Mart
            </span>
          </h1>

          <p
            className="
              mt-2
              text-gray-400
            "
          >
            Create your account and start shopping.
          </p>
        </div>

        {/* Register Card */}
        <div
          className="
            p-8
            bg-[#111111]
            border border-gray-800 rounded-3xl
            shadow-2xl
          "
        >
          <h2
            className="
              mb-6
              text-2xl font-semibold text-white
            "
          >
            Create Account
          </h2>

          {/* Name Input */}
          <form onSubmit={handleSubmit(registerForm)}>
            <div
              className="
                mb-5
              "
            >
              <label
                className="
                  block
                  mb-2
                  text-gray-300 text-sm font-medium
                "
              >
                Name
              </label>

              <input 
                {...register("name",{
                  required:"Name is required",
                })}
                type="text"
                placeholder="Enter your name"
                className="
                  w-full
                  px-4 py-3
                  text-white placeholder-gray-500
                  bg-[#0b0b0b]
                  border border-gray-700 rounded-xl
                  outline-none transition duration-300 focus:border-lime-400 focus:ring-1 focus:ring-lime-400
                "
              />
              {errors.name && <p className="text-red-500 text-sm mb-2">{errors.name.message}</p>}
            </div>

          {/* Email Input */}
          <div
            className="
              mb-5
            "
          >
            <label
              className="
                block
                mb-2
                text-gray-300 text-sm font-medium
              "
            >
              Email Address
            </label>

            <input 
                {...register("email",{
                required:"Email is required",
                pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email address"
                }
            })}
              type="email"
              placeholder="Enter your email"
              className="
                w-full
                px-4 py-3
                text-white placeholder-gray-500
                bg-[#0b0b0b]
                border border-gray-700 rounded-xl
                outline-none transition duration-300 focus:border-lime-400 focus:ring-1 focus:ring-lime-400
              "
            />
          {errors.email && <p className="text-red-500 text-sm mb-2">{errors.email.message}</p>}
          </div>

          {/* Password Input */}
          <div
            className="
              mb-6
            "
          >
            <label
              className="
                block
                mb-2
                text-gray-300 text-sm font-medium
              "
            >
              Password
            </label>

            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters"
                }
              })}
              type="password"
              placeholder="Create a password"
              className="
                w-full
                px-4 py-3
                text-white placeholder-gray-500
                bg-[#0b0b0b]
                border border-gray-700 rounded-xl
                outline-none transition duration-300 focus:border-lime-400 focus:ring-1 focus:ring-lime-400
              "
            />
          {errors.password && <p className="text-red-500 text-sm mb-2">{errors.password.message}</p>}   
          </div>  
          {/* </form> */}

          {/* Register Button */}
          <button
            type="submit"
            className="
              w-full
              py-3
              text-black font-semibold
              bg-lime-400
              rounded-xl
              hover:bg-lime-300 transition duration-300
            "
          >
            Register
          </button>
          </form>

          {/* Login Section */}
          <div
            className="
              flex
              my-7
              items-center gap-3
            "
          >
            <div
              className="
                flex-1
                h-px
                bg-gray-800
              "
            ></div>

            <span
              className="
                text-gray-500 text-sm
              "
            >
              OR
            </span>

            <div
              className="
                flex-1
                h-px
                bg-gray-800
              "
            ></div>
          </div>

          <p
            className="
              text-center text-gray-400 text-sm
            "
          >
            Already have an account?
            <button 
              onClick={() => navigate("/")}
              type="button"
              className="
                ml-2
                text-lime-400 font-semibold
                hover:text-lime-300 transition duration-300
              "
            >
              Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};



export default RegisterPage

