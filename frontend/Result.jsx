import { useEffect, useState } from "react";
import API from "../api";

export default function History() {

  const [history, setHistory] = useState([]);
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState({});

  // fetch
  const load = async () => {
    try {
      const res = await API.get("/loan");
      setHistory(res.data || []);
    } catch (e) {
      alert("Error loading history");
    }
  };

  useEffect(() => {
    load();
  }, []);

  // delete
  const handleDelete = async (id) => {
    try {
      await API.delete(`/loan/${id}`);
      setHistory((prev) => prev.filter((x) => x._id !== id));
    } catch {
      alert("Delete failed");
    }
  };

  // start edit
  const startEdit = (item) => {
    setEditId(item._id);
    setForm({
      loanType: item.loanType,
      amount: item.amount || "",
      income: item.income || "",
      expenses: item.expenses || "",
      interestRate: item.interestRate || "",
      tenure: item.tenure || "",
      creditScore: item.creditScore || "",
      employmentType: item.employmentType || "salaried",
      existingLoans: item.existingLoans || 0
    });
  };

  // save edit
  const handleUpdate = async (id) => {
    try {
      await API.put(`/loan/${id}`, form);
      setEditId(null);
      await load();
    } catch (e) {
      alert("Update failed");
    }
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-white pt-28 px-6">

      <h1 className="text-4xl text-center mb-10">Loan History</h1>

      <div className="max-w-5xl mx-auto space-y-4">

        {history.map((item) => (
          <div key={item._id} className="bg-white/10 p-6 rounded-xl">

            {editId === item._id ? (
              <>
                {/* EDIT FORM */}
                <div className="grid grid-cols-2 gap-3">

                  <input
                    className="p-2 bg-[#1e293b] text-white rounded"
                    value={form.amount}
                    onChange={(e) => setForm({ ...form, amount: e.target.value })}
                    placeholder="Amount"
                  />

                  <input
                    className="p-2 bg-[#1e293b] text-white rounded"
                    value={form.income}
                    onChange={(e) => setForm({ ...form, income: e.target.value })}
                    placeholder="Income"
                  />

                  <input
                    className="p-2 bg-[#1e293b] text-white rounded"
                    value={form.expenses}
                    onChange={(e) => setForm({ ...form, expenses: e.target.value })}
                    placeholder="Expenses"
                  />

                  <input
                    className="p-2 bg-[#1e293b] text-white rounded"
                    value={form.interestRate}
                    onChange={(e) => setForm({ ...form, interestRate: e.target.value })}
                    placeholder="Interest Rate"
                  />

                  <input
                    className="p-2 bg-[#1e293b] text-white rounded"
                    value={form.tenure}
                    onChange={(e) => setForm({ ...form, tenure: e.target.value })}
                    placeholder="Tenure"
                  />

                  <input
                    className="p-2 bg-[#1e293b] text-white rounded"
                    value={form.creditScore}
                    onChange={(e) => setForm({ ...form, creditScore: e.target.value })}
                    placeholder="Credit Score"
                  />

                </div>

                <button
                  onClick={() => handleUpdate(item._id)}
                  className="bg-green-500 px-4 py-2 mt-3 mr-2 rounded"
                >
                  Save
                </button>

                <button
                  onClick={() => setEditId(null)}
                  className="bg-gray-500 px-4 py-2 mt-3 rounded"
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                {/* DISPLAY */}
                <div className="grid grid-cols-2 gap-4">

                  <p><b>Loan:</b> {item.loanType}</p>
                  <p><b>Amount:</b> ₹ {item.amount ?? 0}</p>

                  <p><b>Income:</b> ₹ {item.income}</p>
                  <p><b>Expenses:</b> ₹ {item.expenses}</p>

                  <p><b>EMI:</b> ₹ {item.emi}</p>
                  <p><b>Rate:</b> {item.interestRate}%</p>

                  <p>
                    <b>Status:</b>
                    <span className={
                      item.status === "Eligible" ? "text-green-400 ml-2" :
                      item.status === "Risky" ? "text-red-400 ml-2" :
                      "text-yellow-400 ml-2"
                    }>
                      {item.status}
                    </span>
                  </p>

                  <p><b>Score:</b> {item.eligibilityScore}</p>

                </div>

                <button
                  onClick={() => startEdit(item)}
                  className="bg-yellow-500 px-4 py-2 mt-3 mr-2 rounded"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(item._id)}
                  className="bg-red-500 px-4 py-2 mt-3 rounded"
                >
                  Delete
                </button>
              </>
            )}

          </div>
        ))}

      </div>

    </div>
  );
}