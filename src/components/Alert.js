const Alert = (props) => {
    return (
        <div className="flex align-center justify-center absolute">
            <div
                role="alert"
                className="mx-auto max-w-lg rounded-lg border border-p-gray bg-stone-100 p-4 shadow-lg drop-shadow-lg sm:p-6 lg:p-8 bg-p-white text-d-gray "
            >
                <div className="flex items-center gap-4">
                    <span className="shrink-0 rounded-full bg-emerald-400 p-2 text-white bg-p-pink">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-4 w-4"
                        >
                            <path
                                // fill-rule="evenodd"
                                d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
                            // clip-rule="evenodd"
                            ></path>
                        </svg>
                    </span>

                    <p className="font-semibold sm:text-lg text-emerald-600">Registration {props.status === 'success' ? 'Success' : 'Failed'}!</p>
                </div>

                <p className="mt-4 text-gray-600 text-sm">
                    {props.message}
                </p>

                {props.status === 'success' &&
                    <div className="mt-6 sm:flex sm:gap-4">
                        <a href="/login" className="inline-block w-full rounded-lg bg-p-pink px-4 py-2 text-center text-sm font-semibold text-white sm:w-auto text-p-white">
                            Proceed
                        </a>
                    </div>
                }
            </div>
        </div>
    )
}

export default Alert;