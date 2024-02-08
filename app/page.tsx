import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  return (
    <h1>
      <Link href={"/dashboard"}>Dashboard</Link>
    </h1>
  );
}
