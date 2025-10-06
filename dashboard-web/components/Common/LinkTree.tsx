import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { NodeRendererProps, Tree } from "react-arborist";

function Node({ node, style, dragHandle }: NodeRendererProps<any>) {
  const observer = useRef<any>();

  useEffect(() => {
    const handleObsever = (entries) => {};

    observer.current = new IntersectionObserver(handleObsever, {
      rootMargin: "-20% 0% -35% 0px",
    });

    return () => observer.current?.disconnect();
  }, []);

  let title_class = "h-fit my-2 text-md wrap";
  switch (node.data.type) {
    case "page":
      title_class += "font-light text-gray-700";
      break;
    case "heading_1":
      title_class += " text-gray-600";
      break;
    case "heading_2":
      title_class += "font-light text-gray-500 dark:text-gray-400";
      break;
    case "heading_3":
      title_class += "font-extralight text-gray-400 dark:text-gray-500";
      break;
    default:
      title_class += "font-thin text-black dark:text-white";
  }

  let link_to = "";
  if (node.data.path_link) {
    link_to = node.data.path_link;
  } else if (node.data.hash_link) {
    link_to = `#${node.data.hash_link}`;
  }

  return (
    <Link href={link_to.replaceAll('?', '')}>
      <div className={title_class} style={style}>
        {node.data.title}
      </div>
    </Link>
  );
}

const LinkTree = ({ data }) => {
  return (
    <Tree
      data={data}
      openByDefault={true}
      className={"w-full"}
      rowClassName={"w-full break-normal h-96"}
      disableEdit={true}
      disableDrag={true}
      indent={20}
      overscanCount={20}
      rowHeight={64}
    >
      {Node}
    </Tree>
  );
};

export default LinkTree;
