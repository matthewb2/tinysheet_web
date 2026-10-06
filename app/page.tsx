import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* 메인 히어로 섹션 */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-20 text-center">
        <div className="inline-block mb-4 px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 rounded-full text-sm font-medium tracking-wide">
          ⚡ No Office Bloat, Pure Speed
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight max-w-4xl mb-6 leading-tight">
          클릭 3초 만에 실행되는<br />
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            초경량 스프레드시트
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10">
          무거운 오피스 프로그램 패키지는 그만. 오직 스프레드시트 기능만을 위해 설계되어
          로딩 지연 없이 언제나 즉시 열립니다.
        </p>

        {/* 핵심 다운로드 및 GitHub 링크 영역 */}
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-lg justify-center mb-16">
          {/* 다운로드 페이지로 연결 */}
          <Link
            href="/download"
            className="flex items-center justify-center gap-3 px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl shadow-lg shadow-cyan-500/20 transition-all duration-200 transform hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            무료 다운로드 (Windows)
          </Link>

          <a
            href="https://github.com/matthewb2/tinysheet"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-8 py-4 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold rounded-xl border border-slate-700 transition-all duration-200"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            GitHub 저장소
          </a>
        </div>

        {/* 제품 특징 섹션 */}
        <div id="features" className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full mt-12 text-left">
          <div className="p-8 bg-slate-900/60 border border-slate-800 rounded-2xl backdrop-blur-sm">
            <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center text-cyan-400 mb-6 text-xl font-bold">
              ⚡
            </div>
            <h3 className="text-xl font-bold text-slate-100 mb-3">초고속 로딩</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              거대한 오피스 스위트 로딩 대기 시간 없이, 아이콘 클릭 단 3초 만에 작업 환경이 구축됩니다.
            </p>
          </div>

          <div className="p-8 bg-slate-900/60 border border-slate-800 rounded-2xl backdrop-blur-sm">
            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 mb-6 text-xl font-bold">
              🎯
            </div>
            <h3 className="text-xl font-bold text-slate-100 mb-3">핵심 기능 집중</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              자주 쓰지 않는 복잡한 기능을 덜어내고, 빠르고 가벼운 데이터 표 편집 환경에만 집중했습니다.
            </p>
          </div>

          <div className="p-8 bg-slate-900/60 border border-slate-800 rounded-2xl backdrop-blur-sm">
            <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-400 mb-6 text-xl font-bold">
              🪶
            </div>
            <h3 className="text-xl font-bold text-slate-100 mb-3">저사양 최적화</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              시스템 리소스를 거의 소비하지 상하 저사양 PC나 노트북에서도 쾌적하게 구동됩니다.
            </p>
          </div>
        </div>
      </main>

      {/* 푸터 */}
      <footer className="py-8 text-center text-sm text-slate-500 border-t border-slate-900">
        &copy; {new Date().getFullYear()} TinySheet. All rights reserved.
      </footer>
    </div>
  );
}