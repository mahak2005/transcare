// components/ui/badge.tsx
import React from "react";
import classNames from "classnames";

interface BadgeProps {
  status: "done" | "pending";
}

export const Badge: React.FC<BadgeProps> = ({ status }) => {
  const badgeColor = status === "done" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800";
  const badgeText = status === "done" ? "Done" : "Pending";

  return (
    <span
      className={classNames(
        "px-2 py-1 text-xs font-medium rounded-full",
        badgeColor
      )}
    >
      {badgeText}
    </span>
  );
};
