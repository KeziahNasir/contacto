function Signup() {
    return (
        <div className="container mx-auto flex flex-col items-center p-8">
            <div className="w-full max-w-md">
                <form className="flex flex-col gap-6">
                    <div className="flex flex-col">
                        <label htmlFor="first-name" className="mb-2 font-medium text-gray-700">First Name</label>
                        <input
                            id="first-name"
                            type="text"
                            placeholder="First Name"
                            className="border border-gray-300 rounded-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-black"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="last-name" className="mb-2 font-medium text-gray-700">Last Name</label>
                        <input
                            id="last-name"
                            type="text"
                            placeholder="Last Name"
                            className="border border-gray-300 rounded-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-black"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="mb-2 font-medium text-gray-700">Email Address</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Email Address"
                            className="border border-gray-300 rounded-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-black"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="password" className="mb-2 font-medium text-gray-700">Password</label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Password"
                            className="border border-gray-300 rounded-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-black"
                        />
                    </div>

                     <div className="flex flex-col">
                        <label htmlFor="password" className="mb-2 font-medium text-gray-700">Confirm password</label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Confirm  password"
                            className="border border-gray-300 rounded-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-black"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-sky-500 text-white rounded-full py-3 px-6 font-semibold  focus:outline-none focus:ring-2 "
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Signup;