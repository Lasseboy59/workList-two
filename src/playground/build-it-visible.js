

const app = {
    title: ' Visibility Toggle',
    subtitle: 'Here some details you can see toggle.'
}

let stringA = '';
let count = 0;
const addOne = () => {

    count++;
    stringA = app.subtitle;
    if(count % 2 ){
        stringA = '';
    }
    renderApp();
};


const appRoot = document.getElementById('app');

const renderApp = () => {
    const template = (
        <div>  
            <h1>{app.title}</h1>
            <button onClick={(addOne)}>Show details</button> 
            <br></br>
            <p>{stringA}</p>

        </div>
    );
    ReactDOM.render(template, appRoot);
}

renderApp();
