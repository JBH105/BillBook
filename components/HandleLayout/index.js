import { useRouter } from "next/router";
import React, { useState } from "react";
// Brand layout
import BrandSidebar from "../Brand/Sidebar/index";
import BrandHeader from "../Brand/Header/index";
import BrandFooter from "../Brand/Footer/index";

export default function HandleLayout({ children }) {
  const router = useRouter();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {router.pathname == "/brand/setting/upgradeplan" ? (
        ""
      ) : (
        <BrandSidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
      )}
      <div
        className={`flex flex-1 flex-col ${
          router.pathname == "/brand/setting/upgradeplan"
            ? "md:pl-[0] "
            : "md:pl-[16.4rem]"
        } `}
      >
        <BrandHeader setSidebarOpen={setSidebarOpen} />
        {children}
        <div className="sticky bottom-0 z-10  md:hidden">
          <BrandFooter />
        </div>
      </div>
    </>
  );

  // return router.pathname.split("/")[1] === "influencer" ? (
  //   <>
  //     <InfluencerSidebar
  //       sidebarOpen={sidebarOpen}
  //       setSidebarOpen={setSidebarOpen}
  //     />
  //     <div className="flex flex-1 flex-col md:pl-[16.4rem]">
  //       <InfluencerHeader setSidebarOpen={setSidebarOpen} />
  //       {children}
  //       {router.pathname == "/influencer/helpandsupport" ||
  //       router.pathname == "/influencer/notification" ||
  //       router.pathname == "/influencer/message" ? (
  //         ""
  //       ) : (
  //         <div className="sticky bottom-0 z-10  md:hidden">
  //           <InfluencerFooter />
  //         </div>
  //       )}
  //     </div>
  //   </>
  // ) : (
  //   <>
  //     {router.pathname == "/brand/setting/upgradeplan" ? (
  //       ""
  //     ) : (
  //       <BrandSidebar
  //         sidebarOpen={sidebarOpen}
  //         setSidebarOpen={setSidebarOpen}
  //       />
  //     )}
  //     <div className={`flex flex-1 flex-col ${router.pathname == "/brand/setting/upgradeplan" ? "md:pl-[0] " : "md:pl-[16.4rem]" } `}>
  //       <BrandHeader setSidebarOpen={setSidebarOpen} />
  //       {children}
  //       <div className="sticky bottom-0 z-10  md:hidden">
  //         <BrandFooter />
  //       </div>
  //     </div>
  //   </>
  // );
}
