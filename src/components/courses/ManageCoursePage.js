import React, {PropTypes} from 'react';
import {browserHistory} from 'react-router';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import CourseForm from './CourseForm';
import * as courseActions from '../../actions/courseActions';

class ManageCoursePage extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            course: Object.assign({},props.course)
        };
        this.onChange = this.onChange.bind(this);
        this.onSave = this.onSave.bind(this);
    }

    onChange(event){
        let course = Object.assign({}, this.state.course);
        course[event.target.name] = event.target.value;
        this.setState({
            course: course
        });
    }

    onSave(){
        this.props.actions.saveCourse(this.state.course);
        browserHistory.push('/courses');
    }

    render() {
        return (
            <div>
                <h2>Manage Course</h2>
                <CourseForm course={this.state.course} 
                            authors={this.props.authors} 
                            onSave = {this.onSave} 
                            onChange= {this.onChange}
                            />
            </div>
        );
    }
}

ManageCoursePage.propTypes = {
    course: PropTypes.object,
    authors: PropTypes.array,
    actions: PropTypes.object
};

function mapStateToProps(state, props){
    let courseId = props.params.courseId;
    let course = state.courses.filter(course => course.id === courseId);
    if(course.length){
        return {
            course: course[0],
            authors: state.authors
        };
    }
    return {
        course: {},
        authors: state.authors
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);