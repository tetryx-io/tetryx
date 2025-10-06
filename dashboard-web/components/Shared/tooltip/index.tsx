export const Tooltip = ({ message, children }) => {
  return (
  <div className="group relative flex">
      {children}
      <div className="absolute w-24 md:w-48 z-50 top-6 invisible md:left-0 right-0 scale-0 transition-all rounded-md bg-neutral-800 p-3 text-xs md:text-sm text-white group-hover:scale-100 group-hover:visible">{message}</div>
  </div>
  )
}

export default Tooltip;