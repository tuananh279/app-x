import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-100 flex flex-1 flex-col">
      {/* Hero Section */}
      <section className="bg-foreground text-white text-center py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Welcome to App X</h1>
          <p className="text-lg">Manage your time, check the weather, and explore the lunar calendar all in one place.</p>
          <div className="mt-6">
            <Link href={'/countdown'} className="px-4 py-2 rounded-full bg-white text-foreground font-medium">Get Started</Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold mb-2">Countdown</h3>
            <p className="text-gray-600">Track upcoming events with ease and precision.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold mb-2">Weather</h3>
            <p className="text-gray-600">Get accurate weather updates for your location.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold mb-2">Lunar Calendar</h3>
            <p className="text-gray-600">Explore the lunar calendar and special days.</p>
          </div>
        </div>
      </section>
      <section className="container mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Join with us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold mb-2">Countdown</h3>
            <p className="text-gray-600">Track upcoming events with ease and precision.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold mb-2">Weather</h3>
            <p className="text-gray-600">Get accurate weather updates for your location.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold mb-2">Lunar Calendar</h3>
            <p className="text-gray-600">Explore the lunar calendar and special days.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
