"use client";

import Parents from "@/components/login/parents";
import Students from "@/components/login/students";
import Teacher from "@/components/login/teacher";

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
