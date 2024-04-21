/**
 * <div id='parent'>
 *      <div id='child1>
 *          <h1>This is h1 of child1</h1>
 *          <h2>This is h2 of child1</h2>
 *      </div>
 *      <div id='child2>
 *          <h1>This is h1 of child2</h1>
 *          <h2>This is h2 of child2</h2>
 *      </div>
 *      
 * </div>
 * 
 */



const heading = React.createElement('div', {id: 'parent', xyz:'xyz'},
    [React.createElement('div', {id: 'child1'}, 
    [React.createElement('h1', {}, 'This is h1 of child1'),
    React.createElement('h2', {}, 'This is h2 of child1')]
    ),

    React.createElement('div', {id: 'child2'}, 
    [React.createElement('h1', {}, 'This is h1 of child2'),
    React.createElement('h2', {}, 'This is h2 of child2')]
    )]
);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading)