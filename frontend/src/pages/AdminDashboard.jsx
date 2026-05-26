import PageHeader from "../components/ui/PageHeader";
import CreateArtistForm from "../features/admin/components/CreateArtistForm";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-[#0d081b] p-8 text-slate-100">
      <div className="mx-auto max-w-5xl space-y-8">
        <PageHeader
          title="YoshiCat HQ"
          subtitle="Studio Management Portal"
          badge="System Admin"
        />

        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-white">
              Onboard New Artist
            </h2>

            <p className="text-sm leading-relaxed text-slate-400">
              Registering an artist instantly publishes them to the
              customer-facing dashboard.
            </p>
          </div>

          <div className="md:col-span-2">
            <CreateArtistForm />
          </div>
        </div>
      </div>
    </div>
  );
}
