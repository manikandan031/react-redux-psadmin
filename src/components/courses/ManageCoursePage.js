import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import CourseForm from './CourseForm';

class ManageCoursePage extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            course: {
                id: '',
                title: '',
                author: '',
                length: '',
                category: ''
            }
        };
    }

    onSave(){
        
    }

    render() {
        return (
            <div>
                <h2>Manage Course</h2>
                <CourseForm course={this.props.course} 
                            authors={this.props.authors} 
                            onSave = {this.onSave} 
                            />
            </div>
        );
    }
}

ManageCoursePage.propTypes = {
    course: PropTypes.object,
    authors: PropTypes.array
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

export default connect(mapStateToProps)(ManageCoursePage);