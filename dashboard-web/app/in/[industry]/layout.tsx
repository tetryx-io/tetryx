import { DefaultLayout } from "@/components/Layouts";
import Providers from "@/lib/providers/Providers";

const Layout = ({ children }) => {
  return (
    <div>
      <Providers>
        <DefaultLayout>{children}</DefaultLayout>
      </Providers>
    </div>
  );
};

export default Layout;
