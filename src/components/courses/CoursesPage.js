import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            course: {
                title: ''
            }
        };
        this.onSave = this.onSave.bind(this);
        this.onTitleChange =this.onTitleChange.bind(this);
    }
    onTitleChange(event){
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({
            course : course
        });
    }
    onSave() {
        this.props.actions.createCourse(this.state.course);
    }
    createCourseRow(course, index){
        return (
            <div key={index}>
                {course.title}
            </div>
        );
    }
    render() {
        return (
            <div>
                <h2>Courses</h2>
                {this.props.courses.map(this.createCourseRow)}
                <h3>Add Course</h3>
                <div className="form-group">
                    <label htmlFor="title">Course Title</label>
                    <input type="text" 
                           className="form-control courseTitle" 
                           name="title" 
                           placeholder="Enter Title..." 
                           value={this.state.course.title}
                           onChange={this.onTitleChange}
                           />
                </div>
                <button type="submit" className="btn btn-default" onClick={this.onSave}>Submit</button>
            </div>
        );
    }
}

CoursesPage.propTypes = {
    courses: React.PropTypes.array,
    actions: React.PropTypes.object
};

function mapStateToProps(state, props) {
    return {
        courses: state.courses
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);