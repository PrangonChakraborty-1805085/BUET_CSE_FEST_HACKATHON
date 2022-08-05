import React from "react";
import Certificate from "../../components/body/Certificate";
import Navbar from "../../components/Navbar";
import { useStateValue } from "../../StateProvider";

export default function index() {
  const [{ user, certificates }, dispatch] = useStateValue();
  return (
    <div>
      <Navbar />
      <div class="flex flex-col text-center w-full mb-20 mt-100">
        <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
          CourseZila
        </h2>
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          My Achievements
        </h1>
      </div>
      <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5 py-24 mx-auto">
          <div class="-my-8 divide-y-2 divide-gray-100">
            {certificates?.map((certificate) => (
              <Certificate
                key={certificate.id}
                id={certificate.id}
                title={certificate.title}
                name={certificate.name}
                email={certificate.email}
                date={certificate.date}
                cid={certificate.cid}
                account={certificate.account}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
