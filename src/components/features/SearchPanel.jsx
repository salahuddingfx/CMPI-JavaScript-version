import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function SearchPanel({ departments = [], faculty = [], notices = [], events = [], blogs = [], onOpenChange }) {
  const [query, setQuery] = useState("");
  const allItems = useMemo(
    () => [
      ...departments.map((item) => ({ label: item.title, type: "Department", href: `/academics/${item.slug}` })),
      ...faculty.map((item) => ({ label: item.name, type: "Faculty", href: "/faculty" })),
      ...notices.map((item) => ({ label: item.title, type: "Notice", href: `/notice-board/${item.id}` })),
      ...events.map((item) => ({ label: item.title, type: "Event", href: `/events/${item.id}` })),
      ...blogs.map((item) => ({ label: item.title, type: "Blog", href: `/blog/${item.slug}` })),
    ],
    [departments, faculty, notices, events, blogs],
  );

  const filteredItems = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return allItems;
    return allItems.filter((item) => item.label.toLowerCase().includes(normalizedQuery) || item.type.toLowerCase().includes(normalizedQuery));
  }, [allItems, query]);

  return (
    <div className="rounded-2xl border dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-2xl">
      <div className="mb-4 flex items-center gap-3">
        <div className="p-2 rounded-lg bg-primary/10 text-primary">
          <Search className="h-5 w-5" />
        </div>
        <h2 className="text-xl font-black text-slate-900 dark:text-white">Search CMPI Portal</h2>
      </div>
      <Input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search notices, events, departments..."
        aria-label="Search CMPI"
        className="rounded-xl border-slate-200 dark:border-slate-800 focus-visible:ring-primary focus-visible:ring-offset-0"
      />
      <div className="mt-4 max-h-72 overflow-y-auto divide-y dark:divide-slate-800/60 pr-1">
        {filteredItems.length > 0 ? (
          filteredItems.slice(0, 10).map((item) => (
            <Link
              key={`${item.type}-${item.label}`}
              to={item.href}
              className="flex items-center justify-between gap-4 rounded-xl px-4 py-3 text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-all font-bold text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary"
              onClick={() => onOpenChange(false)}
            >
              <span className="flex flex-col">
                <span className="font-extrabold text-slate-800 dark:text-slate-100">{item.label}</span>
                <span className="text-[10px] uppercase tracking-wider text-slate-400 dark:text-slate-500 font-black">{item.type}</span>
              </span>
              <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-black">Open</span>
            </Link>
          ))
        ) : (
          <p className="px-3 py-10 text-center text-sm text-slate-500 dark:text-slate-400 font-medium">No results found for "{query}".</p>
        )}
      </div>
      <Button variant="outline" className="mt-5 w-full rounded-xl border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-bold" onClick={() => onOpenChange(false)}>
        Close Search
      </Button>
    </div>
  );
}
