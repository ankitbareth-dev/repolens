import { memo } from "react";

const BackgroundAssets = memo(() => {
  return (
    <>
      <div className="absolute inset-0 bg-aurora z-0" />
      <div className="absolute inset-0 grain-overlay z-0" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] md:w-[1000px] md:h-[600px] bg-primary/5 rounded-full blur-[100px] z-0" />
    </>
  );
});

BackgroundAssets.displayName = "BackgroundAssets";
export default BackgroundAssets;
