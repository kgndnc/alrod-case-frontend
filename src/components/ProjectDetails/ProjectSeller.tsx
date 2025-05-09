function ProjectSeller({ display }: { display: any }) {
  return (
    <div className="bg-[#48A0E2] grid grid-cols-[1fr_2fr] items-center gap-4 rounded-lg p-10 pt-7 pb-7 mb-8 text-white">
      <div className="first-col">
        <div className="font-semibold text-xl">Satıcı Bilgileri</div>
        <div className="font-bold text-3xl">{display.seller.name}</div>
      </div>
      <div className="second-col text-sm">
        {/* display.seller.info */}
        <p className="font-bold">
          Proje doğrudan sahibi tarafından satılmaktadır.
        </p>
        <p className="">
          Satıcı bilgileri Enstart tarafından doğrulanmıştır ve gerekli belgeler
          taraflarca karşılıklı olarak imzalanmıştır.
        </p>
      </div>
    </div>
  );
}

export default ProjectSeller;
