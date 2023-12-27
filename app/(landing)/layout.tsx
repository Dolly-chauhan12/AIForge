const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-full bg-gradient-to-bl  from-slate-200 to-blue-100 dark:from-blue-800 dark:via-indigo-700 dark:to-slate-500 overflow-auto">
      <div className="mx-auto max-w-screen-xl h-full">{children}</div>
    </main>
  );
};

export default LandingLayout;
