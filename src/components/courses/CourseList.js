import React from 'react';
import { Link } from 'react-router';

class CourseList extends React.Component {
    showCourseRow(course, index) {
        return (
            <tr key={index}>
                <td><a href={course.watchHref} target="_blank">Watch</a></td>
                <td><Link to={'/course/' + course.id} >{course.title}</Link></td>
                <td>{course.authorId}</td>
                <td>{course.length}</td>
                <td>{course.category}</td>
            </tr>
        );
    }
    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Length</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.courses.map(this.showCourseRow)}
                </tbody>
            </table>
        );
    }
}

CourseList.propTypes = {
    courses: React.PropTypes.array.isRequired
};

export default CourseList;