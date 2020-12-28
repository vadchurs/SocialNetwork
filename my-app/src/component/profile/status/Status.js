import React from 'react';


class Status extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    toggleEditMode = (editMode) => {
        this.setState({
            editMode
        });
        if (!editMode){
            this.props.updateStatus(this.state.status)
        }
    };

    onChangeStatus = (e) => {
        this.setState({
            status:e.target.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.state.status
            })
        }
    }

    render() {
        return (
            <>
                {this.state.editMode &&
                <div>
                    <input autoFocus={true} onBlur={()=>this.toggleEditMode(false)} type="text" value={this.state.status} onChange={this.onChangeStatus}/>
                </div>}
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={()=>this.toggleEditMode(true)}>{this.props.status || "---------"}</span>
                </div>}
            </>
        )
    }
}

export default Status;