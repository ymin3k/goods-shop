// 브라우저에 노출되어도 안전한 값들만 여기에 둡니다.
// (비밀키는 절대 이 파일에 넣지 마세요 -> Supabase Edge Function 환경변수로만)

export const SUPABASE_URL = 'https://여기에-내-supabase-url.supabase.co';
export const SUPABASE_ANON_KEY = '여기에-내-anon-key';

// 토스페이먼츠 테스트 클라이언트 키 (test_ck_ 로 시작)
export const TOSS_CLIENT_KEY = 'test_ck_여기에-내-클라이언트키';

// 관리자 이메일 (이 계정만 전체 결제 내역을 볼 수 있음)
export const ADMIN_EMAIL = 'admin@admin.com';
