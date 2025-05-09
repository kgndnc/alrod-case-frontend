function ProjectYekdem({ display }: { display: any }) {
  return (
    <div className="bg-gray-50 rounded-lg p-4 mb-8 flex items-center justify-between">
      <div>
        <div className="font-semibold text-sm">Yekdem Hakkı</div>
        <div className="flex items-center mt-2">
          <span className="text-gray-500 text-xs mr-3">Son Uzatma Tarihi</span>
          <span className="text-xs">{display.yekdemTarihi}</span>
        </div>
        <div className="flex items-center">
          <span className="text-gray-500 text-xs mr-3">Katkı Payı</span>
          <span className="text-xs">{display.katkiPayi}</span>
        </div>
      </div>
      <button className="bg-blue-400 text-white rounded-lg px-6 py-2 text-sm font-medium">
        KMZ
      </button>
    </div>
  );
}

export default ProjectYekdem;
