import React from 'react';
import { Courses } from '../interfaces/Courses'

type CoursesItemProps = {
    course: Courses
}

 const CoursesItems = (props: CoursesItemProps) => {
     let courses = props.course
    return (
        <li>
            {courses.number} - {courses.title}
        </li>
    )
}

export default  CoursesItems
