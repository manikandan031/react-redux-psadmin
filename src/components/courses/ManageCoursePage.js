import React, {PropTypes} from 'react';
import {browserHistory} from 'react-router';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import CourseForm from './CourseForm';
import * as courseActions from '../../actions/courseActions';
import toastr from 'toastr';

class ManageCoursePage extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            course: Object.assign({},props.course),
            saving: false
        };
        this.onChange = this.onChange.bind(this);
        this.onSave = this.onSave.bind(this);
    }

    componentWillReceiveProps(newProps){
        if(this.props.course.id != newProps.course.id){
            this.setState({
                course: Object.assign({}, newProps.course)
            });
        }
    }

    onChange(event){
        let course = Object.assign({}, this.state.course);
        course[event.target.name] = event.target.value;
        this.setState({
            course: course
        });
    }

    onSave(event){
        event.preventDefault();
        this.setState({
            saving: true
        });
        this.props.actions.saveCourse(this.state.course).then(() => {
            browserHistory.push('/courses');
            toastr.success('Course Saved');
        }).catch(error => {
            toastr.error(error);
            this.setState({
                saving: false
            });
        });
    }

    render() {
        return (
            <div>
                <h2>Manage Course</h2>
                <CourseForm course={this.state.course} 
                            authors={this.props.authors} 
                            onSave = {this.onSave} 
                            onChange= {this.onChange}
                            saving={this.state.saving}
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