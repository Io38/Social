import React from 'react';


class ProfileStatus extends React.Component {


    state = {

        editMode: false
    }

    editModeOn = () => {
        this.setState({
            editMode: true
        })
    }

    editModeOff = () => {
        this.setState({
            editMode: false
        })
    }

    render() {

        return <div>
            {
                this.state.editMode
                    ?
                    <input onBlur={this.editModeOff} autoFocus type="text" value={this.props.aboutMe} />
                    :
                    <span onClick={this.editModeOn}>{this.props.aboutMe}</span>
            }

        </div>
    }
}
export default ProfileStatus;