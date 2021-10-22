import { Courses } from "../interfaces/Courses";
import {baseUrl} from '../config/const'

export async function fetchCourses(): Promise<Courses[]> {
  const res = await fetch(`${baseUrl}/courses`);
  const courses = await res.json();
  return courses;
}

export async function createCourse(
  newCourse: Courses
): Promise<any | null> {
  try {
    const res = await fetch(`${baseUrl}/courses`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newCourse),
    });
    const saveNewCourse = await res.json();
    if (saveNewCourse.id !== undefined) {
      return saveNewCourse;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
}
