import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Award, ChevronDown, ChevronUp, Search, AlertCircle, Link2 } from 'lucide-react';
import { getStudentResults } from '@/services/api';
import { BtebResultCard } from '@/components/results/BtebResultCard';
import { SEM_ORDER, semIndex } from '@/components/results/ResultHelpers';
import Loader from '@/components/Loader';

const Results = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [courseResults, setCourseResults] = useState([]);
  const [boardResults, setBoardResults] = useState([]);
  const [openSem, setOpenSem] = useState(null);

  useEffect(() => {
    async function fetchResults() {
      try {
        const data = await getStudentResults();
        setCourseResults(data.course_results || []);
        setBoardResults(data.board_results || []);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to load results.');
      } finally {
        setLoading(false);
      }
    }
    fetchResults();
  }, []);

  const handleAutoPopulateCalculator = () => {};

  if (loading) {
    return (
      <div className="flex h-96 items-center justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl font-black text-slate-900 dark:text-white">Academic Results</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-1">Your semester and board examination results.</p>
      </motion.div>

      {error && (
        <div className="rounded-xl border border-destructive/30 bg-destructive/10 p-4 text-destructive text-sm flex items-center gap-2">
          <AlertCircle className="h-5 w-5 shrink-0" />
          {error}
        </div>
      )}

      {/* BTEB Board Results */}
      {boardResults.length > 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <BtebResultCard
            btebResults={boardResults}
            query={boardResults[0]?.roll || ''}
            searchType="roll"
            onCalculateCgpa={handleAutoPopulateCalculator}
          />
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white dark:bg-slate-950 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm p-8 text-center"
        >
          <Link2 className="mx-auto h-10 w-10 text-slate-300 dark:text-slate-600 mb-3" />
          <h3 className="font-black text-slate-900 dark:text-white">No Board Results Found</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 max-w-md mx-auto">
            No BTEB board roll number is linked to your profile. Contact administration or add your board roll in profile settings.
          </p>
        </motion.div>
      )}

      {/* Internal Course Results */}
      {courseResults.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-lg font-black text-slate-900 dark:text-white mb-4">Internal Course Results</h2>
          <div className="space-y-4">
            {courseResults.map((result, i) => (
              <div
                key={result.id || i}
                className="bg-white dark:bg-slate-950 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
                  onClick={() => setOpenSem(openSem === i ? null : i)}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-black text-slate-900 dark:text-white">{result.semester || `Semester ${i + 1}`}</h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{result.course_name || 'Course Result'}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    {result.sgpa && (
                      <div className="text-right">
                        <p className="text-2xl font-black text-slate-900 dark:text-white">{parseFloat(result.sgpa).toFixed(2)}</p>
                        <p className="text-xs font-bold text-green-500 uppercase">SGPA</p>
                      </div>
                    )}
                    {openSem === i ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                  </div>
                </button>
                {openSem === i && (
                  <div className="border-t border-slate-100 dark:border-slate-800 p-6">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                      {Object.entries(result).filter(([k]) => !['id', 'user_id', 'created_at', 'updated_at'].includes(k)).map(([key, val]) => (
                        <div key={key}>
                          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{key.replace(/_/g, ' ')}</p>
                          <p className="font-bold text-slate-900 dark:text-white mt-0.5">{val ?? '—'}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* No results at all */}
      {boardResults.length === 0 && courseResults.length === 0 && !error && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-slate-950 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm p-10 text-center"
        >
          <Search className="mx-auto h-10 w-10 text-slate-300 dark:text-slate-600 mb-3" />
          <h3 className="font-black text-slate-900 dark:text-white">No Results Found</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 max-w-md mx-auto">
            No results are linked to your account yet. Please contact administration.
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default Results;
