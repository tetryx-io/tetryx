import Link from "next/link";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { clsx } from "clsx";

const OmniLink = (props) => {
  const { href, className, children, external, disabled } = props;
  const regEx = /^http/;
  const componentClass = "relative h-8 w-8 ...";
  const componentClass_1 = "relative h-8 w-8 ...";

  let { show_external_icon } = props;
  show_external_icon = !!show_external_icon || !!external;

  const Component = (componentClass) => {
    return (
      <div className={clsx(className, "relative group")}>
        {children}
        {show_external_icon && (
          <ArrowTopRightOnSquareIcon
            className={clsx(
              componentClass,
              "absolute top-0 -right-1.5 h-3 w-3 group-hover:scale-110 group-hover:translate-x-1.5 hidden group-hover:block group-hover:-translate-y-1.5 transition-transform duration-300"
            )}
          />
        )}
      </div>
    );
  };

  if (disabled) {
    return (
      <span className={clsx(className, disabled ? "opacity-50" : "")}>
        <Component />
      </span>
    );
  }

  return regEx.test(href) ? (
    <a
      className={clsx(className, disabled ? "opacity-50" : "")}
      target={external ? "_blank" : ""}
      href={href}
    >
      <Component />
    </a>
  ) : (
    <Link
      href={href}
      passHref={external}
      className={clsx(className, disabled ? "opacity-50" : "", "relative p-2")}
    >
      <Component />
    </Link>
  );
};

export default OmniLink;
