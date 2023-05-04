import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const Blog = () => {
    const downloadPdf = () => {
        const capture = document.getElementById('main-blog')
        html2canvas(capture).then((canvas) => {
            const image = canvas.toDataURL('../../../assets/banner.avif')
            const doc = new jsPDF('p', 'mm', 'a4');
            const docHeight = doc.internal.pageSize.getHeight();
            const docWidth = doc.internal.pageSize.getWidth();
            doc.addImage(image, "PNG", 0, 0, docHeight, docWidth)
            doc.save('blog.pdf')

        })

    }
    return (
        <div>
            <div className='text-center'>
                <button className='btn btn-secondary' onClick={downloadPdf}>DownLoad</button>
            </div>
            <div id='main-blog'>
                <div>
                    <div className='border-spacing-2 border h-32 w-11/12 mx-auto items-center'>
                        <h1 className='my-5 text-2xl'>1. Differences between uncontrolled and controlled components.</h1>
                        <h3 className='text-black'><strong>Ans :</strong> Controlled components controlled by the parent components, Uncontrolled components refer to components that manage their own state internally</h3>
                    </div>
                    <div>
                        <h1>2. How to validate React props using PropTypes?</h1>
                        <h2>1. Import PropTypes from the 'prop-types' library:
                            2. Define the PropTypes for your component. You can define PropTypes for each prop that your component expects by adding them as properties to the component class:
                            3. Use the defined PropTypes to validate the props passed to your component. You can access the props using the 'this.props' object</h2>


                        <h1>3. What is the difference between nodejs and express js.</h1>
                        <h3>Node.js is a runtime environment, while Express.js is a web framework built on top of Node.js. Node.js provides the platform for executing JavaScript code on the server-side, while Express.js provides a set of tools and features for building web applications on top of Node.js.</h3>

                        <h1>4. What is a custom hook, and why will you create a custom hook?</h1>
                        <h2>Custom hooks allow developers to extract commonly used logic from components and package them into a reusable hook function that can be shared across different components or even across different projects.</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;