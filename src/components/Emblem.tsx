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
      <path
        d="M0 82.069L81.5576 0V57.931H140L58.0062 140V82.069H0Z"
        fill={color}
      />
    </svg>
  );
}
