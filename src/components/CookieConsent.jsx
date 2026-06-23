import { useState, useEffect } from 'react';
import { Cookie, X, Check, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { logCookieConsent } from '@/services/api';

const STORAGE_KEY = 'cmpi-cookie-consent';
const CONSENT_DURATION = 7 * 24 * 60 * 60 * 1000;

function getEmail() {
  try {
    const user = localStorage.getItem('cmpi_user');
    if (user) return JSON.parse(user).email || null;
  } catch {}
  return null;
}

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const data = JSON.parse(raw);
        if (Date.now() - data.timestamp < CONSENT_DURATION) return;
      }
    } catch {}
    setVisible(true);
  }, []);

  function handleConsent(type) {
    logCookieConsent(type, getEmail()).catch(() => {});
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ accepted: type === 'accept', timestamp: Date.now() }));
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-2xl">
      <div className="max-w-6xl mx-auto px-4 py-4 sm:px-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <Cookie className="mt-0.5 w-5 h-5 shrink-0 text-primary" />
            <div className="text-sm text-slate-500 dark:text-slate-400">
              <p className="font-semibold text-slate-900 dark:text-white">This site uses cookies</p>
              <p>
                We use essential cookies for authentication and security.{' '}
                <button type="button" onClick={() => setExpanded(!expanded)} className="text-primary hover:underline font-medium">
                  {expanded ? 'Show less' : 'Learn more'}
                </button>
              </p>
              {expanded && (
                <div className="mt-2 space-y-1.5 text-xs border-l-2 border-primary/30 pl-3">
                  <p><strong className="text-slate-900 dark:text-white">Essential cookies</strong> — Auth tokens, session data. Required for login and dashboard.</p>
                  <p><strong className="text-slate-900 dark:text-white">Preference cookies</strong> — Remember me, theme choice. Used only if you opt in.</p>
                  <p className="mt-1">
                    <Link to="/cookie-policy" className="text-primary hover:underline font-medium inline-flex items-center gap-1">
                      <Info className="w-3 h-3" /> Full cookie policy
                    </Link>
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button type="button" onClick={() => handleConsent('deny')} className="flex items-center gap-1.5 rounded-full border border-slate-300 dark:border-slate-600 px-4 py-2 text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition">
              <X className="w-3.5 h-3.5" /> Deny
            </button>
            <button type="button" onClick={() => handleConsent('accept')} className="flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-bold text-white hover:bg-primary/90 transition">
              <Check className="w-3.5 h-3.5" /> Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
