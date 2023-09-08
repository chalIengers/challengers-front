import { keyframes } from '@emotion/react';

export const projectMappingApi: { [key: string]: string } = {
  '전체 서비스': 'ALL',
  '웹 서비스': 'WEB',
  '앱 서비스': 'APP',
  '기타 서비스': 'ETC',
  '최신 등록순': 'NEW',
  인기순: 'POPULAR',
  추천순: 'RECOMMEND',
};

export const projectOptionType = {
  service: ['전체 서비스', '웹 서비스', '앱 서비스', '기타 서비스'],
  sort: ['최신 등록순', '인기순', '추천순'],
};

export const logoAnimation = keyframes`
0% {
    transform: translateX(0);
}
50% {
    transform: translateX(-100%);
}
50.01%{
    transform: translateX(100%);
}
100%{
    transform: translateX(0);
}
`;

export const logoAnimationBack = keyframes`
    from { 
        transform: translateX(0); 
    }
    to { 
        transform: translateX(-200%); 
    }
  `;
