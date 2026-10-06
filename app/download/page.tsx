import Link from 'next/link';

export default function DownloadPage() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-950 text-slate-100">
      {/* 헤더 */}
      <header className="px-6 py-6 border-b border-slate-900 flex justify-between items-center max-w-5xl mx-auto w-full">
        <Link href="/" className="font-extrabold text-lg text-cyan-400">
          TinySheet
        </Link>
        <Link href="/" className="text-sm text-slate-400 hover:text-slate-200">
          &larr; 홈으로 돌아가기
        </Link>
      </header>

      {/* 본문 영역 */}
      <main className="flex-1 max-w-3xl mx-auto px-6 py-16 w-full text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4">TinySheet 다운로드</h1>
        <p className="text-slate-400 mb-10">
          사용하시는 환경에 맞는 버전을 선택하여 다운로드하세요.
        </p>

        {/* 최신 버전 다운로드 박스 */}
        <div className="p-8 bg-slate-900/80 border border-slate-800 rounded-2xl mb-8 text-left shadow-xl">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <span className="inline-block px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs font-semibold rounded-full mb-2">
                Latest Release
              </span>
              <h2 className="text-xl font-bold">TinySheet v1.2.0 (Windows)</h2>
              <p className="text-sm text-slate-400 mt-1">최신 안정 버전 • 64-bit 설치 파일</p>
            </div>
            <a
              href="/tinysheet-setup.exe"
              className="w-full sm:w-auto px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl transition-all text-center"
            >
              최신 버전 다운로드
            </a>
          </div>
        </div>

        {/* 이전 버전 링크 영역 */}
        <div className="p-6 bg-slate-900/40 border border-slate-800/60 rounded-2xl text-left">
          <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">
            Other Versions
          </h3>
          <p className="text-sm text-slate-400 mb-4">
            이전 빌드나 다른 버전의 파일이 필요하신가요?
          </p>
          <Link
            href="/download/archive"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium text-sm underline underline-offset-4"
          >
            이전 버전 목록 보기 (nginx 파일 디렉토리) &rarr;
          </Link>
        </div>
      </main>

      {/* 푸터 */}
      <footer className="py-6 text-center text-sm text-slate-500 border-t border-slate-900">
        &copy; {new Date().getFullYear()} TinySheet. All rights reserved.
      </footer>
    </div>
  );
}