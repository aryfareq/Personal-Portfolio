function Experience({ description, org, logo, title }) {
  return (
    <div className="w-full h-full flex items-center justify-between px-6">
      <div className="max-w-6xl w-full grid grid-cols-[1.3fr_1fr_auto] gap-6 items-center">

        {/* LEFT — TEXT COLUMN */}
        <div className="flex flex-col justify-between text-slate-700 min-h-[30vh]">
          
          {/* DESCRIPTION (TOP) */}
          <p className="text-base leading-relaxed max-w-xl">
            “{description}”
          </p>

          {/* ORG NAME (BOTTOM) */}
          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              {org}
            </h2>

            {title && (
              <span className="text-slate-500 text-sm">
                {title}
              </span>
            )}
          </div>
        </div>

        {/* RIGHT — LOGO */}
        <div className="flex items-center justify-center gap-0">
          {logo && (
            <img
              src={logo}
              alt={org}
            draggable={false}
              className="w-50 h-50 object-contain"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Experience;
