import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <div className="collapse h-full w-full">
                <input type="checkbox" /> 
                <div className="collapse-title text-xl font-medium text-white">
                   How does react work?
                </div>
                <div className="collapse-content"> 
                    <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.  React automatically updates the associated DOM element when we change data on a React element</p>
                </div>
                </div>



                <div className="collapse h-full w-full">
                <input type="checkbox" /> 
                <div className="collapse-title text-xl font-medium text-white">
                   Different between props and state
                </div>
                <div className="collapse-content"> 
                    <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.State can be updated in response to event handlers, server responses, or prop changes. This is done using the setState() method. The setState() method enqueues all of the updates made to the component state and instructs React to re-render the component and its children with the updated state.</p>
                </div>
                </div>



                <div className="collapse h-full w-full">
                <input type="checkbox" /> 
                <div className="collapse-title text-xl font-medium text-white">
                   Where can we use <code>useEffect()</code> rather then data load
                </div>
                <div className="collapse-content"> 
                    <p>The motivation behind the introduction of useEffect Hook is to eliminate the side-effects of using class-based components. By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we'll refer to it as our “effect”), and call it later after performing the DOM updates.</p>
                </div>
                </div>

                


                
            
        </div>
    );
};

export default Blog;