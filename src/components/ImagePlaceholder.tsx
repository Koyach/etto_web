"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface ImagePlaceholderProps {
  src: string;
  alt: string;
  className?: string;
  width?: number; // Optional, useful for next/image if known
  height?: number; // Optional
  layout?: "fill" | "fixed" | "intrinsic" | "responsive"; // Legacy prop, but helpful concept
  objectFit?: "cover" | "contain";
}

export default function ImagePlaceholder({
  src,
  alt,
  className = "",
  objectFit = "cover",
}: ImagePlaceholderProps) {
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
  }, [src]);

  // Strip leading slash for easier reading in UI, but keep for src
  const displayPath = src.startsWith("/") ? src.slice(1) : src;

  if (error) {
    return (
      <div
        className={`bg-gray-800 border-2 border-dashed border-yellow-500 flex flex-col items-center justify-center p-4 text-center text-white ${className}`}
        style={{ minHeight: "200px" }}
      >
        <p className="text-yellow-400 font-bold mb-2">Image Not Found</p>
        <p className="text-xs text-gray-300 mb-1">Please save your image as:</p>
        <code className="bg-black/50 px-2 py-1 rounded text-yellow-200 font-mono text-sm break-all">
          public{src}
        </code>
        <button 
          onClick={() => setError(false)}
          className="mt-2 text-xs text-blue-400 hover:text-blue-300 underline"
        >
          Retry Loading
        </button>
        <p className="text-[10px] text-gray-500 mt-2">{alt}</p>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-neutral-900 ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-${objectFit}`}
        onError={() => setError(true)}
      />
    </div>
  );
}
