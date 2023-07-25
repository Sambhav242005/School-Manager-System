"use client";

import { usePathname } from "next/navigation";

export default function MyServerComponent() {
  const id = usePathname()?.split("/").reverse().at(0);
  return (
    <>
      <div>
        <p>{id}</p>
      </div>
    </>
  );
  // Rest of your code using navigation...
}
