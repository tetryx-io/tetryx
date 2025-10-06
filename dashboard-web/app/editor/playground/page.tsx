"use client";
import { Suspense } from "react";
import EditorPlayground from "@/components/Pages/EditorPlayground";

const Agents = () => {
  return (
    <div className="min-h-screen">
      <div className="">
        <Suspense fallback={<div>Loading...</div>}>
          {" "}
          {/* TODO: # Add a fallback component that renders all the agent */}
          <EditorPlayground />
        </Suspense>
      </div>
    </div>
  );
};

export const dynamic = "force-dynamic";

export default Agents;
