import React from 'react'

class ProfileStatus extends React.Component {


    state = {
        editMode: false
    }

    setEditMode () {
        this.setState({
            editMode: true
        })
    }

    viewEditMode () {
        this.setState({
            editMode: false
        })
    }

    render() {
        return(
            <div>
                <div>
                    <span onDoubleClick={this.setEditMode.bind(this)}> {!this.state.editMode && this.props.status}</span>
                </div>

                    {this.state.editMode &&
                    <div>
                        <input autoFocus onBlur={this.viewEditMode.bind(this)} value={this.props.status} type={this.props.status}/></div>}

            </div>
        )
    }
}

export default ProfileStatus