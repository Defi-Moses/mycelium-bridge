import React, { createContext, useEffect, useState } from "react";
import { AnalyticsBrowser } from "@segment/analytics-next";
import { useLocation } from "react-router-dom";
import { ARBITRUM, ARBITRUM_TESTNET, AVALANCHE, hasConsented } from "./Helpers";
import { useWeb3React } from "@web3-react/core";

const writeKey = process.env.REACT_APP_SEGMENT_WRITE_KEY;

// Helper functions
// const convertBNToFloat = (bn: BigNumber) => {
//   return parseFloat(BigNumber.max(bn).toString());
// };

const networkName = {
  [ARBITRUM]: "Arbitrum",
  [ARBITRUM_TESTNET]: "Arbitrum Testnet",
  [AVALANCHE]: "Avalanche",
};

const useValues = () => {
  const { account } = useWeb3React();
  const location = useLocation();
  const [analytics, setAnalytics] = useState(undefined);

  const trackLogin = (chainId, gmxBalances, ethBalance) => {
    try {
      if (account && hasConsented()) {
        analytics?.track("userLoggedIn", {
          walletAddress: account,
          network: networkName[chainId],
          ethBalance: ethBalance,
          gmxBalances: gmxBalances,
        });
      }
    } catch (err) {
      console.error("Failed to send Login action to Segment", err);
    }
  };

  // Identify
  useEffect(() => {
    try {
      if (account && hasConsented()) {
        analytics?.identify(account, {
          walletAddress: account,
        });
      }
    } catch (err) {
      console.error("Failed to send Identify action to Segment", err);
    }
  }, [analytics, account]);

  // Page
  useEffect(() => {
    analytics?.page();
  }, [analytics, location.pathname]);

  useEffect(() => {
    if (!writeKey) {
      console.warn("Segment.io write key not set");
    } else {
      const loadAnalytics = async () => {
        const [response] = await AnalyticsBrowser.load({ writeKey });
        setAnalytics(response);
      };
      loadAnalytics();
    }
  }, []);

  return {
    trackLogin,
  };
};

export const AnalyticsContext = createContext({});

export const AnalyticsProvider = ({ children }) => {
  return <AnalyticsContext.Provider value={useValues()}>{children}</AnalyticsContext.Provider>;
};
