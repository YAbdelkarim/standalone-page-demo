import Link from "next/link";

const Crumb = ({ items }) => {
  if (!items || items.length === 0) return null;

  return (
    <div className="max-w-[1240px] mx-auto mt-[18px] mb-2 px-6 text-[13px] text-[var(--muted)]">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        if (isLast) {
          return (
            <span key={index} className="text-[var(--primary)] font-semibold">
              {item.label}
            </span>
          );
        }

        return (
          <span key={index}>
            <Link className="text-[var(--muted)]" href={item.href || "#"}>
              {item.label}
            </Link>
            <span className="mx-2 text-[#c3c8d0]">/</span>
          </span>
        );
      })}
    </div>
  );
};

export default Crumb;
