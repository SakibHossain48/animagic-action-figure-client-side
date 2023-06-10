import React from 'react';
import useTitle from '../../Hooks/useTitle';

const Blog = () => {
    useTitle('Blog')
    return (
        <div className='py-10'>
            <div className='flex justify-around items-center'>
            <p className='text-center my-5 font-blog-qst-font-family font-extrabold text-6xl'>Q&A</p>
           
            </div>
            <div id='blog' >
        {/* Question : 1 section */}
        <div className='p-16'>
            <p>
                <span className="font-blog-q st-font-family mb-5 text-blog-qst-color text-2xl font-extrabold ">Question : 1</span>
                <br /> 
                <span className='qus font-blog-qus-font-family font-extrabold text-xl'>What is an access token and refresh token? How do they work and where should we store them on the client-side? </span>
            </p>
            <p>
                <span className="text-blog-ans-color font-extrabold text-xl font-blog-qst-font-family mb-5">Answer:</span>
                <br />
              
            </p>
            <p className='font-semibold'>
                Access token and Refresh Token:
            </p>
            <p>An access token is like a special key that allows a computer program to access certain things, like a locked room or a website. It is given to the program after a user logs in or gives permission.
            A refresh token is also given to the program at the same time, and it's like a backup key. When the access token gets old and stops working, the program can use the refresh token to get a new access token without bothering the user to log in again. <br />

            So, access tokens and refresh tokens are like keys that let computer programs do certain things without needing to ask the user for permission all the time.</p>
            <br />
            <p className='font-semibold'>How they work: </p>
            <p>
            Access tokens and refresh tokens are like special keys that apps use to do things for you securely. The access token is given when you log in and lets the app access your information. If it expires, the app uses the refresh token to get a new access token without you logging in again. This way, you can use apps easily without always entering your password. The tokens help keep things safe and ensure only authorized apps can act on your behalf.
            </p>
            <br />
            <p className='font-semibold'>
            client-side store :
            </p>
            <p>
            Store access tokens and refresh tokens securely on the client-side, preferably in memory, to ensure their protection and prevent unauthorized access.   
            </p>


        </div>
        <br />
        {/* Question : 2 section */}
        <div className='p-16'>
            <p>
                <span className="font-blog-qst-font-family mb-5 text-blog-qst-color text-2xl font-extrabold ">Question : 2 </span>
                <br /> 
                <span className='qus font-blog-qus-font-family font-extrabold text-xl'>Compare SQL and NoSQL databases? </span>
            </p>
            <p>
                <span className="text-blog-ans-color font-extrabold text-xl font-blog-qst-font-family mb-5">Answer:</span>
                <br />
                SQL databases are suitable for structured data with complex relationships and require strong consistency. NoSQL databases are more flexible, scalable, and handle unstructured or semi-structured data, prioritizing availability and scalability over strict consistency. The choice between SQL and NoSQL depends on the specific requirements and characteristics of the data and the application.
            </p>
        </div>
        <br />
        {/* Question : 3 section */}
        <div className='p-16'>
            <p>
                <span className="font-blog-qst-font-family mb-5 text-blog-qst-color text-2xl font-extrabold ">Question : 3</span>
                <br /> 
                <span className='qus font-blog-qus-font-family font-extrabold text-xl'>What is express js? What is Nest JS? </span>
            </p>
            
                <p>
                <span className="text-blog-ans-color font-extrabold text-xl font-blog-qst-font-family mb-5">Answer:</span>
                </p>
                <p  className='font-semibold'> Express Js : </p>
                <p>Express Js is a special tool that helps computer programmers build websites and apps. It's like a set of building blocks that make it easier to create cool things on the internet. Express Js is popular because it's simple to use and gives programmers a lot of freedom to design their websites or apps in their own way. It can handle things like showing web pages, handling user input, and connecting to databases. Lots of people like using Express.js because it's like having a big toolbox full of useful tools for building websites and apps.</p> <br />
                <p  className='font-semibold'> Next Js : </p>
                <p>Nest JS is a special tool that helps programmers build powerful websites and apps. It's organized, uses TypeScript for safety, and works well with other tools. It's a great choice for building awesome web applications.</p>
          
                
        </div>
        <br />
        {/* Question : 4 section */}
        <div className='p-16'>
            <p>
                <span className="font-blog-qst-font-family mb-5 text-blog-qst-color text-2xl font-extrabold ">Question : 4</span>
                <br /> 
                <span className='font-blog-qus-font-family font-extrabold text-xl'>What is MongoDB aggregate and how does it work? </span>
            </p>
            <p>
                <span className="text-blog-ans-color font-extrabold text-xl font-blog-qst-font-family mb-5">Answer: </span> </p>
                

                <p className='font-semibold'> MongoDB:</p>

                <p>MongoDB is a special type of computer system that helps store and manage data. It's like a big container where you can keep lots of information.  You can easily add, remove, or change data as needed. MongoDB also has powerful tools that allow you to search, group, and analyze the data in smart ways.</p> <br />

                <p className='font-semibold'>How MongoDB works:</p>

                <p>
                In MongoDB, the aggregate function is a special tool used to analyze and change data in a collection. It works by following a set of steps, like a pipeline, to do different operations on the data. First, you can choose which documents to use based on specific conditions. Then, you can group the data and do calculations within each group. After that, you can use different operations to do things like counting, summing, or sorting. Finally, you can sort the results and choose how many to show. By using these steps, the aggregate function helps us analyze and get valuable information from our data in MongoDB.
                </p>
            
        </div>
            </div>

    </div>
    );
};

export default Blog;