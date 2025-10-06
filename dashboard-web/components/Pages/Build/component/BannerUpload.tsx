import { FiUpload } from 'react-icons/fi';

interface BannerUploadProps {
  isLoading: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const BannerUpload: React.FC<BannerUploadProps> = ({ isLoading, onChange, className = '' }) => {
  return (
    <div>
      <div className={`relative aspect-[1.9/1] w-full border-2 border-dashed border-neutral-300 rounded-md overflow-hidden ${className}`}>
        <div className="absolute inset-0 flex items-center justify-center">
          {isLoading ? (
            <div className="bg-black bg-opacity-50 absolute inset-0 flex items-center justify-center">
              <div className="circle-loader h-6 w-6"></div>
            </div>
          ) : (
            <div className="flex items-center gap-2 text-neutral-600">
              <FiUpload className="text-neutral-400 text-sm" />
              <span className="text-xs">Upload</span>
            </div>
          )}
        </div>
        <input
          id="banner_files"
          type="file"
          accept="image/*,video/*"
          multiple
          onChange={onChange}
          disabled={isLoading}
          className={`absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10 
            ${isLoading ? 'cursor-not-allowed' : ''}`}
        />
      </div>
    </div>
  );
};

export default BannerUpload; 