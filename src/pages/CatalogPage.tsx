import { CourseCard } from "../components/CourseCard"
import { mockCourses } from "../data/MockCourses"

export const CatalogPage = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 py-10">
            <h1 className="text-3xl font-bold mb-8">Catalog</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockCourses.map(course => (
                <CourseCard key={course.id} course={course}/>
            ))}
            </div>
        </div>
    )
}


