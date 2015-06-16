var cx = React.addons.classSet;

TodoItem = React.createClass({

    // TodoApp is the state owner and should be the one to manipulate the data
    // We pass the event handlers through TodoList to TodoApp
    handleToggle: function() {
        this.props.onToggle(this.props.task._id);
    },
    handleRemove: function() {

        // this.props.onRemove(this.props.task._id);
    },

    render: function() {
    	 

        var createdAt = this.props.task.createdAt.toString()
        var checkedButtonLabel = this.props.task.done ?
            (<i className="checkmark icon large "></i>) :
            (<i className="checkmark icon large disabled"></i>);

        var getColor = function(){
        	// console.log(colorVars);
        	var colorVars = ['red', 'blue', 'yellow', 'green'];
        	var i = Math.round(Math.random()*3);
        	return colorVars[i];
        }

        // Define the css classes using the classSet addon.
        var itemClasses = cx("ui task item blue", this.props.task.done ? '' : 'done')
        var segmentClasses = cx("ui segment", getColor(), "inverted"
            );
        var textClasses = cx("ui middle aligned header",
            this.props.task.done ? "red" : "");
        var removeClasses = cx("middle aligned ui right floated icon remove \
            large", this.props.task.done ? "disabled" : "");

        return (
            <div className={itemClasses}>
                <div className={segmentClasses}>
                    <div className="ui ribbon label small"
                        onClick={this.handleToggle}>
                        {checkedButtonLabel}
                    </div>
                    <span className={textClasses}>
                    
                    </span>
                   <i className={removeClasses} onClick={this.handleRemove}></i>
                </div>
            </div>
        )
    }

});
