import React from "react";
import Course from "./Course";
import {courses} from '../../Data'

export default function Courses() {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
          {
            courses.map(course=>(
              <Course key={course.id} id={course.id} title={course.title} desc={course.desc} price={course.price} />
            ))
          }
          </div>
        </div>
      </section>
    </div>
  );
}
