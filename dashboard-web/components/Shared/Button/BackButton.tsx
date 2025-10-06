import { useRouter } from 'next/navigation';
import { TbArrowLeft } from "react-icons/tb";

const BackButton = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return <button onClick={handleGoBack} className="flex font-medium text-neutral-500 dark:text-neutral-400 items-center gap-2"> <TbArrowLeft/> Go back </button>
}
export default BackButton