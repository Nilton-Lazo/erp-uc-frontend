import React from 'react'

export default function OptionButton({
  icon,
  label,
  bgClass,
  textClass,
  iconSizeClass = 'h-10 w-10',
  textSizeClass = 'text-2xl'
}) {
  const widthClass = iconSizeClass
    .split(' ')
    .find(c => c.startsWith('w-')) || 'w-10'

  return (
    <button
      className={`
        w-full
        h-20
        ${bgClass} ${textClass}
        flex
        items-center
        px-6 py-4
        rounded-lg
        shadow-md
        transition-all
        duration-200
        hover:bg-purple-700
        hover:text-white
      `}
    >
      <div className={`flex-shrink-0 flex items-center justify-center ${widthClass}`}>
        <img
          src={icon}
          alt={label}
          className={`${iconSizeClass} flex-shrink-0 object-contain`}
        />
      </div>
      <div className="flex-1 min-w-0 flex items-center justify-center">
        <span className={`${textSizeClass} font-medium text-center truncate`}>
          {label}
        </span>
      </div>
    </button>
  )
}
