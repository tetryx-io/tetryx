import { getTimeDifference, getTimeDifferenceString } from '@/lib/utils';
import { clsx } from 'clsx';
import React from 'react';
import { FaFilePdf, FaFileExcel, FaFileCsv, FaFile } from 'react-icons/fa6';
import { RiDownloadLine, RiEyeLine, RiDeleteBin6Line } from 'react-icons/ri';

interface FileCardProps {
  file: {
    id: string;
    original_name: string;
    type: string;
    presigned_url: string;
    _cr: string;
  };
  onRemove: (id: string) => void;
}

const FileCard: React.FC<FileCardProps> = ({ file, onRemove }) => {
  const getFileIcon = (fileType: string) => {
    switch (fileType) {
      case 'application/pdf':
        return <FaFilePdf size={20} className="text-red-600" />;
      case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
        return <FaFileExcel size={20} className="text-green-600" />;
      case 'text/csv':
        return <FaFileCsv size={20} className="text-green-700" />;
      default:
        return <FaFile size={20} className="text-blue-600" />;
    }
  };

  const preview_url_generator = (file) => {
    switch (file.type) {
      case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
        return `https://view.officeapps.live.com/op/view.aspx?src=${encodeURIComponent(file.presigned_url)}&ui=en-US&rs=en-US&wdHideGridlines=True&wdHideHeaders=True&wdHideSheetTabs=True&wdDownloadButton=False&wdToolbar=False`;
      case 'application/pdf':
        return `https://docs.google.com/gview?url=${encodeURIComponent(file.presigned_url)}&embedded=true`;
      case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
        return `https://docs.google.com/gview?url=${encodeURIComponent(file.presigned_url)}&embedded=true`;
      case 'application/vnd.openxmlformats-officedocument.presentationml.presentation':
        return `https://docs.google.com/gview?url=${encodeURIComponent(file.presigned_url)}&embedded=true`;
      case 'text/csv':
        return `https://docs.google.com/gview?url=${encodeURIComponent(file.presigned_url)}&embedded=true`;
      default:
        return file.presigned_url;
    }
  };

  const buttonStyles = clsx("p-1 rounded-md text-neutral-600 hover:bg-neutral-100 hover:text-black")

  return (
    <div className="flex items-center justify-between p-4 bg-white hover:bg-neutral-50 border border-gray-200 rounded-lg shadow-sm">
      <div className="flex items-center space-x-4 overflow-hidden">
        {getFileIcon(file.type)}
        <div className="flex flex-col">
          <span className="font-medium truncate max-w-[200px]" title={file.original_name}>
            {file.original_name}
          </span>
          <span className="text-xs font-medium text-neutral-500">{getTimeDifferenceString(file?._cr)}</span>
        </div>
      </div>
      <div className="flex space-x-1.5 flex-shrink-0">
        <a
          href={file.presigned_url}
          download={file.original_name}
          className={`${buttonStyles} hidden md:flex`}
          title="Download"
        >
          <RiDownloadLine size={16} />
        </a>
        <a
          href={preview_url_generator(file)}
          target="_blank"
          rel="noopener noreferrer"
          className={`${buttonStyles}`}
          title="Preview"
        >
          <RiEyeLine size={16} />
        </a>
        <button
          onClick={() => onRemove(file.id)}
          className={`${buttonStyles} hidden md:flex`}
          title="Remove"
        >
          <RiDeleteBin6Line size={16} />
        </button>
      </div>
    </div>
  );
};

export default FileCard;