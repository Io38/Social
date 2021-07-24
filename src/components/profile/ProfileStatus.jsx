import React from 'react';


class ProfileStatus extends React.Component {


    state = {

        editMode: false,
        status: this.props.status
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
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })

    }


    componentDidUpdate(prevProps, prevState) {

        if (prevProps.status !== this.props.status) {

            this.setState({
                status: this.props.status
            })
        }
    }

    render() {

        return <div>
            {
                this.state.editMode
                    ?
                    <input onBlur={this.editModeOff} autoFocus value={this.state.status} onChange={this.onStatusChange} />
                    :
                    <span onClick={this.editModeOn}>{this.state.status}</span>
            }

        </div>
    }
}
export default ProfileStatus;