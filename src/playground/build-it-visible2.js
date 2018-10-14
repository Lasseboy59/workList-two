
let visibility = false;
let stringA = '';
/*
const toggleVisibility = () => {
    visibility = !visibility;
    if(visibility){
        stringA = 'Now you see me';
    } else {
        stringA = '';
    }
    render();
};
*/

/*
const render = () => {
    const jsx = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>
                {visibility ? 'Hide details' : 'Show detail'}
            </button>
            <p>{stringA}</p>
        </div>
    );


    ReactDOM.render(jsx, document.getElementById('app'));
};
*/

const toggleVisibility = () => {
    visibility = !visibility;
    render();
};


const render = () => {
    const jsx = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>
                {visibility ? 'Hide details' : 'Show detail'}
            </button>
            {visibility && (
                <div>
                 <p>Hey, these are some details you can now see.</p>
                </div>
            )}
        </div>
    );


    ReactDOM.render(jsx, document.getElementById('app'));
};

render();