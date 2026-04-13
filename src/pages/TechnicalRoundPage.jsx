import { Link } from 'react-router-dom';

export default function TechnicalRoundPage() {
  return (
    <div className="flex h-[calc(100vh-64px)] w-full">
      {/* Problem Statement Panel (40%) */}
      <section className="w-[40%] bg-surface-container-low overflow-y-auto flex flex-col">
        <div className="p-8 space-y-8">
          {/* Tabs */}
          <div className="flex gap-4 border-b border-outline-variant/20 pb-4">
            <button className="text-primary font-semibold text-sm">Problem Description</button>
            <button className="text-on-surface-variant text-sm hover:text-on-surface transition-colors">
              Solution Strategy
            </button>
            <button className="text-on-surface-variant text-sm hover:text-on-surface transition-colors">
              Submissions
            </button>
          </div>
          <div>
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-3xl font-bold tracking-tight text-on-surface">
                Design a High-Performance Cache
              </h1>
              <span className="px-3 py-1 bg-tertiary-container text-tertiary text-[10px] uppercase font-bold rounded-full tracking-wider">
                Level 2
              </span>
            </div>
            <div className="space-y-6 text-on-surface-variant leading-relaxed text-sm">
              <p>
                Design a data structure that follows the constraints of a{' '}
                <strong>Least Recently Used (LRU) Cache</strong>. It should support two operations:{' '}
                <code className="text-primary bg-primary-container/30 px-1 rounded">get</code> and{' '}
                <code className="text-primary bg-primary-container/30 px-1 rounded">put</code>.
              </p>
              <div className="space-y-3">
                <h3 className="text-on-surface font-semibold uppercase text-xs tracking-widest">
                  Requirements
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Initialize the LRU cache with a positive capacity.</li>
                  <li>
                    <code className="text-on-surface font-mono">get(key)</code>: Return value if key
                    exists, otherwise return -1.
                  </li>
                  <li>
                    <code className="text-on-surface font-mono">put(key, value)</code>: Update value if
                    exists, or insert new key. If capacity is reached, evict the least recently used
                    item.
                  </li>
                </ul>
              </div>
              <div className="bg-surface-container-high p-6 rounded-xl border border-outline-variant/10">
                <h3 className="text-on-surface font-semibold text-sm mb-4">Constraints</h3>
                <ul className="space-y-2 font-mono text-xs">
                  <li className="flex justify-between border-b border-outline-variant/10 pb-2">
                    <span>capacity</span>
                    <span className="text-primary">1 ≤ capacity ≤ 3000</span>
                  </li>
                  <li className="flex justify-between border-b border-outline-variant/10 pb-2">
                    <span>key, value</span>
                    <span className="text-primary">0 ≤ k, v ≤ 10⁴</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Time Complexity</span>
                    <span className="text-tertiary">O(1) average</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-on-surface font-semibold text-sm">Example Test Case</h3>
                <div className="bg-surface-container-lowest p-4 rounded-lg font-mono text-xs space-y-2 border border-outline-variant/10">
                  <div className="text-outline">
                    Input: ["LRUCache", "put", "put", "get", "put", "get"]
                  </div>
                  <div className="text-outline">Params: [[2], [1, 1], [2, 2], [1], [3, 3], [2]]</div>
                  <div className="text-tertiary">Output: [null, null, null, 1, null, -1]</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editor & Console (60%) */}
      <section className="w-[60%] flex flex-col bg-surface-container-lowest relative">
        {/* IDE Toolbar */}
        <div className="h-14 bg-surface-container border-b border-outline-variant/20 flex items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <select className="bg-surface-container-high border-none text-primary text-sm rounded-lg py-1 px-4 focus:ring-1 focus:ring-primary/30">
              <option>Python 3.10</option>
              <option>JavaScript (Node.js)</option>
              <option>C++ (Clang 15)</option>
              <option>Java 17</option>
            </select>
            <div className="flex gap-1">
              <button className="material-symbols-outlined text-on-surface-variant hover:text-on-surface p-1.5 transition-colors">
                history
              </button>
              <button className="material-symbols-outlined text-on-surface-variant hover:text-on-surface p-1.5 transition-colors">
                light_mode
              </button>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-5 py-1.5 text-sm font-medium text-primary hover:bg-surface-container-high rounded-lg transition-all active:scale-[0.98]">
              Run Code
            </button>
            <button className="px-6 py-1.5 text-sm font-bold text-on-primary-fixed rounded-lg shadow-lg shadow-on-primary-container/20 active:scale-[0.98] transition-all" style={{ background: 'linear-gradient(135deg, #ADC6FF 0%, #357DF1 100%)' }}>
              Submit Solution
            </button>
          </div>
        </div>

        {/* Code Area */}
        <div className="flex-grow flex font-mono text-[13px] overflow-hidden">
          {/* Line Numbers */}
          <div className="w-12 bg-surface-container-low text-outline-variant text-right pr-4 py-6 select-none leading-6">
            {Array.from({ length: 20 }, (_, i) => (
              <div key={i}>{i + 1}</div>
            ))}
          </div>

          {/* Main Editor Surface */}
          <div className="flex-grow p-6 text-on-surface/90 leading-6 relative bg-surface-container-lowest">
            <span className="text-tertiary-fixed-dim">class</span>{' '}
            <span className="text-primary-fixed">LRUCache</span>:<br />
            <span className="pl-4 text-tertiary-fixed-dim">def</span>{' '}
            <span className="text-primary-fixed">__init__</span>(self, capacity: int):<br />
            <span className="pl-8 text-outline-variant italic">
              # Initialize your data structure here
            </span>
            <br />
            <span className="pl-8 text-primary">self</span>.capacity = capacity<br />
            <span className="pl-8 text-primary">self</span>.cache = {'{}'}<br />
            <br />
            <span className="pl-4 text-tertiary-fixed-dim">def</span>{' '}
            <span className="text-primary-fixed">get</span>(self, key: int) -&gt; int:<br />
            <span className="pl-8 text-outline-variant italic"># Your code here</span>
            <br />
            <span className="pl-8 text-secondary">return</span> -1<br />
            <br />
            <span className="pl-4 text-tertiary-fixed-dim">def</span>{' '}
            <span className="text-primary-fixed">put</span>(self, key: int, value: int) -&gt; None:
            <br />
            <span className="pl-8 text-outline-variant italic"># Your code here</span>
            <br />
            <span className="pl-8 text-secondary">pass</span>
            <br />
            <br />
            <span className="absolute right-4 bottom-4 opacity-50 select-none text-[10px] uppercase tracking-tighter">
              Monaco Editor Instance
            </span>
            {/* Cursor Simulation */}
            <span className="inline-block w-[2px] h-5 bg-primary animate-pulse relative top-1"></span>
          </div>
        </div>

        {/* Terminal Output */}
        <div className="h-48 bg-surface-container-low border-t border-outline-variant/30 flex flex-col terminal-shadow z-10">
          <div className="h-10 bg-surface-container px-6 flex items-center justify-between border-b border-outline-variant/10">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-sm text-tertiary">terminal</span>
              <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                Console Output
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-[10px] text-tertiary flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span> System Ready
              </span>
              <button className="material-symbols-outlined text-xs text-on-surface-variant hover:text-on-surface">
                close
              </button>
            </div>
          </div>
          <div className="flex-grow p-5 font-mono text-xs text-on-surface-variant space-y-1 overflow-y-auto">
            <div className="flex gap-2">
              <span className="text-outline-variant">14:02:11</span>
              <span className="text-primary">[System]</span> Environment initialized successfully.
            </div>
            <div className="flex gap-2">
              <span className="text-outline-variant">14:02:12</span>
              <span className="text-primary">[System]</span> Running sample tests...
            </div>
            <div className="flex gap-2 mt-2">
              <span className="text-error">Error:</span> line 12: unexpected indentation
            </div>
            <div className="flex gap-2">
              <span className="text-on-surface-variant">
                Traceback: in module <span className="underline">LRUCache</span>
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
