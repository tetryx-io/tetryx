"use client";
import { Suspense } from "react";
import AgentSearch from "@/components/Pages/Search";
import Link from "next/link";

const Agents = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Suspense fallback={<div>Loading...</div>}>
          {" "}
          {/* TODO: # Add a fallback component that renders all the agent */}
          <AgentSearch />
        </Suspense>
      </div>
    </div>
  );
};

export default Agents;
