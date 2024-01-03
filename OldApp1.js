import React from 'react';
import ReactDOM from 'react-dom/client';

/**
 * Header
 * - Logo
 * - Nav Items
 * Body
 *   - Search
 *   - Restaurant container
 *     - Card
 * Footer
 *  - Copyright
 *  - Links 
 *  - Address
 *  - Contact
 */

//  React Element 
const heading = <h1>Using JSX</h1>

// React functional Component
const Title = () => (
    <h1 className='title'>
        Namaster React for JSX
    </h1>
)
const HeadingComponent = () =>(
    <div>
        <Title />
        {/* We can use normal javscript inside curly brackets */}
        {heading}
        {Title()} 
  <     h1>Functional Component</h1>
    </div>
)

const HeadingComponent2 = () => ( <h1>Functional Component</h1> )

const root = ReactDOM.createRoot(document.getElementById('root'));

//root.render(heading);
root.render(<HeadingComponent />)