import React from 'react'

class ProfileStatus extends React.Component {


    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode =  () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode  = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatusTC(this.state.status)
    }

    onStatusChange = (e) => {
        let text = e.currentTarget.value
        this.setState({
            status: text
        })
    }

    render() {
        return(
            <div>
                <div>
                    <span onDoubleClick={ this.activateEditMode}> {!this.state.editMode && this.props.status}</span>
                </div>

                    {this.state.editMode &&
                    <div>
                        <input autoFocus onChange={this.onStatusChange} onBlur={ this.deactivateEditMode} value={this.state.status} /></div>}

            </div>
        )
    }
}

export default ProfileStatus