import DefaultButton from "../Shared/Button/DefaultButton";
import Link from "next/link";
import { RiFileCopyLine } from "react-icons/ri";

interface IDatasetCard {
  data: any;
  showClone?: boolean;
  showTags?: boolean;
  handleClone?: any;
}

const DatasetCard = ({
  data,
  showClone = false,
  showTags = true,
  handleClone = () => {},
}: IDatasetCard) => {
  const tags = data?.tags || [];
  const name = data?.name?.split(".")[0]?.replaceAll("?", "");

  return (
    <div className="flex flex-col cursor-pointer">
      <Link href={`/datasets/${data?.public_slug}`}>
        <div className="border rounded">
          <img
            src={
              data?.thumbnail
                ? data?.thumbnail
                : "/images/default_tb_thumnail.png"
            }
            alt="Dataset"
            className="border rounded"
          />
        </div>
        <div className="mt-3">
          <p className="text-md font-bold truncate">
            <i className="mr-2">{data?.icon}</i>
            <label>{name}</label>
          </p>
        </div>
      </Link>

      {showClone && (
        <div className="mt-2">
          <DefaultButton
            label="Clone"
            variant="default"
            size="medium"
            styleClass="rounded w-24"
            iconRight={<RiFileCopyLine className="w-5 h-5" />}
            onClick={() => handleClone(data)}
          />
        </div>
      )}

      {showTags && (
        <div className="flex flex-wrap mt-4 gap-2">
          {tags.map((tag: any, index: number) => (
            <DefaultButton
              key={index}
              label={tag}
              variant="default"
              styleClass="rounded px-2 bg-neutral-200 dark:bg-neutral-700 text-xs "
            ></DefaultButton>
          ))}
        </div>
      )}
    </div>
  );
};

export default DatasetCard;
