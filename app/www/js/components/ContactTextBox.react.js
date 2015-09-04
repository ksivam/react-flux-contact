/**
 * Created by Aarthi on 9/3/15.
 */

var React = require('react');
var ReactPropTypes = React.PropTypes;

var ContactTextBox = React.createClass({
    propTypes: {
        className: ReactPropTypes.string,
        id: ReactPropTypes.string,
        placeholder: ReactPropTypes.string,
        //onSave: ReactPropTypes.func.isRequired,
        value: ReactPropTypes.string
    },
    getInitialState: function() {
        return {
            value: this.props.value || ""
        }
    },
    render: function() {
        return (
            <input
                className={this.props.className}
                id={this.props.id}
                placeholder={this.props.placeholder}
                onKeyUp={this._save}
                value={this.state.value}
                onChange={this._onChange}
                autoFocus={true}/>
        );
    },
    _save: function() {
        console.log(this.state.value);
    },

    _onChange: function(event){
        this.setState({
           value: event.target.value
        });
    }
});

module.exports = ContactTextBox;
