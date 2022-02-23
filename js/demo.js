/*
Exercise 1: 
  <h1 title="Hello" class="heading">Hello World</h1>
Solution 1: 
    const h1Element = React.createElement('h1', { title: 'Hello', className: 'heading' }, 'Hello World');
Exercise 2:
    <ul>
        <li>Javascript</li>
        <li>ReactJS</li>
    </ul>
Solution 2: 
    const ulELement = React.createElement('ul', null, 
    React.createElement('li', null, 'Javascript'),
    React.createElement('li', null, 'ReactJS')
);
Exercise 3:
    <div class="post-item"> 
        <h2 title="Learn ReactJS">Learn ReactJS</h2>
        <p>Learn ReactJS from basic to advance</p>
    </div>
Solution 3:
    const divElement = React.createElement('div', { className: 'post-item' }, 
    React.createElement('h2', { title: 'Learn ReactJS' }, 'Learn ReactJS'),
    React.createElement('p', null, 'Learn ReactJS from basic to advance'),
);
*/
// Now we are using JSX to learn ReactJS
const courses = [
    { 
        name: 'Javascript',   
    },
    { 
        name: 'ReactJS'   
    },
    { 
        name: 'NodeJS'    
    },
]
const jsx = (
    <React.Fragment>
         <h1 title="Hello" className="heading">Hello World</h1>    
         <ul>
            {courses.map((course, index)=> 
                <li key={index}>{course.name}</li>
            )}
        </ul>
        <div className="post-item"> 
            <h2 title="Learn ReactJS">Learn ReactJS</h2>
            <p>Learn ReactJS from basic to advance</p>
        </div>
    </React.Fragment>
)
function Header() {
    return (
        <div className="header">Header</div>
    )
}
class Content extends React.Component {
    render() {
        return (
            <div className="content">Content</div>
        )
    }
}
const componentJSX = (
    <div className="wrapper">
        <Header />
        <Content />
        <div className="footer">Footer</div>
    </div>
)
const root = document.getElementById('root');
ReactDOM.render(componentJSX, root);
