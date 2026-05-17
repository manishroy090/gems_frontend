"use client";

export default function OrganizationStatusPage() {
  const statuses = [
    {
      title: "Pending",
      description:
        "Your organization registration has been submitted and is waiting to be processed.",
      color: "bg-amber-100 text-amber-700 border-amber-200",
      icon: "⏳",
      progress: "25%",
    },
    {
      title: "Under Review",
      description:
        "Our compliance and verification team is reviewing your submitted documents.",
      color: "bg-sky-100 text-sky-700 border-sky-200",
      icon: "🩺",
      progress: "50%",
    },
    {
      title: "Verified",
      description:
        "Your organization has been successfully verified and approved.",
      color: "bg-emerald-100 text-emerald-700 border-emerald-200",
      icon: "✅",
      progress: "100%",
    },
    {
      title: "Rejected",
      description:
        "The verification request was rejected due to missing or invalid information.",
      color: "bg-rose-100 text-rose-700 border-rose-200",
      icon: "❌",
      progress: "0%",
    },
    {
      title: "Suspended",
      description:
        "Your organization account has been temporarily suspended pending review.",
      color: "bg-slate-200 text-slate-700 border-slate-300",
      icon: "🚫",
      progress: "--",
    },
  ];

  // Change this dynamically later
  const currentStatus = statuses[1];

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-10">
      <div className="max-w-7xl mx-auto space-y-8">

        {/* ================= HEADER ================= */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
              Organization Verification Status
            </h1>

            <p className="mt-3 text-slate-500 max-w-2xl">
              Monitor your healthcare organization onboarding,
              compliance approval, and operational verification process.
            </p>
          </div>

          <div
            className={`px-5 py-4 rounded-2xl border shadow-sm flex items-center gap-4 ${currentStatus.color}`}
          >
            <div className="text-3xl">
              {currentStatus.icon}
            </div>

            <div>
              <p className="text-xs uppercase tracking-wide opacity-70">
                Current Status
              </p>

              <p className="font-bold text-lg">
                {currentStatus.title}
              </p>
            </div>
          </div>

        </div>

        {/* ================= CURRENT STATUS ================= */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">

          <div className="p-8">

            <div className="flex flex-col xl:flex-row gap-10 xl:items-center xl:justify-between">

              {/* LEFT */}
              <div className="max-w-3xl">

                <div
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border ${currentStatus.color}`}
                >
                  <span>{currentStatus.icon}</span>
                  {currentStatus.title}
                </div>

                <h2 className="mt-6 text-3xl font-bold text-slate-900 leading-tight">
                  Healthcare Organization Review In Progress
                </h2>

                <p className="mt-4 text-slate-600 leading-relaxed text-[15px]">
                  Your organization profile, healthcare licenses,
                  regulatory documents, and operational information
                  are currently under verification.
                  Once the review process is completed,
                  your organization will gain full platform access.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">

                  <button className="px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-medium transition">
                    Upload Documents
                  </button>

                  <button className="px-6 py-3 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-700 font-medium transition">
                    Contact Support
                  </button>

                </div>
              </div>

              {/* RIGHT */}
              <div className="w-full xl:w-[340px] bg-slate-50 rounded-2xl border border-slate-200 p-6">

                <div className="flex items-center justify-between">
                  <p className="font-semibold text-slate-800">
                    Verification Progress
                  </p>

                  <span className="text-sm text-slate-500 font-medium">
                    {currentStatus.progress}
                  </span>
                </div>

                <div className="mt-4 w-full h-3 rounded-full bg-slate-200 overflow-hidden">
                  <div
                    className="h-full bg-teal-600 rounded-full"
                    style={{ width: currentStatus.progress }}
                  />
                </div>

                <div className="mt-8 space-y-5 text-sm">

                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">
                      Documents Submitted
                    </span>

                    <span className="font-medium text-emerald-600">
                      Completed
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">
                      Compliance Review
                    </span>

                    <span className="font-medium text-sky-600">
                      In Progress
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">
                      Final Approval
                    </span>

                    <span className="font-medium text-slate-400">
                      Pending
                    </span>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ================= WORKFLOW ================= */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8">

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-slate-900">
              Verification Workflow
            </h3>

            <p className="mt-2 text-slate-500">
              Complete organization verification lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-5">

            {statuses.map((status, index) => (
              <div
                key={index}
                className={`rounded-2xl border p-5 transition hover:shadow-md ${status.color}`}
              >

                <div className="text-3xl">
                  {status.icon}
                </div>

                <h4 className="mt-4 text-lg font-bold">
                  {status.title}
                </h4>

                <p className="mt-3 text-sm leading-relaxed opacity-80">
                  {status.description}
                </p>

                <div className="mt-5 flex items-center justify-between text-xs uppercase tracking-wide font-medium">
                  <span>Status</span>
                  <span>{status.progress}</span>
                </div>

              </div>
            ))}

          </div>
        </div>

        {/* ================= FAILURE SECTION ================= */}
        <div className="bg-white rounded-3xl border border-rose-200 shadow-sm p-8">

          <div className="flex items-start gap-5">

            <div className="w-14 h-14 rounded-2xl bg-rose-100 flex items-center justify-center text-rose-600 text-2xl shrink-0">
              ❌
            </div>

            <div className="flex-1">

              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

                <div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Why Verification Failed
                  </h3>

                  <p className="mt-2 text-slate-500">
                    Your organization verification could not be completed
                    due to the following issues.
                  </p>
                </div>

                <div className="px-4 py-2 rounded-full bg-rose-100 text-rose-700 border border-rose-200 text-sm font-medium">
                  Action Required
                </div>

              </div>

              {/* Reasons */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <h4 className="font-semibold text-slate-900">
                    Invalid License Document
                  </h4>

                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    Uploaded healthcare licenses were expired,
                    unclear, or mismatched with organization records.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <h4 className="font-semibold text-slate-900">
                    Missing Compliance Information
                  </h4>

                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    Some mandatory healthcare compliance or regulatory
                    information was incomplete during submission.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <h4 className="font-semibold text-slate-900">
                    Document Mismatch
                  </h4>

                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    Submitted organization information did not match
                    supporting legal documents.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <h4 className="font-semibold text-slate-900">
                    Manual Compliance Hold
                  </h4>

                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    Additional internal verification was required
                    before approval could continue.
                  </p>
                </div>

              </div>

              {/* Actions */}
              <div className="mt-8 bg-rose-50 border border-rose-200 rounded-2xl p-6">

                <h4 className="font-semibold text-rose-700">
                  Recommended Next Steps
                </h4>

                <ul className="mt-5 space-y-3 text-sm text-slate-700">

                  <li className="flex gap-2">
                    <span className="text-rose-600">•</span>
                    Re-upload all healthcare licenses and organization documents.
                  </li>

                  <li className="flex gap-2">
                    <span className="text-rose-600">•</span>
                    Ensure all submitted information matches official records.
                  </li>

                  <li className="flex gap-2">
                    <span className="text-rose-600">•</span>
                    Verify healthcare certifications are active and valid.
                  </li>

                  <li className="flex gap-2">
                    <span className="text-rose-600">•</span>
                    Contact compliance support for clarification if needed.
                  </li>

                </ul>

                <div className="mt-8 flex flex-wrap gap-4">

                  <button className="px-6 py-3 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-medium transition">
                    Re-submit Verification
                  </button>

                  <button className="px-6 py-3 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-700 font-medium transition">
                    Contact Compliance Team
                  </button>

                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ================= ACTIVITY ================= */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8">

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-slate-900">
              Recent Activity
            </h3>

            <p className="mt-2 text-slate-500">
              Latest verification updates and compliance actions.
            </p>
          </div>

          <div className="space-y-6">

            <div className="flex gap-4">
              <div className="w-11 h-11 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                ✓
              </div>

              <div>
                <p className="font-medium text-slate-900">
                  Documents uploaded successfully
                </p>

                <p className="text-sm text-slate-500 mt-1">
                  Today • 09:30 AM
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-11 h-11 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                🩺
              </div>

              <div>
                <p className="font-medium text-slate-900">
                  Compliance review started
                </p>

                <p className="text-sm text-slate-500 mt-1">
                  Yesterday • 02:15 PM
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-11 h-11 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                ⏳
              </div>

              <div>
                <p className="font-medium text-slate-900">
                  Verification request submitted
                </p>

                <p className="text-sm text-slate-500 mt-1">
                  2 days ago • 11:45 AM
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}