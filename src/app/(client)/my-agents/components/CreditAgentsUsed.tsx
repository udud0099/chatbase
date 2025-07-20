type CreditAgentsUsedProps = {
  topic: string;
  totalNo: number;
  scoreNO: number;
};

export default function CreditAgentsUsed({
  topic,
  totalNo,
  scoreNO,
}: CreditAgentsUsedProps) {
  return (
    <>
      <div className="p-3 rounded-xl border border-border flex gap-4 flex-col text-primary w-[120px]">
        <span className="flex items-baseline  text-base">
          <h1 className="font-semibold text-4xl">
            {scoreNO < 10 ? `0${scoreNO}` : scoreNO}
          </h1>
          /{totalNo}
        </span>
        <span className="text-sm">{topic}</span>
      </div>
    </>
  );
}
