"use client";
import React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

function NavbarItem({ title, param }) {
  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  return (
    <div>
      <Link
        className={`hover:text-amber-600 font-semibold ${
          search === param
            ? "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"
            : ""
        }`}
        href={`/?search=${param}`}
      >
        {title}
      </Link>
    </div>
  );
}

export default NavbarItem;
