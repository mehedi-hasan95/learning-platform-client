import React from 'react';

const Blog = () => {
    return (
        <div>
            <section className="bg-gray-800 text-gray-100">
                <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                    <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">Blog</p>
                    <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Some Importent Quesiton and it Answer</h2>
                    <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">What is cors?</summary>
                            <div className="px-4 pb-4">
                                <p>The full form of CORS is Cross-Origin Resource Sharing. When we make a request from the client site to the server site, an error appears in the browser console that says CORS policy failed. We have to solve it. The way we solve this is called CORS. CORS is an HTTP-header based mechanism that allows a server to share resources from sources other than its own. What CORS does is the browser makes a "preflight" request to the server hosting the cross-origin resource. After receiving this request, the server decides whether to provide the data or not. CORS sends headers in preflight that indicate the HTTP method.</p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">Why are you using firebase? What other options do you have to implement authentication?</summary>
                            <div className="px-4 pb-4">
                                <p>Firebase is a web and mobile development platform from Google. A very necessary part of any website is user login and registration. Through this, we can take the user's data and know whether the user is correct or not. We can login and register through firebase. We can register the user with much other information including email, google, GitHub, and Facebook. It ensures app security.
                                    We have some other options to implement authentication. These are AWS, Heroku, Azure, Parse Server, Hoodie, Back4App, and CloudKit.
                                </p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">How does the private route work?</summary>
                            <div className="px-4 pb-4 space-y-2">
                                <p>Sometimes we may have a situation where we don't allow any user to access without logging in. A private route works in this type of case. In a word, if the user wants to go to a specified page, he must login. Otherwise, it can redirect the user to a specific page. It could be the login page. That is, you first login, then access this resource.</p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">What is Node? How does Node work?</summary>
                            <div className="px-4 pb-4 space-y-2">
                                <p>Node JS is a JavaScript Run-Time Environment. Node.js is an open source server environment. NodeJS is built on Chrome's V8 JavaScript engine. NodeJS is a cross-platform JavaScript runtime environment through which JavaScript code can be executed on the server side. Node.js uses asynchronous programming.
                                    <br /><br /><strong className='text-violet-400'>Noteworthy among the things that can be done with Node JS</strong><br />
                                    Node.js can generate dynamic page content <br />
                                    Node.js can create, open, read, write, delete, and close files on the server <br />
                                    Node.js forms can collect data <br />
                                    Node.js can add, delete, modify data in your database <br />
                                </p>
                            </div>
                        </details>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;