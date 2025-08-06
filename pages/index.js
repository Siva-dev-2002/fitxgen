import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>FitxGen – Track Smart. Live Fit.</title>
        <meta
          name="description"
          content="Know your body fat percentage in 60 seconds. Scientifically accurate. AI-powered insights."
        />
      </Head>

      <main className="min-h-screen bg-white text-gray-800">
        <header className="p-4 shadow-md flex justify-between items-center">
          <h1 className="text-xl font-bold">FitxGen</h1>
          <nav>
            <Link href="/login" className="mr-4">Login</Link>
            <Link href="/payment" className="bg-black text-white px-4 py-2 rounded-full">Calculate Now</Link>
          </nav>
        </header>

        <section className="text-center py-16 px-4">
          <h2 className="text-4xl font-bold mb-4">Track Smart. Live Fit.</h2>
          <p className="mb-6 text-lg">Know your root cause. Check your body fat percentage in just 60 seconds.</p>
          <Link href="/payment" className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium">
            Get Started – ₹99
          </Link>
        </section>

        <section className="grid md:grid-cols-3 gap-8 p-8">
          <Card
            src="https://cdn-icons-png.flaticon.com/512/1048/1048945.png"
            alt="Heart with fat"
            title="Heart Health"
            description="Excess fat can lead to high blood pressure and cardiovascular risk."
          />
          <Card
            src="https://cdn-icons-png.flaticon.com/512/833/833472.png"
            alt="Belly fat"
            title="Belly Fat"
            description="Visceral fat around the waist is a major marker of metabolic issues."
          />
          <Card
            src="https://cdn-icons-png.flaticon.com/512/833/833458.png"
            alt="Hip fat"
            title="Hip Fat"
            description="Fat around the hips impacts posture, movement and body alignment."
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

function Card({ src, alt, title, description }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="text-center">
      {!imgError ? (
        <img
          src={src}
          alt={alt}
          width={200}
          height={200}
          onError={() => setImgError(true)}
          className="mx-auto"
        />
      ) : (
        <div className="w-[200px] h-[200px] mx-auto bg-gray-100 flex items-center justify-center text-gray-400">
          Image not found
        </div>
      )}
      <h3 className="text-xl font-semibold mt-4">{title}</h3>
      <p>{description}</p>
    </div>
  );
}
