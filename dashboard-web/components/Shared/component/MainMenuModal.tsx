import { useState, useEffect } from "react";

const MainMenuModal = (props: any) => {
  const { title, closeModal, tabName = [], callBack } = props;
  const [activeTab, setActivetab] = useState<any>([]);

  useEffect(() => {
    if (tabName.length > 0) setActivetab(tabName[0]);
  }, []);

  const onChangeTab = (name: any) => {
    setActivetab(name);
  };

  return (
    <div className="nnifty-detail-modal bg-white dark:bg-black">
      <div className="">
        <div className="nnifty-detail-modal-container__header flex justify-end">
          {title && <div>{title}</div>}
          <div
            className="cursor-pointer"
            onClick={(e) => {
              closeModal("", e);
            }}
          >
            X
          </div>
        </div>
        {tabName.length > 0 && (
          <div className="nnifty-detail-modal-container__tab flex mt-2 ps-2">
            {tabName.map((name: any) => {
              return (
                <div
                  key={name}
                  className={`nnifty-detail-modal-container__tab--header cursor-pointer ${
                    name === activeTab ? "active" : ""
                  }`}
                  onClick={() => {
                    onChangeTab(name);
                  }}
                >
                  <div
                    className={`active_name ${
                      name === "Raw Data" ? "mr-3" : "margin_left"
                    }`}
                  >
                    {" "}
                    {name}{" "}
                  </div>
                </div>
              );
            })}
          </div>
        )}
        {callBack && (
          <div className="nnifty-detail-modal-container__body scroll-thin">
            {callBack(activeTab)}
          </div>
        )}
      </div>
    </div>
  );
};

export default MainMenuModal;
