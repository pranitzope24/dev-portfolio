type Props = {
  src: string;
  className?: string;
};

export function MonoIcon({ src, className }: Props) {
  return (
    <span
      className={className ?? "inline-flex h-5 w-5 text-text"}
      style={{
        WebkitMaskImage: `url(${src})`,
        maskImage: `url(${src})`,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        maskType: "alpha",
        backgroundColor: "currentColor",
        display: "inline-block",
      }}
      aria-hidden
    />
  );
}
