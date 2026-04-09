import { useParams } from "react-router-dom"
import { mockCourseContent } from "../data/MockCourseContent"
import { NotFoundPage } from "./NotFoundPage"

export const CoursePage = () => {
    const { courseId } = useParams<{ courseId: string }>()

    const content  = courseId ? mockCourseContent[courseId] : null

    if (!content) {
        return <NotFoundPage/>
    }

    return (
        <div className="max-w-5xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold mb-6">Course {courseId}</h1>

        <p className="text-gray-700">
            {content}
        </p>
        </div>
    )
}