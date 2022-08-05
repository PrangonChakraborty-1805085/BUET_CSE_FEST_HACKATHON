import React from "react";
import { useStateValue } from "../../StateProvider";
import EnrolledCourse from "../../components/body/EnrolledCourse";
import Navbar from "../../components/Navbar";

export default function index() {
    const [{enrolled},dispatch]=useStateValue();
    console.log("enrolled are ",enrolled);
  return (
    <div>
      <Navbar/>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
              CourseZila
            </h2>
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">
             Enrolled Courses
            </h1>
          </div>
          <div class="flex flex-wrap -m-4">
          {enrolled ?.map(course=><EnrolledCourse key={course.id} id={course.id} title={course.title} desc={course.desc} price={course.price}/>)}
          </div>
        </div>
      </section>
    </div>
  );
}
