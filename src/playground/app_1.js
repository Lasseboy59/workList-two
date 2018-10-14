console.log('App.js is running!');

// JSX - JavaScript XML

const myApp = {
    title: 'Indecision App',
    subtitle: 'What to do today?',
    options: ['One', 'Two']
}

const template = (
    <div>  
        <h1>{myApp.title}</h1>
        { (myApp.subtitle) && <p>{myApp.subtitle}</p>}
        <p>{(myApp.options.length > 0) ? 'Here are your options' : 'No options'}</p>

        <ol>
            <li>Go to shop</li>
            <li>Make food</li> 
        </ol>
    </div>
);

// const user = {
//     name: 'Lauri',
//     age: 51,
//     location: 'Vantaa'
// };

// function getLocation(location) {
//     if(location){
//         return <p>Location: {location}</p>;
//     } else {
//        return undefined;
//     }
// }

// const template2 = (
//      <div>
//         <h1>{user.name ? user.name : 'Anonymous'}</h1>
//         { (user.age && user.age >= 18) && <p>Age: {user.age}</p>}
//         {getLocation(user.location)}
//      </div>
// );

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
