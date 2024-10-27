import React from 'react';

export function Avatar({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      className="w-16 h-16 rounded-full border border-gray-300"
    />
  );
}
