export const LoaderSection = () => {
  return (
    <div className={"absolute inset-0 bg-secondary z-100"}>
      <div className="flex justify-center items-center h-full">
        <div className={"flex items-center gap-8 m-8"}>
          <img src={"/logo.svg"} className={"animate-pulse w-xl"} />
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary" />
        </div>
      </div>
    </div>
  );
};
