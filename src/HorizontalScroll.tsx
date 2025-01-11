import React, { ReactNode } from "react";

interface HorizontalScrollProps {
  children: ReactNode;
}

const HorizontalScroll: React.FC<HorizontalScrollProps> = ({ children }) => {
  return (
    <div className="overflow-x-auto flex space-x-4 p-4 scrollbar-hide">
      {children}
    </div>
  );
};

export default HorizontalScroll;
