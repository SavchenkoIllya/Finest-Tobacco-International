export const Catchphrase = ({ phrase }: { phrase: string }) => {
  return (
    <div className={"bg-secondary max-w-4xl py-8 px-4"}>
      <h5 className={"catchphrase text-7xl text-center"}>{phrase}</h5>
    </div>
  );
};
