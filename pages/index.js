import React from "react";
import Signup from "./brand/signup";
import Login from "./brand/login";
import GetStarted from "../components/Getstarted";
import Dashboard from "./brand/dashboard";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <Login />
      {/* <Signup /> */}
      {/* <GetStarted/> */}
      {/* <Dashboard/> */}
    </div>
  );
}
