import React from "react";
import Login from "./brand/login";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <Login />
    </div>
  );
}
