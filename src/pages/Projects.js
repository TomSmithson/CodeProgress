import React, {Component} from "react";
import {auth} from "../services/firebase";
import {db} from "../services/firebase";

export default class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: auth().currentUser,
            projects: [],
            content: "",
            readError: null,
            writeError: null,
        };
    }

    async componentDidMount() {
        this.setState({readError: null});
        try {
            db.ref("projects").on("value", snapshot => {
                let projects = [];
                snapshot.forEach((snap) => {
                    projects.push(snap.val());
                });
                this.setState({projects});
            });
        } catch (error) {
            this.setState({readError: error.message});
        }
    }

    render() {
        return (
            <div>
                <div className="projects">
                    {this.state.projects.map(project => {
                        return <p key={project.timestamp}>{project.content}</p>
                    })}
                </div>
                <div>
                    Logged in as: <strong>{this.state.user.email}</strong>
                </div>
            </div>
        );
    }
}