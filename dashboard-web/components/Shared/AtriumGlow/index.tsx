import { useState, type RefObject, useEffect } from "react"

interface Props {
  cursor: { x: number; y: number }
  cardRef: RefObject<HTMLElement>
  mouseOnCard: boolean
}

const AtriumLinesGlow = ({ cursor, cardRef, mouseOnCard }: Props) => {
  const [gradientCenter, setGradientCenter] = useState({ cx: "50%", cy: "50%" })

  useEffect(() => {
    if (cardRef.current && cursor.x !== null && cursor.y !== null) {
      const cardRect = cardRef.current.getBoundingClientRect()
      const cxPercentage = (cursor.x / cardRect.width) * 100 - 24
      const cyPercentage = (cursor.y / cardRect.height) * 100
      setGradientCenter({
        cx: `${cxPercentage}%`,
        cy: `${cyPercentage}%`,
      })
    }
  }, [cursor, cardRef])
  return (
    <svg
      viewBox="0 0 462 427"
      className="min-w-[264px] max-w-[330px] max-h-[305px] aspect-[1.08] transition-any smooth"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="blurFilter" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="0" />
        </filter>
        <radialGradient
          id="purpleGradient"
          gradientUnits="userSpaceOnUse"
          r="35%"
          cx={gradientCenter.cx}
          cy={gradientCenter.cy}
        >
          {mouseOnCard &&
            <>
              <stop offset="0%" stopColor="var(--gradient-purple-s1)" />
              <stop offset="25%" stopColor="var(--gradient-purple-s2)" />
              <stop offset="50%" stopColor="var(--gradient-purple-s3)" />
              <stop offset="75%" stopColor="var(--gradient-purple-s4)" />
              <stop offset="100%" stopColor="var(--gradient-purple-s5)" />
            </>
          }
          <stop offset={1} stopColor="#9a9a9a" />
        </radialGradient>
      </defs>
      <g clip-path="url(#clip0_3798_42852)" filter="url(#blurFilter)">
        <g opacity={mouseOnCard ? 0.5 : 0.2}>
          <path d="M375.383 362.907L324.954 209.937H234.18L222.413 246.918H296.377L332.339 362.907H375.383Z" stroke="url(#purpleGradient)" strokeWidth={2} />
          <path d="M133.542 338.419L234.14 57.0938L182.029 85.6706L112.617 279.131L133.542 338.419Z" stroke="url(#purpleGradient)" strokeWidth={2} />
          <path d="M313.179 172.951H272.835L258.32 129.171L266.458 112.436H293.007L313.179 172.951Z" stroke="url(#purpleGradient)" strokeWidth={2} />
        </g>
        <g opacity="0.3">
          <line x1="237.471" y1="-72.1603" x2="15.5395" y2="554.885" stroke="url(#purpleGradient)" />
          <line x1="279.241" y1="-72.1603" x2="57.3091" y2="554.885" stroke="url(#purpleGradient)" />
          <line x1="222.377" y1="-104.692" x2="432.231" y2="529.902" stroke="url(#purpleGradient)" />
          <line x1="191.682" y1="-85.5617" x2="392.478" y2="555.071" stroke="url(#purpleGradient)" />
          <line x1="-50.7754" y1="211.004" x2="475.117" y2="211.004" stroke="url(#purpleGradient)" />
          <line x1="-9.50977" y1="247.237" x2="516.383" y2="247.237" stroke="url(#purpleGradient)" />
        </g>
      </g>

    </svg>


  )
}

export default AtriumLinesGlow;