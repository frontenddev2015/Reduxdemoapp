import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addReminder } from '../actions';



class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			text: ''
		}
	}

	addReminder() {
	 this.props.addReminder(this.state.text);
    }

    renderReminder() {
    	const { reminders } = this.props;
    	return (
    		  <ul className="list-group col-sm-4">
    		  {
    		  	reminders.map(reminder=> {
    		  		return(
    		  		<li key={reminder.id} className="list-group-item">
    		  		  <div> {reminder.text} </div>
    		  		</li>
    		  		)
    		  	})
    		  }
    		  </ul>
    		)
    }

	render () {
		return (
			  <div className="App">
			    <div className="title">
			      Reminder Pro
			    </div>
			    <div className="form-inLine reminder-form">
                  <div className="form-group>">
                    <input
                      className="form-control" 
                      placeholder="I have to..." 
                      onChange = {event => this.setState({text: event.target.value})}
                    />
                    
                    
                    <button type="button" 
                     className="btn btn-success" 
                     onClick={()=> this.addReminder()}> 
                      Add Reminder
                    </button>
                  </div>
			    </div>
			    {this.renderReminder()}
			  </div>
			)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({addReminder}, dispatch);
}

function mapStateToProps(state) {
	return {
		reminders: state
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(App);