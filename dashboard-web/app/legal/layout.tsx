import { DefaultLayout } from "@/components/Layouts";
import Providers from "@/lib/providers/Providers";

const Layout = ({ children }) => {
  return (
    <div>
      <Providers>{children}</Providers>
    </div>
  );
};

export default Layout;
