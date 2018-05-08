import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

class CourseForm extends React.Component {

    getAllAuthorOptions(){
        let authors = this.props.authors;
        let authorOptions = authors.map(author => {
            return {
                text: `${author.firstName} ${author.lastName}`,
                value: `${author.id}`
            };
        });
        return authorOptions;
    }

    render() {
        let course = this.props.course;
        let authorOptions = this.getAllAuthorOptions();
        return (
            <div>
                <TextInput name="title" 
                           placeholder="Course Title" 
                           label="Course Title" 
                           value={course.title} 
                           onChange={this.props.onChange} 
                           errors="" 
                           />
                <TextInput name="length" 
                           placeholder="Course Length" 
                           label="Course Length" 
                           value={course.length} 
                           onChange={this.props.onChange} 
                           errors="" 
                           />
                <TextInput name="category" 
                           placeholder="Course Category" 
                           label="Course Category" 
                           value={course.category} 
                           onChange={this.props.onChange}
                           errors="" 
                           />
                <SelectInput name="author" 
                             label="Authors"
                             options={authorOptions}
                             defaultOption="Select author"
                             onChange={this.props.onChange}
                            />
                <button type="submit" className="btn btn-primary" onClick={this.props.onSave}>Save</button>
            </div>
        );
    }
}

CourseForm.propTypes = {
    course: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired, 
    onSave: PropTypes.func.isRequired
};

export default CourseForm;