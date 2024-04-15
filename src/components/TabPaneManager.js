import { useMemo } from "react";
import "./TabPaneManager.css";

const TabPaneManager = ({
  integrations,
  dedicatedAccountManager,
  propMinWidth,
}) => {
  const integrationsStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className="tab-pane-manager">
      <div className="icons-parent">
        <img className="icons4" alt="" src="/icons-10.svg" />
        <div className="integrations-wrapper">
          <div className="integrations" style={integrationsStyle}>
            {integrations}
          </div>
        </div>
      </div>
      <div className="icons-group">
        <img className="icons5" alt="" src="/icons-10.svg" />
        <div className="spinner">
          <div className="dedicated-account-manager">
            {dedicatedAccountManager}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabPaneManager;
