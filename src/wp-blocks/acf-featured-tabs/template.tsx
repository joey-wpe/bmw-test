import type { AcfFeaturedTabs } from "@/__generated__/graphql";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import blockConfig from "./config";
import { TabSwitcher } from "./partials/tab-switcher";
import { TabView } from "./partials/tab-view";

export function AcfFeaturedTabs(props: AcfFeaturedTabs) {
  const [activeTab, setActiveTab] = useState(0);

  const {
    blockFeaturedTabs: { heading, tabs },
  } = props;

  return (
    <div className="">
      {heading && (
        <h2 className="mb-4 text-center font-light uppercase">{heading}</h2>
      )}
      <div className="hidden md:block">
        {tabs && <TabSwitcher {...{ tabs, activeTab, setActiveTab }} />}
      </div>
      <div className="grid gap-3 md:hidden">
        {tabs &&
          tabs.map(({ content }, i) => <TabView key={i} {...{ content }} />)}
      </div>
      <div className="hidden md:block">
        {tabs &&
          tabs.map(({ content, description }, i) => (
            <AnimatePresence key={i}>
              {activeTab === i && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, ease: "linear" }}
                  className="pt-6"
                >
                  {description && (
                    <p className="text-center text-base">{description}</p>
                  )}
                  <div className="mt-6">
                    <TabView {...{ content }} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          ))}
      </div>
    </div>
  );
}

AcfFeaturedTabs.displayName = blockConfig.displayName;
AcfFeaturedTabs.fragments = blockConfig.fragment;
