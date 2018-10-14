/*
const obj = {
    name: 'Lasse',
    getName() {
        return this.name;     
    }
};

const getName = obj.getName.bind(obj);

console.log(getName());
*/

class IndecisionApp extends React.Component {
    render() {
        const title = 'Shopping list';
        const subtitle = 'Select the items to your shopping list';
        const options = ['Thing One', 'Thing Two', 'Thing Three'];

        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options options={options}/>
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component{
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    handlePick(){
        alert('handle pick')
    }
    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should I buy?</button>
            </div>

        );
    }
}
  
class Options extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }
    handleRemoveAll() {
        console.log(this.props.options);
         // alert('remove all')

    }
    render() {

        return (
            <div>
                {
                    this.props.options.map((option)=> <Option key={option} optionText = {option}  />)
                }
                <button onClick={this.handleRemoveAll}>Remove all</button>
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                Option: {this.props.optionText}
            </div>
        );
    }
}

 

class AddOption extends React.Component {
    handdleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim()

        if (option) {
            alert(option)
            e.target.elements.option.value = '';
          } 
    }

    render() {
        return (
            <div>
            <form onSubmit={this.handdleAddOption}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
            </div>
        );
    }
}



ReactDOM.render(<IndecisionApp />, document.getElementById('app'));