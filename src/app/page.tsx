import Link from "next/link";

const Home = () => {
    return (
        <div className="flex min-h-screen items-center justify-center">
            Click
            <Link href="/documents/123">
                <span className="text-blue-500 underline mx-2">here</span>
            </Link>
            to go to document id 123
        </div>
    );
};

export default Home;
