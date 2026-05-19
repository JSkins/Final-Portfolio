type Props = {
  type: "cross" | "lightning";
  color?: string;
  size?: number;
};

export default function Emblem({ type, color = "#f6ca4f", size = 140 }: Props) {
  if (type === "cross") {
    return (
      <svg width={size} height={size} viewBox="0 0 140 140" fill="none">
        {/* Two rotated rounded rectangles forming an X */}
        <rect
          x="39.75"
          y="1.25"
          width="60.5"
          height="137.5"
          rx="2"
          fill={color}
          transform="rotate(45 70 70)"
        />
        <rect
          x="39.75"
          y="1.25"
          width="60.5"
          height="137.5"
          rx="2"
          fill={color}
          transform="rotate(-45 70 70)"
        />
      </svg>
    );
  }

  return (
    <svg width={size} height={size} viewBox="0 0 140 140" fill="none">
      {/* Lightning bolt */}
      <path
        d="M85 10 L45 75 H72 L55 130 L110 55 H80 L95 10 Z"
        fill={color}
      />
    </svg>
  );
}
