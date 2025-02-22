const Error404 = () => {
    return (
        <div class="min-h-screen flex flex-grow items-center justify-center bg-p-gray">
            <div class="rounded-lg bg-p-dwhite p-8 text-center shadow-xl">
                <h1 class="mb-4 text-4xl font-bold">404</h1>
                <p class="text-d-gray">Oops! The page you are looking for could not be found.</p>
                <a href="/" class="mt-4 inline-block rounded bg-p-blue px-4 py-2 font-semibold text-white hover:bg-blue-600"> Go back to Home </a>
            </div>
        </div>
    )
}

export default Error404;