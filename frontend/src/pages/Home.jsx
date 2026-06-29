import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Home() {

  const navigate = useNavigate();

  const floatAnim = {
    animate: { y: [0, -12, 0] },
    transition: { repeat: Infinity, duration: 3 }
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-white px-6 pt-28 font-['Sora']">

      {/* HERO */}
      <section
        className="relative h-[85vh] flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=2070&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div className="space-y-8">

            <h1 className="text-7xl font-extrabold leading-tight">
              Make Smarter <br />
              <span className="text-indigo-400">Loan Decisions</span>
            </h1>

            <p className="text-2xl text-gray-300 max-w-lg">
              Evaluate your income, expenses, and credit score to understand your loan eligibility and plan repayments confidently.
            </p>

            {/* BUTTONS */}
            <div className="flex gap-4">

              <motion.button
                {...floatAnim}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/dashboard")}
                className="px-10 py-5 text-xl bg-indigo-500 rounded-xl hover:bg-indigo-600 shadow-lg"
              >
                Check Eligibility
              </motion.button>

              {/* ✅ ALWAYS VISIBLE LOGIN BUTTON */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/login")}
                className="px-8 py-5 text-xl bg-white/10 border border-white/20 rounded-xl hover:bg-white/20"
              >
                Login
              </motion.button>

            </div>

          </div>

          {/* RIGHT CARD */}
          <motion.div
            {...floatAnim}
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-lg p-10 rounded-2xl border border-white/20 w-[380px]"
          >
            <h3 className="text-3xl mb-4 font-semibold">
              Instant Insights
            </h3>
            <p className="text-lg text-gray-300">
              Get a quick overview of your loan eligibility, estimated EMI, and financial standing in seconds.
            </p>
          </motion.div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="py-12 max-w-7xl mx-auto grid md:grid-cols-3 gap-6">

        <motion.div {...floatAnim} className="bg-indigo-500/10 p-8 rounded-2xl border border-indigo-400/20">
          <h3 className="text-2xl text-indigo-400 font-bold">
            Eligibility Analysis
          </h3>
          <p className="mt-3 text-gray-300">
            Evaluate your financial profile to determine loan approval chances.
          </p>
        </motion.div>

        <motion.div {...floatAnim} className="bg-green-500/10 p-8 rounded-2xl border border-green-400/20">
          <h3 className="text-2xl text-green-400 font-bold">
            EMI Calculation
          </h3>
          <p className="mt-3 text-gray-300">
            Estimate monthly repayments based on loan amount and interest rates.
          </p>
        </motion.div>

        <motion.div {...floatAnim} className="bg-purple-500/10 p-8 rounded-2xl border border-purple-400/20">
          <h3 className="text-2xl text-purple-400 font-bold">
            Smart Recommendations
          </h3>
          <p className="mt-3 text-gray-300">
            Get suggestions to improve eligibility and choose better loan options.
          </p>
        </motion.div>

      </section>

      {/* ADS STRIP */}
      <section className="py-12 max-w-7xl mx-auto">

        <motion.div
          {...floatAnim}
          whileHover={{ scale: 1.02 }}
          className="bg-indigo-500/20 backdrop-blur-md border border-indigo-400/30 p-12 rounded-2xl text-center shadow-xl"
        >
          <h2 className="text-3xl font-bold mb-4 text-indigo-300">
            Understand Your Loan Options Clearly
          </h2>

          <p className="text-lg text-gray-200">
            Compare different loan scenarios, analyze repayment capacity, and make informed financial decisions with confidence.
          </p>

        </motion.div>

      </section>

      {/* TABLE */}
      <section className="py-16 max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-12">
          Compare Interest Rates Across Banks
        </h2>

        <div className="overflow-hidden rounded-2xl shadow-2xl border border-white/10">

          <table className="w-full text-center text-2xl">

            <thead className="bg-indigo-600 text-white text-xl">
              <tr>
                <th className="py-6">Bank</th>
                <th>Home Loan</th>
                <th>Car Loan</th>
                <th>Personal Loan</th>
              </tr>
            </thead>

            <tbody className="bg-[#1f2937]">

              <tr className="border-b border-gray-700 hover:bg-[#2a3446]">
                <td className="py-6 text-indigo-400 font-semibold">SBI</td>
                <td>8.4%</td>
                <td>9%</td>
                <td>11%</td>
              </tr>

              <tr className="border-b border-gray-700 hover:bg-[#2a3446]">
                <td className="py-6 text-indigo-400 font-semibold">HDFC</td>
                <td>8.5%</td>
                <td>9.5%</td>
                <td>12%</td>
              </tr>

              <tr className="hover:bg-[#2a3446]">
                <td className="py-6 text-indigo-400 font-semibold">ICICI</td>
                <td>8.6%</td>
                <td>10%</td>
                <td>13%</td>
              </tr>

            </tbody>

          </table>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 text-gray-400 bg-[#0b1220]">
        © 2025 LoanAI • Smart Loan Analysis Platform
      </footer>

    </div>
  );
}