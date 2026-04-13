import { Link } from 'react-router-dom';

export default function MessagingPage() {
  return (
    <div className="flex-1 flex overflow-hidden h-full">
      {/* Conversation List Sidebar */}
      <section className="w-full md:w-80 lg:w-96 bg-surface-container-low flex flex-col border-r border-surface-container-high/50">
        <div className="p-4 border-b border-surface-container-high/50">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-on-surface">Conversations</h2>
            <button className="p-2 bg-primary/10 text-primary hover:bg-primary/20 rounded-lg transition-all">
              <span className="material-symbols-outlined text-sm">edit_square</span>
            </button>
          </div>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">
              filter_list
            </span>
            <input
              className="w-full bg-surface-container-lowest border-none rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-1 focus:ring-primary/30"
              placeholder="Filter by candidate..."
              type="text"
            />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          {/* Conversation Item: Active */}
          <div className="p-4 bg-surface-container-high/50 border-l-4 border-primary cursor-pointer transition-colors">
            <div className="flex gap-3">
              <div className="relative shrink-0">
                <img
                  className="w-12 h-12 rounded-xl object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1_WpDObHBqAJ4aLbFuaPCI3x25lAzfVoTEfKvtxC1uMaDz0aq4VdUT04d6rZQsurEsHa_IlmsU2gCxmG6LVXHJM4y4LghQE0kPURayPWo7cpawY9yqcP0BPnMYNig9JsIbT82pvba4-25HMpkiW_lXJ1014h4d6e-XGmKBKLCBZ98RIeBbFMbWE73iUzYwl7NQOphqNBRl4fnz6Fa7JU425wG3NfKdbh0ePvbd0HdY6wbN9olFnLI2XehOndliBcT0ryPOc4SYwrH"
                  alt="Sarah Jenkins"
                />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-tertiary border-4 border-surface-container-low rounded-full"></div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline mb-0.5">
                  <h3 className="text-sm font-semibold text-on-surface truncate">Sarah Jenkins</h3>
                  <span className="text-[10px] text-on-surface-variant font-medium">10:42 AM</span>
                </div>
                <p className="text-xs text-on-surface-variant font-medium mb-1 uppercase tracking-tight">
                  Lead UX Designer
                </p>
                <p className="text-xs text-primary truncate font-medium">
                  Sure, I'll send over the portfolio link...
                </p>
              </div>
            </div>
          </div>

          {/* Conversation Item: Marcus */}
          <div className="p-4 hover:bg-surface-container-high/30 cursor-pointer transition-colors border-l-4 border-transparent">
            <div className="flex gap-3">
              <div className="relative shrink-0">
                <img
                  className="w-12 h-12 rounded-xl object-cover grayscale"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcM-nX9YvkXRNqrGQ4zkM5v-8jIEofjP6fitVDiFr2iWx92gs2yjTpvdC-OcFYIysczjM-l9Y0wCY-GERXbOhr6ruFs3_IjRaO8lS_f-704i3uZQTviIv4cOiYqqjHvKzSmywt0T6n_RAcwMlO4MPwk20_eaWjtS9dpDzZQavwkDjnDcHXtjsGabarxErnLXVsxLYYvQ2S974TpM2o8gTyguIArrEY-CkIc6GyuHC3qk4EawTMiH_WwXZFPEUMhhNWWtwm1QeIz-N3"
                  alt="Marcus Chen"
                />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-surface-variant border-4 border-surface-container-low rounded-full"></div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline mb-0.5">
                  <h3 className="text-sm font-semibold text-on-surface truncate">Marcus Chen</h3>
                  <span className="text-[10px] text-on-surface-variant font-medium">Yesterday</span>
                </div>
                <p className="text-xs text-on-surface-variant font-medium mb-1 uppercase tracking-tight">
                  Fullstack Dev
                </p>
                <p className="text-xs text-on-surface-variant truncate">
                  The technical assessment looks good.
                </p>
              </div>
            </div>
          </div>

          {/* Conversation Item: Aria */}
          <div className="p-4 hover:bg-surface-container-high/30 cursor-pointer transition-colors border-l-4 border-transparent">
            <div className="flex gap-3">
              <div className="relative shrink-0">
                <div className="w-12 h-12 rounded-xl bg-secondary-container flex items-center justify-center text-secondary font-bold">
                  AL
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline mb-0.5">
                  <h3 className="text-sm font-semibold text-on-surface truncate">Aria Lopez</h3>
                  <span className="text-[10px] text-on-surface-variant font-medium">2d ago</span>
                </div>
                <p className="text-xs text-on-surface-variant font-medium mb-1 uppercase tracking-tight">
                  Product Manager
                </p>
                <p className="text-xs text-on-surface-variant truncate">
                  Thanks for the update on the role...
                </p>
              </div>
            </div>
          </div>

          {/* Conversation Item: David (Archived) */}
          <div className="p-4 hover:bg-surface-container-high/30 cursor-pointer transition-colors border-l-4 border-transparent">
            <div className="flex gap-3 opacity-60">
              <img
                className="w-12 h-12 rounded-xl object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkPGWp4I3KCteKQpusc_tkPBAIyhe5hk6--F0e_D2naSRMF1_19tMLxq4KtcpbRGKgQIha6DxSqiKJ2e5TnxnX0eGKv5Eus5bzjLGb6etZ7xXFJg0qLDmZnw1leOmQYQp9hg5bBjLC1aORrvVbDf_VXdLPJGJSUDQZlUtOlioSWqfaBVkF2PN618x0F8FIHmWx-H-wLS3OOL3B0o4s2jLCb7NkZrdypmw6ul-xNm1D62LDd0SzzthhW7igmFuUrhQfVchMt_fMtmZ2"
                alt="David Vance"
              />
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline mb-0.5">
                  <h3 className="text-sm font-semibold text-on-surface truncate">David Vance</h3>
                  <span className="text-[10px] text-on-surface-variant font-medium">Oct 12</span>
                </div>
                <p className="text-xs text-on-surface-variant">Archived Conversation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Active Thread Window */}
      <section className="flex-1 flex flex-col bg-surface overflow-hidden">
        {/* Thread Header */}
        <div className="h-16 border-b border-surface-container-high/50 px-6 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-4">
            <div className="md:hidden p-2 -ml-2 text-on-surface-variant">
              <span className="material-symbols-outlined">arrow_back</span>
            </div>
            <div className="flex items-center gap-3">
              <img
                className="w-10 h-10 rounded-lg object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5HxTCdTKsg0LGaMZyGt1ieWxJo6OEt5-cLUZgYBbuUyIgtM03FPNqY4sTgxsJVa4qVqLm-KEgUs1jy6PSgWiYsWX0tWBYOpFeFyfzdq0op88yQsLyfGS5sicG6fZ2HuXM2TeEmcOaVHiSCHuYqUICsTdbywClwtXS8SPNgMGBA-9-Wu8oi-_ibsn_P58ONjYtkJb0Wv-dULa4nIQxTt6B0QaEKWttTL14AsKK95xVkAd83rIz2usxATHnWX9WqtDbVD5pOzC-n_7N"
                alt="Sarah Jenkins"
              />
              <div>
                <h2 className="text-sm font-bold text-on-surface">Sarah Jenkins</h2>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-tertiary rounded-full"></span>
                  <span className="text-[11px] text-on-surface-variant font-medium uppercase tracking-widest">
                    Active now &bull; Lead UX Designer
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-colors">
              <span className="material-symbols-outlined">videocam</span>
            </button>
            <button className="p-2 text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-colors">
              <span className="material-symbols-outlined">call</span>
            </button>
            <div className="w-[1px] h-6 bg-surface-container-high mx-2"></div>
            <button className="p-2 text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-colors">
              <span className="material-symbols-outlined">info</span>
            </button>
          </div>
        </div>

        {/* Message Feed */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8 flex flex-col">
          {/* Date Divider */}
          <div className="flex items-center gap-4 py-4">
            <div className="flex-1 h-[1px] bg-surface-container-high"></div>
            <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
              Today, October 24th
            </span>
            <div className="flex-1 h-[1px] bg-surface-container-high"></div>
          </div>

          {/* Message: Receiver */}
          <div className="flex gap-4 max-w-2xl">
            <img
              className="w-8 h-8 rounded-lg object-cover shrink-0 self-end"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaOMFnaT9McdYx23DCebBjlAgxRO3Wn_ocw9Wyrfmb-Pxg2-bfMW84-F6CE7JzSdPQ7vNXmrG8tn697Gs-MwItP49VBOyEeaEdrE19UOjNvF-02FG7mUidA5Bf6bwJnHwdgnh3V1abBGRSpFymPZ0CJ02yWrx1zG80SrAIxlm1bsUaEUAR2zvWk-E7IMo5eR7b8y8bV-9nqQOY-IRwqLsSmaAC5e8YLVkOkd_R4tYO5OKqPCgt8fqLnKVrb1FoITRhVhp5oyg-SGKY"
              alt="Sarah avatar"
            />
            <div className="space-y-2">
              <div className="bg-surface-container-low p-4 rounded-2xl rounded-bl-none shadow-sm text-sm leading-relaxed text-on-surface">
                Hello! I've been reviewing the role description you sent over. The emphasis on
                AI-driven interfaces is exactly where I've been focusing my recent work at TechFlow.
              </div>
              <span className="text-[10px] text-on-surface-variant font-medium px-1">10:30 AM</span>
            </div>
          </div>

          {/* Message: Sender */}
          <div className="flex gap-4 max-w-2xl self-end flex-row-reverse">
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary font-bold text-[10px] shrink-0 self-end">
              RT
            </div>
            <div className="space-y-2 flex flex-col items-end">
              <div className="bg-primary text-on-primary-container p-4 rounded-2xl rounded-br-none shadow-lg text-sm leading-relaxed font-medium">
                That's great to hear, Sarah. We're looking for someone who can bridge the gap between
                complex LLM outputs and intuitive user patterns. Do you have any specific case studies
                on that?
              </div>
              <span className="text-[10px] text-on-surface-variant font-medium px-1">
                10:35 AM &bull; Read
              </span>
            </div>
          </div>

          {/* Message: Receiver (with Attachment) */}
          <div className="flex gap-4 max-w-2xl">
            <img
              className="w-8 h-8 rounded-lg object-cover shrink-0 self-end"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXGOIrjK8pzY2E757TwwHovRvxD6ofQ61__R3Cli37QTJNxx6u3cINLU1inaGKmM2UhN9zv-GOXZ_85dJmZSOVuz1g407UV0akaXt-BPUlDgKyXJBJ0-_Utx05puqGtH4ncTMfEHv7ILeokSyOaABCkDQvgHOJ10_Fpt_9g4XvzlL0fiCUurLBpE5FtlQniu7OerLDnNNO1l9sdzhsF0F0iO9HO5r6UNBisOV4VYUHWUbZEyYC50fA6UYWPCydIJdJXw8RSOJLBTt8"
              alt="Sarah avatar"
            />
            <div className="space-y-2">
              <div className="bg-surface-container-low p-4 rounded-2xl rounded-bl-none shadow-sm text-sm leading-relaxed text-on-surface">
                Absolutely. I've attached a PDF overview of the "Nexus AI" project I led last year. We
                saw a 40% increase in user retention after the redesign.
              </div>
              {/* Attachment Preview */}
              <div className="bg-surface-container-high border border-outline-variant/10 p-3 rounded-xl flex items-center gap-3 w-72 hover:bg-surface-bright transition-colors cursor-pointer group">
                <div className="w-10 h-10 rounded bg-error-container/30 flex items-center justify-center text-error">
                  <span className="material-symbols-outlined">picture_as_pdf</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-on-surface truncate">
                    Nexus_AI_Case_Study.pdf
                  </p>
                  <p className="text-[10px] text-on-surface-variant">4.2 MB &bull; PDF Document</p>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">
                  download
                </span>
              </div>
              <div className="bg-surface-container-low p-4 rounded-2xl rounded-bl-none shadow-sm text-sm leading-relaxed text-on-surface">
                Sure, I'll send over the portfolio link in a second as well.
              </div>
              <span className="text-[10px] text-on-surface-variant font-medium px-1">10:42 AM</span>
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="p-6 shrink-0">
          <div className="bg-surface-container-low rounded-2xl border border-outline-variant/20 focus-within:ring-2 focus-within:ring-primary/20 transition-all p-2">
            <textarea
              className="w-full bg-transparent border-none focus:ring-0 text-sm text-on-surface placeholder:text-on-surface-variant/50 resize-none px-3 pt-2"
              placeholder="Message Sarah Jenkins..."
              rows="2"
            ></textarea>
            <div className="flex items-center justify-between mt-2 px-2 pb-1">
              <div className="flex items-center gap-1">
                <button className="p-2 text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-colors">
                  <span className="material-symbols-outlined text-[20px]">add_circle</span>
                </button>
                <button className="p-2 text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-colors">
                  <span className="material-symbols-outlined text-[20px]">mood</span>
                </button>
                <button className="p-2 text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-colors">
                  <span className="material-symbols-outlined text-[20px]">alternate_email</span>
                </button>
                <div className="w-[1px] h-4 bg-surface-container-high mx-1"></div>
                <button className="p-2 text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-colors">
                  <span className="material-symbols-outlined text-[20px]">format_bold</span>
                </button>
                <button className="p-2 text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-colors">
                  <span className="material-symbols-outlined text-[20px]">link</span>
                </button>
              </div>
              <button className="bg-gradient-to-r from-primary to-on-primary-container text-surface px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 hover:opacity-90 active:scale-95 transition-all">
                <span>SEND</span>
                <span className="material-symbols-outlined text-sm">send</span>
              </button>
            </div>
          </div>
          <div className="flex items-center gap-4 mt-3 px-1">
            <p className="text-[10px] text-on-surface-variant font-medium">
              Press{' '}
              <kbd className="bg-surface-container-high px-1.5 py-0.5 rounded border border-outline-variant/20">
                Enter
              </kbd>{' '}
              to send
            </p>
          </div>
        </div>
      </section>

      {/* Contextual Sidebar (Details) */}
      <section className="hidden lg:flex w-72 bg-surface-container-lowest flex-col border-l border-surface-container-high/50 p-6 overflow-y-auto">
        <div className="text-center mb-8">
          <img
            className="w-24 h-24 rounded-2xl object-cover mx-auto mb-4 border-4 border-surface-container-low shadow-xl"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMfTy-fEiIZOxtT2vtujduLHrqE4u7vT4vlMAQqhiOP_2y31sPfgBXrVcOqGF-u3Kret5o_PgcjeCDqKS9Z6AmgP0ix_IfcXkmCY6Bv90pIxdsPedKrhYTaFP6Xe6928NIPLazPKtV-wH89KDOwzTEcG4FdKlMhiziwmTtCqfoL7Te7R0e_IjWCtkYfet8SvuUe6F9tqxpH3xovN5Sz8Fjy5haVYEMo64mz0UUX-f332dK2Cs_Ql96HPYxWHZ0uAfgW9cpI6q6H9mj"
            alt="Sarah Jenkins"
          />
          <h3 className="text-base font-bold text-on-surface">Sarah Jenkins</h3>
          <p className="text-xs text-on-surface-variant font-medium mb-4">
            Senior UX Designer @ TechFlow
          </p>
          <div className="flex justify-center gap-2">
            <button className="flex-1 bg-surface-container-high py-2 rounded-lg text-xs font-bold hover:bg-surface-bright transition-colors">
              PROFILE
            </button>
            <button className="flex-1 bg-surface-container-high py-2 rounded-lg text-xs font-bold hover:bg-surface-bright transition-colors">
              Hiring
            </button>
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-3">
              Recent Activity
            </p>
            <div className="space-y-3">
              <div className="flex gap-3">
                <span className="material-symbols-outlined text-sm text-tertiary">check_circle</span>
                <p className="text-[11px] text-on-surface">Completed initial screening</p>
              </div>
              <div className="flex gap-3">
                <span className="material-symbols-outlined text-sm text-primary">description</span>
                <p className="text-[11px] text-on-surface">Updated resume uploaded</p>
              </div>
              <div className="flex gap-3">
                <span className="material-symbols-outlined text-sm text-on-surface-variant">
                  schedule
                </span>
                <p className="text-[11px] text-on-surface">Portfolio review pending</p>
              </div>
            </div>
          </div>
          <div className="p-4 bg-surface-container-high rounded-xl">
            <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-2">
              AI MATCH SCORE
            </p>
            <div className="flex items-end justify-between">
              <span className="text-2xl font-black text-on-surface">
                94<span className="text-sm font-normal text-on-surface-variant">%</span>
              </span>
              <div className="flex-1 h-1.5 bg-surface-container-low rounded-full mx-4 mb-2 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-primary to-on-primary-container w-[94%]"></div>
              </div>
            </div>
            <p className="text-[10px] text-on-surface-variant mt-2 leading-relaxed">
              Highly compatible with the{' '}
              <span className="text-primary">Lead UX Designer</span> role requirements.
            </p>
          </div>
          <div>
            <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-3">
              Pinned Links
            </p>
            <Link
              to="#"
              className="flex items-center justify-between p-2 hover:bg-surface-container-high rounded-lg transition-colors group"
            >
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-sm text-on-surface-variant group-hover:text-primary">
                  language
                </span>
                <span className="text-[11px] font-medium text-on-surface">Personal Portfolio</span>
              </div>
              <span className="material-symbols-outlined text-xs text-on-surface-variant">
                open_in_new
              </span>
            </Link>
            <Link
              to="#"
              className="flex items-center justify-between p-2 hover:bg-surface-container-high rounded-lg transition-colors group"
            >
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-sm text-on-surface-variant group-hover:text-primary">
                  share
                </span>
                <span className="text-[11px] font-medium text-on-surface">LinkedIn Profile</span>
              </div>
              <span className="material-symbols-outlined text-xs text-on-surface-variant">
                open_in_new
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
