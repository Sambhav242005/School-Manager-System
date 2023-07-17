"use client";

import Parents from "@/components/registration/parents";
import Students from "@/components/registration/students";
import Teacher from "@/components/registration/teacher";

export default function () {
  return (
    <>
      <div className="flex">
        <Students></Students>
        <Parents></Parents>
        <Teacher></Teacher>
      </div>
    </>
  );
}
