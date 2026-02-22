/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans">
      <header className="bg-gray-900 shadow-lg py-4 px-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-emerald-400 tracking-tight">
          Quantum Fintech Shield
        </h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#risk" className="text-gray-300 hover:text-emerald-400 transition-colors">Risk Assessment</a></li>
            <li><a href="#strategies" className="text-gray-300 hover:text-emerald-400 transition-colors">Strategies</a></li>
            <li><a href="#simulation" className="text-gray-300 hover:text-emerald-400 transition-colors">Simulation</a></li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto py-12 px-8">
        <section id="risk" className="mb-16">
          <h2 className="text-4xl font-bold text-emerald-300 mb-8">Quantum Vulnerability Assessment</h2>
          <p className="text-lg text-gray-300 mb-6">Evaluate your financial portfolio's susceptibility to quantum threats.</p>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="flex items-center space-x-4">
              <input
                type="number"
                placeholder="Portfolio Value (USD)"
                className="flex-grow p-3 rounded-md bg-gray-700 text-gray-100 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <button className="px-6 py-3 bg-emerald-600 text-white font-semibold rounded-md hover:bg-emerald-700 transition-colors">
                Assess Risk
              </button>
            </div>
            <div className="mt-6 p-4 bg-gray-700 rounded-md text-gray-200">
              <p className="font-mono text-sm">Risk Score: <span className="text-yellow-400">Moderate</span></p>
              <p className="font-mono text-sm">Vulnerability: <span className="text-red-400">High (Current Encryption: RSA-2048)</span></p>
            </div>
          </div>
        </section>

        <section id="strategies" className="mb-16">
          <h2 className="text-4xl font-bold text-emerald-300 mb-8">Post-Quantum Encryption Strategies</h2>
          <p className="text-lg text-gray-300 mb-6">Discover and implement recommended upgrades to secure your assets.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700">
              <h3 className="text-xl font-semibold text-emerald-300 mb-2">CRYSTALS-Dilithium</h3>
              <p className="text-gray-400 text-sm mb-4">A lattice-based digital signature scheme selected by NIST for standardization. Ideal for authentication.</p>
              <button className="text-emerald-400 hover:text-emerald-300 transition-colors text-sm">Learn More &rarr;</button>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700">
              <h3 className="text-xl font-semibold text-emerald-300 mb-2">CRYSTALS-Kyber</h3>
              <p className="text-gray-400 text-sm mb-4">A lattice-based key-encapsulation mechanism (KEM) also selected by NIST. Suitable for secure key exchange.</p>
              <button className="text-emerald-400 hover:text-emerald-300 transition-colors text-sm">Learn More &rarr;</button>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700">
              <h3 className="text-xl font-semibold text-emerald-300 mb-2">Falcon</h3>
              <p className="text-gray-400 text-sm mb-4">Another lattice-based signature scheme, offering smaller signatures and faster verification, though more complex.</p>
              <button className="text-emerald-400 hover:text-emerald-300 transition-colors text-sm">Learn More &rarr;</button>
            </div>
          </div>
        </section>

        <section id="simulation">
          <h2 className="text-4xl font-bold text-emerald-300 mb-8">Secure Transaction Simulation</h2>
          <p className="text-lg text-gray-300 mb-6">Simulate transactions under various encryption methods to observe their resilience.</p>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <input
                type="text"
                placeholder="Transaction Amount (USD)"
                className="p-3 rounded-md bg-gray-700 text-gray-100 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <select
                className="p-3 rounded-md bg-gray-700 text-gray-100 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="">Select Encryption Strategy</option>
                <option value="dilithium">CRYSTALS-Dilithium</option>
                <option value="kyber">CRYSTALS-Kyber</option>
                <option value="falcon">Falcon</option>
                <option value="rsa">Traditional RSA-2048</option>
              </select>
            </div>
            <button className="w-full px-6 py-3 bg-emerald-600 text-white font-semibold rounded-md hover:bg-emerald-700 transition-colors mb-6">
              Run Simulation
            </button>
            <div className="p-4 bg-gray-700 rounded-md text-gray-200">
              <h3 className="text-xl font-semibold text-emerald-300 mb-2">Simulation Results:</h3>
              <p className="font-mono text-sm">Strategy: <span className="text-blue-400">CRYSTALS-Kyber</span></p>
              <p className="font-mono text-sm">Status: <span className="text-green-400">Secure against Quantum Threat</span></p>
              <p className="font-mono text-sm">Latency: <span className="text-gray-300">150ms</span></p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
