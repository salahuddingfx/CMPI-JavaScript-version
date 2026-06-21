import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SectionHeader } from "@/components/SectionHeader";
import { getStudentBills } from "@/services/api";
import { LoadingSkeleton } from "@/components/LoadingSkeleton";
import { AlertCircle, CreditCard, CheckCircle } from "lucide-react";

export function Bills() {
  const [bills, setBills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getStudentBills()
      .then(setBills)
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="space-y-6">
        <SectionHeader eyebrow="Bills" title="Fee & bill records" description="Loading bills..." align="left" />
        <LoadingSkeleton />
      </div>
    );
  }

  const pendingBills = bills.filter((b) => b.status === "pending");
  const paidBills = bills.filter((b) => b.status === "paid");

  return (
    <div className="space-y-6">
      <SectionHeader eyebrow="Bills" title="Bills and payments" description="View pending and paid institutional charges." align="left" />

      {bills.length === 0 ? (
        <div className="rounded-2xl border bg-white dark:bg-slate-950 p-8 text-center text-slate-500">
          No bills found. Contact the accounts office for details.
        </div>
      ) : (
        <>
          {/* Pending Bills */}
          {pendingBills.length > 0 && (
            <div>
              <h3 className="mb-3 text-sm font-bold text-yellow-600">Pending ({pendingBills.length})</h3>
              <div className="space-y-3">
                {pendingBills.map((bill) => (
                  <div key={bill.id} className="flex flex-col gap-2 rounded-2xl border border-yellow-200 bg-yellow-50/50 dark:bg-yellow-950/10 p-5 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="font-bold text-slate-900 dark:text-white">{bill.title || bill.type}</p>
                      <p className="text-xs text-slate-500 mt-1">Due: {bill.due_date ? new Date(bill.due_date).toLocaleDateString() : "—"}</p>
                      {bill.description && <p className="text-xs text-slate-400 mt-1">{bill.description}</p>}
                    </div>
                    <div className="text-left sm:text-right">
                      <p className="font-extrabold text-yellow-700 dark:text-yellow-400 text-lg">৳{parseFloat(bill.amount || 0).toLocaleString()}</p>
                      <span className="inline-block mt-1 text-[10px] font-bold px-2 py-0.5 rounded bg-yellow-100 text-yellow-700">Pending</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Paid Bills */}
          {paidBills.length > 0 && (
            <div>
              <h3 className="mb-3 text-sm font-bold text-green-600">Paid ({paidBills.length})</h3>
              <div className="space-y-3">
                {paidBills.map((bill) => (
                  <div key={bill.id} className="flex flex-col gap-2 rounded-2xl border bg-slate-50 dark:bg-slate-900/60 p-5 sm:flex-row sm:items-center sm:justify-between opacity-75">
                    <div>
                      <p className="font-bold text-slate-800 dark:text-slate-200">{bill.title || bill.type}</p>
                      <p className="text-xs text-slate-500 mt-1">Paid: {bill.paid_at ? new Date(bill.paid_at).toLocaleDateString() : "—"}</p>
                    </div>
                    <div className="text-left sm:text-right">
                      <p className="font-extrabold text-green-700 dark:text-green-400 text-lg">৳{parseFloat(bill.amount || 0).toLocaleString()}</p>
                      <span className="inline-block mt-1 text-[10px] font-bold px-2 py-0.5 rounded bg-green-100 text-green-700">Paid</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}

      <div className="rounded-3xl border bg-white dark:bg-slate-950 p-8 text-center shadow-sm">
        <p className="text-sm text-slate-500">Need a challan or payment receipt?</p>
        <p className="mt-2 text-base font-bold text-slate-900 dark:text-white">Contact the accounts office during working hours.</p>
        <Link to="/contact" className="mt-4 inline-flex rounded-xl bg-primary px-6 py-3 text-sm font-bold text-white hover:opacity-90 transition-opacity">
          Contact office
        </Link>
      </div>
    </div>
  );
}

export default Bills;
