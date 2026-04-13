import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function PascoAssessmentPage() {
  const [selectedOption, setSelectedOption] = useState('B');

  const options = [
    {
      id: 'A',
      text: 'Schedule an emergency 15-minute sync with both stakeholders to present the trade-offs and let them decide the priority.',
    },
    {
      id: 'B',
      text: "Acknowledge the architect's concern by documenting the vulnerability as a 'Critical' ticket for the next sprint's first day, while maintaining focus on the investor demo.",
    },
    {
      id: 'C',
      text: 'Direct half the team to start the refactor immediately while the other half works overtime to complete the UI polish.',
    },
    {
      id: 'D',
      text: 'Consult the Senior Developer for their opinion and follow whatever they recommend to avoid individual responsibility.',
    },
  ];

  return (
    <div className="flex-grow flex w-full max-w-[1600px] mx-auto overflow-hidden">
      {/* Left: Question Area (Scenario Based) */}
      <section className="flex-grow overflow-y-auto px-12 py-10 custom-scrollbar">
        <div className="max-w-3xl mx-auto space-y-10">
          {/* Question Header */}
          <div className="space-y-4">
            <span className="px-3 py-1 rounded-full bg-tertiary-container text-tertiary text-[10px] font-bold uppercase tracking-wider">
              Situational Judgment
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-on-surface leading-tight">
              Managing Conflicting Stakeholder Priorities during a High-Stakes Sprint
            </h2>
          </div>

          {/* Scenario Content Card */}
          <div className="bg-surface-container-low p-8 rounded-xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-primary/40"></div>
            <div className="prose prose-invert max-w-none">
              <p className="text-on-surface-variant leading-relaxed text-lg">
                During the final two days of a critical delivery sprint for a FinTech module, the Lead
                Architect requests an immediate refactor of the authentication middleware to address a
                theoretical edge-case vulnerability. Simultaneously, the Product Owner insists that the
                team remains focused on completing the 'User Dashboard' UI polish, which was promised to
                investors for a demo tomorrow.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg mt-4">
                The team is already at capacity, and shifting focus now will jeopardize the demo, while
                ignoring the architect's concern could introduce technical debt or security risks later.
              </p>
            </div>
          </div>

          {/* Question Prompt */}
          <div className="pt-4">
            <p className="text-xl font-medium text-primary-fixed mb-8 italic">
              Which of the following actions best demonstrates professional prioritization and technical
              leadership?
            </p>

            {/* Multiple Choice Options */}
            <div className="space-y-4">
              {options.map((option) => {
                const isSelected = selectedOption === option.id;
                return (
                  <label
                    key={option.id}
                    className={`group relative flex items-start gap-4 p-5 rounded-xl cursor-pointer transition-all ${
                      isSelected
                        ? 'bg-surface-container-high border border-primary/50 shadow-[0_0_20px_rgba(173,198,255,0.05)]'
                        : 'bg-surface-container-high/50 border border-transparent hover:border-primary/30 hover:bg-surface-container-high'
                    }`}
                    onClick={() => setSelectedOption(option.id)}
                  >
                    <input
                      className="mt-1 text-primary focus:ring-primary bg-surface-container-highest border-outline-variant"
                      name="assessment-option"
                      type="radio"
                      checked={isSelected}
                      readOnly
                    />
                    <div className="flex flex-col">
                      <span className="text-on-surface font-medium">{option.text}</span>
                      <span
                        className={`text-xs mt-1 uppercase tracking-wide ${
                          isSelected ? 'text-primary/80' : 'text-on-surface-variant/60'
                        }`}
                      >
                        Option {option.id}
                        {isSelected && ' (Selected)'}
                      </span>
                    </div>
                    {isSelected && (
                      <span
                        className="absolute right-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-primary"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        check_circle
                      </span>
                    )}
                  </label>
                );
              })}
            </div>
          </div>

          {/* Footer Actions */}
          <div className="flex items-center justify-between pt-12 pb-20 border-t border-surface-container-high">
            <button className="flex items-center gap-2 px-6 py-3 text-on-surface-variant hover:text-on-surface transition-colors font-semibold">
              <span className="material-symbols-outlined">arrow_back</span>
              Previous Question
            </button>
            <div className="flex gap-4">
              <button className="px-6 py-3 rounded-lg bg-surface-container-high text-on-surface font-semibold hover:bg-surface-bright transition-all">
                Mark for Review
              </button>
              <button className="px-8 py-3 rounded-lg bg-gradient-to-br from-primary to-on-primary-container text-on-primary font-bold shadow-lg shadow-primary/10 hover:brightness-110 active:scale-95 transition-all flex items-center gap-2">
                Next Question
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Right: Question Palette / Side Panel */}
      <aside className="w-80 bg-surface-container-low h-full flex flex-col border-l border-surface-container-high">
        <div className="p-6 border-b border-surface-container-high">
          <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-1">
            Question Palette
          </h3>
          <p className="text-[11px] text-on-surface-variant font-medium">
            Quick navigation between tasks
          </p>
        </div>
        <div className="flex-grow p-6 overflow-y-auto">
          <div className="grid grid-cols-5 gap-3">
            {/* Answered: 1-4 */}
            {[1, 2, 3, 4].map((n) => (
              <button
                key={n}
                className="h-10 w-10 flex items-center justify-center rounded-lg bg-on-tertiary-fixed-variant text-tertiary text-xs font-bold border border-tertiary/20"
              >
                {n}
              </button>
            ))}
            {/* Current (Active): 5 */}
            <button className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary text-on-primary text-xs font-black shadow-[0_0_15px_rgba(173,198,255,0.3)] ring-2 ring-primary ring-offset-4 ring-offset-surface-container-low">
              5
            </button>
            {/* Marked for Review: 6 */}
            <button className="h-10 w-10 flex items-center justify-center rounded-lg bg-error-container text-error text-xs font-bold border border-error/20 relative">
              6
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-error rounded-full border-2 border-surface-container-low"></span>
            </button>
            {/* Unanswered: 7-20 */}
            {Array.from({ length: 14 }, (_, i) => i + 7).map((n) => (
              <button
                key={n}
                className="h-10 w-10 flex items-center justify-center rounded-lg bg-surface-container-highest text-on-surface-variant text-xs font-medium hover:bg-surface-bright transition-colors"
              >
                {n}
              </button>
            ))}
          </div>
        </div>

        {/* Legend and Info */}
        <div className="p-6 bg-surface-container-lowest space-y-4">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 text-[11px] font-semibold text-on-surface-variant">
              <div className="w-3 h-3 bg-on-tertiary-fixed-variant rounded-sm"></div>
              Answered (4)
            </div>
            <div className="flex items-center gap-3 text-[11px] font-semibold text-on-surface-variant">
              <div className="w-3 h-3 bg-surface-container-highest rounded-sm border border-outline-variant/30"></div>
              Not Visited (14)
            </div>
            <div className="flex items-center gap-3 text-[11px] font-semibold text-on-surface-variant">
              <div className="w-3 h-3 bg-error-container rounded-sm"></div>
              Marked for Review (1)
            </div>
          </div>
          <div className="pt-4 border-t border-surface-container-high/50">
            <button className="w-full py-4 text-center text-sm font-bold text-on-surface bg-surface-container-high rounded-xl hover:bg-surface-bright transition-all">
              Final Submission
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
}
