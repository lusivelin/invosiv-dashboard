"use client"

import React, { useRef, useState, useTransition } from "react";
import { CSSTransition, SwitchTransition } from 'react-transition-group';

interface Tab {
  id: string;
  control: React.ReactElement;
  panel: React.ReactElement;
}

interface TabProps {
  tabs: Tab[]
}

const Tabs = ({ tabs }: TabProps) => {
  const [activeTab, setActiveTab] = useState(tabs[0])
  const [isPending, startTransition] = useTransition()

  const onClickTab = (tab: Tab) => {
    startTransition(() => {
      setActiveTab(tab)
    })
  }

  const showTabControl = () => tabs
    .map(tab => (
      <div
        onClick={() => !isPending && onClickTab(tab)}
        className={`tab-control-item ${isPending ? 'disabled' : ''}`}
        style={{ pointerEvents: isPending ? "none" : "auto" }}
      >
        {tab.control}
      </div>
    ))

  const panelClasses = {
    enter: "animate__animated",
    enterActive: "animate__fadeIn",
    exit: "animate__animated",
    exitActive: "animate__fadeOut"
  };

  const panelRef = useRef(null)

  return (
    <div id="generic-tabs">
      <div className="tab-control">
        {showTabControl()}
      </div>

      <div className="tab-panel">
        <SwitchTransition>
          <CSSTransition
            key={activeTab.id}
            nodeRef={panelRef}
            timeout={200}
            classNames={panelClasses}
            unmountOnExit
          >
            <div ref={panelRef}>
              {activeTab.panel}
            </div>
          </CSSTransition>
        </SwitchTransition>
      </div>
    </div>
  )
}

export default Tabs