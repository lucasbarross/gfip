import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import '../assets/navbar.css';
class StudentCard extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
            deleteEnabled: true
        };
    }

    deleteStudent = async event => {
        event.preventDefault();
        try {
            if(this.state.deleteEnabled) {
                this.setState({deleteEnabled: false})
                await this.props.deleteStudent(event.target.dataset.id); 
            }
        } catch (err) {
            this.setState({deleteEnabled: true});
            console.log(err.message);
        }
    }

    render() {
        let statusClass = this.props.student.pending ? "pending" : "ok";
        return (
            <a data-id={this.props.student._id} className="dashboard_studentCard" href={'/me/students/' + this.props.student._id}>
                <Icon disabled={this.state.deleteEnabled} data-id={this.props.student._id} className="dashboard_studentDelete_btn" onClick={this.deleteStudent} name="times rectangle" />
                <div className="container column centered">
                    <b><h3>{this.props.student.name}</h3></b>
                    <em><h5 style={{marginTop: 0}}>{this.props.student.username + "@cin.ufpe.br"}</h5></em>
                </div>
                <div className={"dashboard_statusBar " + statusClass}/>
            </a>
        );
  }
}

export default StudentCard;
