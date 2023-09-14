const SkeletonBerita = () => {
  return (
    <div>
      <div className="flex py-[15px] px-[20px] border-b border-slate-200 gap-3">
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-2">
            <div className="w-[390px] bg-slate-300 h-[15px]" />
            <div className="w-[390px] bg-slate-300 h-[15px]" />
            <div className="w-[200px] bg-slate-300 h-[15px]" />
          </div>

          <div className="flex">
            <div className="w-[300px] bg-slate-300 h-[15px]" />
          </div>
        </div>
        <div className="w-[180px] h-[135px] rounded-lg bg-slate-300" />
      </div>
    </div>
  );
};

export default SkeletonBerita;
