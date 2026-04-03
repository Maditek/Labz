import type { CourseDifficulty } from "./difficulty";
import type { CourseStatus } from "./status";


export type Course = {
    id: number;
    name: string;
    displayName: string;
    description: string;
    difficulty: CourseDifficulty;
    status: CourseStatus;
    tags: Array<string>;
    thumbnailUrl: string;
    environmentLink: string;
    lessonCount: number;
    owner: string;
}