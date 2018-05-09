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
    showLoading(){
        return <div>Loading...</div>;
    }
    render() {
        return (
            <div>
                <h2>Courses</h2>
                {this.props.loading && this.showLoading()}
                {!this.props.loading && <CourseList courses={this.props.courses} />}
            </div>
        );
    }
}

CoursesPage.propTypes = {
    courses: React.PropTypes.array,
    actions: React.PropTypes.object,
    loading: React.PropTypes.bool
};

function mapStateToProps(state, props) {
    return {
        courses: state.courses,
        loading: state.numberOfAjaxCalls > 0
    };
}

export default connect(mapStateToProps)(CoursesPage);