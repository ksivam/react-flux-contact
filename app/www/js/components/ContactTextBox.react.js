/**
 * Created by Aarthi on 9/3/15.
 */

var React = require('react'),
    ContactActions = require('../actions/ContactActions'),
    ReactPropTypes = React.PropTypes,
    Dom = React.DOM,
    ContactTextBox = React.createClass({
        displayName: 'ContactTextBox',
        propTypes: {
            key: ReactPropTypes.string.isRequired,
            className: ReactPropTypes.string,
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
            return Dom.input({
                className: this.props.className,
                id: this.props.id,
                placeHolder: this.props.placeHolder,
                value:  this.state.value,
                onChange: this._onChange,
                onBlur: this._save,
                autoFocus: true
            });
        },
        _onChange: function(event){
            this.setState({
               value: event.target.value
            });
        },
        _save: function() {
            var value = this.state.value;
            if(value){
                this.setState({
                    value: ''
                });
                ContactActions.add({
                    name: value,
                    status: 'Online'
                });
            }
        }

    });

module.exports = ContactTextBox;
