export default function ArticleLayout ({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col items-center min-h-svh py-[24px] md:py-[36px] px-[16px] md:px-[64px] bg-gray-200">
      {children}
    </main>
  );
}
