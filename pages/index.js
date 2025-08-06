import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>FitxGen – Track Smart. Live Fit.</title>
        <meta name="description" content="Know your body fat percentage in 60 seconds. Scientifically accurate. AI-powered insights." />
      </Head>

      <main className="min-h-screen bg-white text-gray-800">
        <header className="p-4 shadow-md flex justify-between items-center">
          <h1 className="text-xl font-bold">FitxGen</h1>
          <nav>
            <Link href="/login" className="mr-4 text-blue-600">Login</Link>
            <Link href="/payment" className="bg-black text-white px-4 py-2 rounded-full">Calculate Now</Link>
          </nav>
        </header>

        <section className="text-center py-16 px-4">
          <h2 className="text-4xl font-bold mb-4">Track Smart. Live Fit.</h2>
          <p className="mb-6 text-lg">Know your root cause. Check your body fat percentage in just 60 seconds.</p>
          <Link href="/payment" className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium">Get Started – ₹99</Link>
        </section>

        <section className="grid md:grid-cols-3 gap-8 p-8">
          <FeatureCard
            img="https://cdn-icons-png.flaticon.com/512/1048/1048945.png"
            title="Heart Health"
            text="Excess fat can lead to high blood pressure and cardiovascular risk."
          />
          <FeatureCard
            img="https://cdn-icons-png.flaticon.com/512/833/833472.png"
            title="Belly Fat"
            text="Visceral fat around the waist is a major marker of metabolic issues."
          />
          <FeatureCard
            img="https://cdn-icons-png.flaticon.com/512/833/833458.png"
            title="Hip Fat"
            text="Fat around the hips impacts posture, movement and body alignment."
          />
        </section>

        <footer className="text-center p-4 text-sm text-gray-500">
          <Link href="/terms" className="mr-4">Terms</Link>
          <Link href="/privacy" className="mr-4">Privacy</Link>
          <Link href="/refund">Refund Policy</Link>
          <p className="mt-2">&copy; 2025 FitxGen. All rights reserved.</p>
        </footer>
      </main>
    </>
  );
}

function FeatureCard({ img, title, text }) {
  return (
    <div className="text-center">
      <img src={img} alt={title} width={200} height={200} className="mx-auto mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{text}</p>
    </div>
  );
}
