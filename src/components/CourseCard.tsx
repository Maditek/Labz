import { Link } from "react-router-dom";
import type { Course } from "../types/course/course";

type CourseCardProps = {
    course: Course
}

export const CourseCard = ( { course }: CourseCardProps ) => {
    return (
        <Link to={`/courses/${course.id}`}>
            <div className="p-4 border rounded-lg shadow hover:shadow-lg transition cursor-pointer">
                <h3> {course.displayName}</h3>
                <p> {course.description} </p>
                <p> {course.difficulty} </p>
                <p> {course.lessonCount} </p>
            </div>
        </Link>
    )
}