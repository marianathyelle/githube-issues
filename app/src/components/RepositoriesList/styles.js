import styled from 'styled-components';

export const Repository = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;

  img {
    width: 45px;
    height: 45px;
    margin-right: 10px;
  }

  strong {
    display: block;
  }

  small {
    font-size: 12px;
    color: #999999;
  }
`;

export const RepositoryContent = styled.div`
  display: flex;
  align-items: center;
`;
