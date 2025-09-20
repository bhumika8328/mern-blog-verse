 import NavBar from "./NavBar.jsx"
const Home = () => {
    const posts = [{
        id: 1,
        title: "Getting Started with React and Tailwind CSS",
        author: "Prem Sagar",
        timeRead: " 5 min read",
        postedOn: "Jan 10, 2024",
        content: "React and Tailwind CSS are a powerful combination for building modern web applications. In this article, we'll explore how to set up a React project with Tailwind CSS and create a simple responsive layout.",
        Image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        profilePic: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    }, {
        id: 2,
        title: "Understanding JavaScript Closures",
        author: "Asha Deepthi",
        timeRead: " 7 min read",
        postedOn: "Dec 05, 2023",
        content: "JavaScript closures are a fundamental concept that every developer should understand. In this article, we'll dive deep into closures, how they work, and practical examples of their usage.",
        Image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        profilePic: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    }, {
        id: 3,
        title: "A Guide to Responsive Web Design",
        author: "Alekhya Rani",
        timeRead: " 6 min read",
        postedOn: "Nov 20, 2023",
        content: "Responsive web design is essential in today's mobile-first world. This guide will walk you through the principles of responsive design and how to implement them using CSS and modern frameworks.",
        Image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        profilePic: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    }, {
        id: 4,
        title: "Exploring the New Features of ES2021",
        author: "Sravanthi",
        timeRead: " 8 min read",
        postedOn: "Oct 01, 2023",
        content: "ES2021 introduces several new features that enhance the JavaScript language. In this article, we'll explore these features and how they can improve your code.",
        Image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        profilePic: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    }, {

        id: 5,
        title: "Mastering Flexbox for Layout Design",
        author: "Leela Avinash",
        timeRead: " 10 min read",
        postedOn: "Sep 15, 2023",
        content: "Flexbox is a powerful layout module in CSS that allows for flexible and responsive design. This article will guide you through the basics of Flexbox and how to use it effectively in your projects.",
        Image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        profilePic: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",

        Image: "",
        profilePic: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },

    {
        id: 6,
        title: "Introduction to TypeScript for JavaScript Developers",
        author: "Charan Teja",
        timeRead: " 9 min read",
        postedOn: "Aug 10, 2023",
        content: "TypeScript is a superset of JavaScript that adds static typing and other features to enhance developer productivity. This introduction will cover the basics of TypeScript and how to get started.",
        Image: "",
        profilePic: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    }]
    return (
        <div className="flex flex-col items-center">
            <p className="text-4x1 font bold"> welcome  to blog verse</p>
            <p className="text-lg text-gray-500 mt-5">disover amazing stories insights,and ideas from our community of writers.  </p>
            <div className="flex gap=11 justify around-5">
                <button className="px-0.2 py-3.5 cursor pointer bg-blue-600 hover:bg-blue-800 shadow-md text-white rounded-md">sign in</button>
                <p >className="to create your own posts and save your favorites"</p>
                <p flex-col>sarah johnson</p>

            </div>
            <div>
                {
                posts.map((posts) => (
                    <div className="relative">
                        <img className="rounded-t-lg shadow-lg" key={posts.image} alt="writing" />
                        <button className="p-3 text-sm bg-white rounded-full absolutecursor-pointer right-4 top-3">save</button>
                    </div>



                )

                )}


            </div>

        </div>

    )





}

export default Home;