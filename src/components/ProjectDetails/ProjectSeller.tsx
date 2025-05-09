function ProjectSeller({ display }: { display: any }) {
  return (
    <div className="bg-blue-200 rounded-lg p-4 mb-8">
      <div className="font-semibold mb-2 text-sm">Satıcı Bilgileri</div>
      <div className="text-gray-700 font-bold text-lg mb-2">
        {display.seller.name}
      </div>
      <div className="text-gray-600 text-xs">{display.seller.info}</div>
    </div>
  );
}

export default ProjectSeller;
