import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 70px;
  padding: 10px;
  height: auto;

  @media (max-width: 768px) {
    margin-top: 50px;
  }
`

export const MenuItem = styled.div`
  padding: 10px 4px;
  font-size: 16px;
  color: #333;
  cursor: pointer;

  &:hover {
    border-radius: 5px;
    background-color: #f3f4f5; // 호버 시 배경색 변경
  }

  &:not(:first-child) {
    margin-top: 5px; // 첫 번째 항목을 제외하고 상단 마진 추가
  }
`

export const Divider = styled.div`
  height: 1px;
  background-color: #c2c2c2;
  margin: 10px 0;
`