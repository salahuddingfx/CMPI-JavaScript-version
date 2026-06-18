/**
 * Reusable shimmer skeleton for loading states.
 * Usage: <SkeletonCard lines={3} showAvatar />
 */
const SkeletonCard = ({ lines = 2, showAvatar = false, className = '' }) => {
  return (
    <div className={`bg-white dark:bg-slate-950 rounded-3xl border border-slate-100 dark:border-slate-800 p-6 animate-pulse ${className}`}>
      <div className="flex items-start gap-4">
        {showAvatar && (
          <div className="w-12 h-12 rounded-2xl bg-slate-200 dark:bg-slate-800 shrink-0" />
        )}
        <div className="flex-1 space-y-3">
          {Array.from({ length: lines }).map((_, i) => (
            <div
              key={i}
              className="h-4 bg-slate-200 dark:bg-slate-800 rounded-full"
              style={{ width: i === 0 ? '60%' : i === lines - 1 ? '40%' : '90%' }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export const SkeletonGrid = ({ count = 3, cols = 3, ...props }) => (
  <div className={`grid grid-cols-1 md:grid-cols-${cols} gap-6`}>
    {Array.from({ length: count }).map((_, i) => (
      <SkeletonCard key={i} {...props} />
    ))}
  </div>
);

export const SkeletonText = ({ lines = 4 }) => (
  <div className="space-y-3 animate-pulse">
    {Array.from({ length: lines }).map((_, i) => (
      <div
        key={i}
        className="h-4 bg-slate-200 dark:bg-slate-800 rounded-full"
        style={{ width: i === lines - 1 ? '50%' : '100%' }}
      />
    ))}
  </div>
);

export default SkeletonCard;
