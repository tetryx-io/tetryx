export const Logo = () => {
  return <></>;
};

export const Menu = () => {
  return (
    <>
      <svg
        aria-label="Main Menu"
        aria-haspopup="true"
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-menu"
        width={32}
        height={32}
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#2c3e50"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" />
        <line x1={4} y1={8} x2={20} y2={8} />
        <line x1={4} y1={16} x2={20} y2={16} />
      </svg>
    </>
  );
};

export const commentSvg = `
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="25" 
    height="30" 
    fill="none" 
    viewBox="0 0 16 16">
    <path 
      fill="#999" 
      d="M3.5 2C2.11929 2 1 3.11929 1 4.5V9.5C1 10.8807 2.11929 12 3.5 12H4V13.9422C4 14.7842 4.99168 15.2342 5.62533 14.6797L8.68787 12H12.5C13.8807 12 15 10.8807 15 9.5V4.5C15 3.11929 13.8807 2 12.5 2H3.5Z"
    />
  </svg>`;

export const aiColumnSvg = () => {
  return {
      custom: p => `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="${p.bgColor}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M16.2311 2.73009L15.2711 1.77009C15.1867 1.68483 15.0862 1.61715 14.9755 1.57095C14.8648 1.52476 14.746 1.50098 14.6261 1.50098C14.5061 1.50098 14.3873 1.52476 14.2766 1.57095C14.1659 1.61715 14.0655 1.68483 13.9811 1.77009L1.77107 13.9801C1.68581 14.0645 1.61812 14.1649 1.57193 14.2757C1.52574 14.3864 1.50195 14.5051 1.50195 14.6251C1.50195 14.7451 1.52574 14.8638 1.57193 14.9745C1.61812 15.0853 1.68581 15.1857 1.77107 15.2701L2.73107 16.2301C2.81494 16.3163 2.91522 16.3848 3.026 16.4315C3.13679 16.4783 3.25582 16.5024 3.37607 16.5024C3.49632 16.5024 3.61536 16.4783 3.72614 16.4315C3.83692 16.3848 3.93721 16.3163 4.02107 16.2301L16.2311 4.02009C16.3173 3.93623 16.3858 3.83594 16.4325 3.72516C16.4793 3.61438 16.5034 3.49535 16.5034 3.37509C16.5034 3.25484 16.4793 3.13581 16.4325 3.02503C16.3858 2.91425 16.3173 2.81396 16.2311 2.73009Z"/>
        <path d="M10.5 5.25L12.75 7.5"/>
        <path d="M3.75 4.5V7.5"/>
        <path d="M14.25 10.5V13.5"/>
        <path d="M7.5 1.5V3"/>
        <path d="M5.25 6H2.25"/>
        <path d="M15.75 12H12.75"/>
        <path d="M8.25 2.25H6.75"/>
      </svg>`
    }
}
