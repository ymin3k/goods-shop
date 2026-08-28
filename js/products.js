// 상품 목록 (16개) - DB 없이 이 파일에 고정합니다.
// 상품을 바꾸고 싶으면 이 파일만 수정하면 됩니다.
export const PRODUCTS = [
  { id: 'p01', name: '보몽드 순면스퀘어 솔리드 누빔매트커버, 다크블루', price: 39900,
    image: 'https://static.coupangcdn.com/image/retail/images/2018/09/18/11/8/6964dd11-7ff2-448d-8462-db07e3ca2a5f.jpg' },
  { id: 'p02', name: '슈에뜨룸 선인장 리플 침구 세트, 베이지', price: 49900,
    image: 'https://static.coupangcdn.com/image/retail/images/2017/05/15/16/3/cd40fc67-e838-4f5d-b90a-45b0f0336729.jpg' },
  { id: 'p03', name: '선우랜드 레인보우 2단 문걸이용 옷걸이, 화이트', price: 9900,
    image: 'https://static.coupangcdn.com/image/product/image/vendoritem/2015/10/16/3000156691/82761df2-59fb-4970-a67e-cea8bfcd8cac.jpg' },
  { id: 'p04', name: '보드래 헬로우 누빔 매트리스커버, 핑크', price: 34900,
    image: 'https://static.coupangcdn.com/image/retail/images/2020/02/25/12/2/a775b261-1ad7-4bad-873e-85ed4221f091.jpg' },
  { id: 'p05', name: '보드래 퍼펙트 누빔 매트리스커버, 차콜', price: 36900,
    image: 'https://static.coupangcdn.com/image/retail/images/2017/10/11/16/6/bf3b2157-528d-4b24-9991-b601a24f4c6f.jpg' },
  { id: 'p06', name: '피아블 클래식 방수 매트리스커버, 화이트', price: 29900,
    image: 'https://static.coupangcdn.com/image/product/image/vendoritem/2018/11/28/3647689009/d72a996d-1e4e-42be-a23c-f9f6872214bb.jpg' },
  { id: 'p07', name: '더자리 에코항균 마이크로 매트리스커버, 밀키차콜그레이', price: 32900,
    image: 'https://static.coupangcdn.com/image/product/image/vendoritem/2019/06/11/3361297461/699c49cc-5f9f-4927-ab26-b184f90c1571.jpg' },
  { id: 'p08', name: '더자리 프레쉬 퓨어 매트리스 커버, 퓨어 차콜그레이', price: 31900,
    image: 'https://static.coupangcdn.com/image/retail/images/2018/10/26/16/9/c6dfa004-442c-4f48-9ff1-b76d81bae046.jpg' },
  { id: 'p09', name: '몽쉐어 알러스킨 항균 매트리스 커버, 카키그레이', price: 33900,
    image: 'https://static.coupangcdn.com/image/retail/images/2019/04/01/22/6/f9566f49-cf8c-48dd-bc73-b543a3f47f62.jpg' },
  { id: 'p10', name: '코멧 홈 40수 트윌 순면 100% 홑겹 매트리스커버, 그레이', price: 24900,
    image: 'https://static.coupangcdn.com/image/retail/images/12859794410743-0ab1b2fe-1cd4-4599-b38a-3fb22f3bf620.jpg' },
  { id: 'p11', name: '패브릭아트 항균 마이크로 원단 매트리스 커버, 아이보리', price: 27900,
    image: 'https://static.coupangcdn.com/image/retail/images/2019/03/28/19/3/2d9f9b52-0cc9-424f-8639-8f298429d244.jpg' },
  { id: 'p12', name: '바숨 순면 누빔 침대 매트리스커버, 차콜', price: 41900,
    image: 'https://static.coupangcdn.com/image/retail/images/2017/10/19/15/4/95b93d25-7014-458a-a2a5-9b93189cdcef.jpg' },
  { id: 'p13', name: 'WEMAX 다용도 문옷걸이, 화이트', price: 12900,
    image: 'https://static.coupangcdn.com/image/retail/images/2019/07/29/12/3/704931d7-4dbd-4af7-9247-856831bdc61e.jpg' },
  { id: 'p14', name: '타카타카 프리미엄 나노 화이바 누빔 매트리스 커버, 젠틀핑핑', price: 38900,
    image: 'https://static.coupangcdn.com/image/retail/images/2017/10/13/10/3/8379ffd3-63be-4da4-98f9-895aaa0c9b52.jpg' },
  { id: 'p15', name: '보몽드 순면스퀘어 누빔매트커버, 다크그레이', price: 39900,
    image: 'https://static.coupangcdn.com/image/retail/images/2018/09/17/19/4/329dbb2f-a0ad-44d4-af46-1eea0c548b67.jpg' },
  { id: 'p16', name: '보드래 국내산 순면 60수 누빔 매트리스커버, 그레이', price: 44900,
    image: 'https://static.coupangcdn.com/image/retail/images/339338956730835-5cbe0521-2a03-4fe2-8eb7-7a7ae9ff187f.jpg' },
];

// id 로 상품 1개 찾기
export function findProduct(id) {
  return PRODUCTS.find(function (p) { return p.id === id; });
}

// 12900 -> "12,900원"
export function formatPrice(n) {
  return n.toLocaleString('ko-KR') + '원';
}
