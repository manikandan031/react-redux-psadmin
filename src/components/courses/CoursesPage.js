import React from 'react';
import {connect} from 'react-redux';
import CourseList from './CourseList';

class CoursesPage extends React.Component {

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
                <CourseList courses={this.props.courses} />
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

export default connect(mapStateToProps)(CoursesPage);