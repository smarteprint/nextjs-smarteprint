import React from "react";
const SetupGuide = React.lazy(() => import("./SetupGuide1"));
const ChatAssistance = React.lazy(() => import("./FindPrinter"));
const HpSmartInstall = React.lazy(() => import("./HpSmartInstall"));

export { SetupGuide, ChatAssistance, HpSmartInstall };
