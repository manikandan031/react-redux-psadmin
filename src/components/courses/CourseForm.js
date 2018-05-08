import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

class CourseForm extends React.Component {

    

    onChange(event){

    }
    
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
                <TextInput name="courseTitle" 
                           placeholder="Course Title" 
                           label="Course Title" 
                           value={course.title} 
                           onChange={this.onChange} 
                           errors="" 
                           />
                <TextInput name="length" 
                           placeholder="Course Length" 
                           label="Course Length" 
                           value={course.length} 
                           onChange={this.onChange} 
                           errors="" 
                           />
                <TextInput name="category" 
                           placeholder="Course Category" 
                           label="Course Category" 
                           value={course.category} 
                           onChange={this.onChange}
                           errors="" 
                           />
                <SelectInput name="Authors" 
                             label="Authors"
                             options={authorOptions}
                             defaultOption="Select author"
                            />
                <button type="submit" className="btn btn-primary" onSave={this.props.onSave}>Save</button>
            </div>
        );
    }
}

CourseForm.propTypes = {
    course: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired,
    onSave: PropTypes.func.isRequired
};

export default CourseForm;