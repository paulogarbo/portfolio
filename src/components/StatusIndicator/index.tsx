export function StatusIndicator() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative flex items-center justify-center h-3 w-3 mr-2">
        <span className="absolute h-full w-full bg-emerald-500 rounded-full animate-ping"></span>
        <span className="relative h-3 w-3 bg-emerald-500 rounded-full"></span>
      </div>
      <span>Aberto para negócios</span>
    </div>
  )
}
