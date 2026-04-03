import type { Course } from "../types/course/course";

export const mockCourses: Course[] = [
  {
    id: 1,
    name: "hamisha-labs",
    displayName: "Intro to Hamisha",
    description: "Learn the basics of Hamisha.",
    difficulty: "Beginner",
    status: "Published",
    tags: ["tambalit", "mefagert"],
    thumbnailUrl: "https://placehold.co/300x200",
    environmentLink: "http://blabla",
    lessonCount: 5,
    owner: "Hamisha"
  },
  {
    id: 2,
    name: "hila-tambalit",
    displayName: "Hila the tambalit",
    description: "Learn the basics of hila.",
    difficulty: "Advanced",
    status: "Coming Soon",
    tags: ["tambalit"],
    thumbnailUrl: "https://placehold.co/300x200",
    environmentLink: "http://blabla2",
    lessonCount: 10,
    owner: "Hila"
  },
  {
    id: 3,
    name: "yael-dickner",
    displayName: "Yael Dickner",
    description: "Learn the basics of yael.",
    difficulty: "Intermediate",
    status: "New",
    tags: ["dickner"],
    thumbnailUrl: "https://placehold.co/300x200",
    environmentLink: "http://blabla3",
    lessonCount: 20,
    owner: "Dickner"
  }
];