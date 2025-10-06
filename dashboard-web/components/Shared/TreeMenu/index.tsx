import Link from 'next/link';
import { useState } from 'react';
import { RiArrowDownSLine, RiArrowRightSLine } from 'react-icons/ri';

const TreeMenuItem = ({ item, depth = 0 }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleOpen = () => setIsOpen(!isOpen);

  const hasChildren = item.children && item.children.length > 0;

  return (
    <div className={`ml-${depth * 4}`}>
      {item.link ? (
        <Link
          href={item.link}
          className={`flex items-center py-2 px-3 rounded-md transition-colors duration-200 ${
            item.active
              ? 'bg-black text-white'
              : 'text-neutral-600 hover:bg-atrium-offWhite'
          }`}
        >
          {item.icon && <span className="mr-2">{item.icon}</span>}
          <span className={item.styleClass || ''}>{item.name}</span>
        </Link>
      ) : (
        <div
          className={`flex items-center justify-between py-2 px-3 rounded-md cursor-pointer ${
            item.styleClass || 'text-neutral-600 font-medium'
          }`}
          onClick={toggleOpen}
        >
          <span>{item.name}</span>
          {hasChildren && (
            <span className="text-neutral-400">
              {isOpen ? <RiArrowDownSLine size={20} /> : <RiArrowRightSLine size={20} />}
            </span>
          )}
        </div>
      )}
      {hasChildren && isOpen && (
        <div className="mt-1">
          {item.children.map((child) => (
            <TreeMenuItem key={child.id} item={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

const TreeMenu = ({ data }) => {
  return (
    <div className="space-y-3">
      {data.map((item) => (
        <TreeMenuItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default TreeMenu;
