import styled from "styled-components";

const SimpleMenu = 
  styled.div`
  width: 200px;
  border-radius: 6px;
  box-shadow: 0px 2px 12px rgba(13,13,13,0.2);

  display: flex;
  flex-direction: column;
  gap: 10px;

  font-size: 13px;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  
    .danger {
    color: rgba(255, 40, 40, 0.8);
    :hover {
      background-color: rgba(255, 40, 40, 0.1);
      color: rgba(255, 40, 40, 1);
    }
  }

  .primary {
    :hover {
      background-color: rgba(133, 133, 133, 0.1);
    }
  }

  > div {
    padding: 8px;
    display: flex;
    gap: 8px;
    align-items: center;
    border-radius: 6px;
    transition: background-color 100ms;
    cursor: pointer;
  }
  `
;

export default SimpleMenu;
