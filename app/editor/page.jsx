"use client";
import { MarkdownEditor } from "@components/MarkdownEditor";
import React, { useEffect } from "react";
import { useState } from "react";

const EditorPage = () => {
  const [input, setInput] = useState("");
  useEffect(() => {
    setInput("");
  }, []);
  return (
    <div>
      <MarkdownEditor input={input} setInput={setInput} />
    </div>
  );
};

export default EditorPage;
