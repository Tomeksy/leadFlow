import React, { useState } from 'react';
import { ExternalLink, Building2, Play } from 'lucide-react';
import LeadForm from './components/LeadForm';
import SourceCard from './components/SourceCard';
import { sources } from './data/sources';

function App() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-400 via-teal-400 to-blue-500">
      {/* Header */}
      <header className="w-full py-4">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="flex items-center gap-3">
            <Building2 className="h-8 w-8 text-blue-600" />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900">Immo-Solutions AI</span>
              <span className="text-sm text-gray-700">
                Powered by{' '}
                <a 
                  href="https://www.harvestflow.ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-blue-800"
                >
                  Harvest Flow
                </a>
              </span>
            </div>
          </div>
          <div className="text-sm text-gray-700 md:text-right mt-2 md:mt-0">
            Inspiriert durch Studien, unter anderem vom Deutschen Institut für Service-Qualität
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 md:px-6 py-16 space-y-16">
        {/* Standalone Header */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
          <span className="relative inline-block">
            Garantiert
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-teal-400"></span>
          </span>
          {' '}- mehr Kunden durch 18-Sekunden Lead Response
        </h1>

        {/* Problem Statement Section */}
        <section className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md p-6">
          <div className="prose max-w-none">
            <p className="text-lg leading-relaxed mb-4">
              Dein Team gibt jeden Tag 110 % - und trotzdem bleiben Leads auf der Strecke. 
              Das liegt <span className="font-bold">nicht</span> an dir oder deinen Maklern.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              <span className="font-bold">Die Wahrheit ist</span>: Die Tools im Office-Management der Immobilienbranche lassen selbst die besten Teams im Stich. 
              Ganze 47 % der E-Mail-Anfragen bleiben unbeantwortet; so verlieren selbst Top-Makler wertvolle Chancen.
            </p>
            <p className="text-lg leading-relaxed">
              <span className="font-bold">Simple Mathematik, gestützt durch</span> aktuelle Branchenstudien (siehe Quellen unten), zeigen: 
              Wer schneller reagiert, gewinnt. Harvest Flow macht genau das möglich.
            </p>
          </div>
        </section>

        {/* Video Section with Play Icon */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 justify-start">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white">
              <Play className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">So funktioniert die KI-Lösung</h2>
          </div>
          <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/uZzpI9C_NLw" 
              title="WriteMap - eine kostenlose Software, die ChatGPT beibringt, wie DU klingst und schreibst."
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Innovation Section */}
        <section className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md p-6">
          <h2 className="text-xl md:text-2xl font-bold mb-6">
            🚀 Innovation sucht Pioniere
          </h2>
          <p className="text-lg mb-4">
            Das Harvest Flow Immo-AI System ist mehr als eine Idee - es ist ein getestetes System, 
            das nur noch wenige Wochen vom Praxis-Einsatz ist.
          </p>
          <div className="space-y-4 mb-6">
            <p className="flex items-center gap-2">
              ➜ Ein vollständig getestetes System
            </p>
            <p className="flex items-center gap-2">
              ➜ Neue Standards in der Region setzen
            </p>
            <p className="flex items-center gap-2">
              ➜ Ein sicherer erster Schritt in die Automatisierung
            </p>
          </div>
          <p className="text-lg font-medium mb-6">
            Die Anzahl der First-Mover-Plätze ist begrenzt. Sichere deinen Vorsprung jetzt.
          </p>
          <button
            onClick={() => setShowForm(true)}
            className="w-full md:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md 
                     font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 
                     focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
          >
            Jetzt Early Access sichern
          </button>
        </section>

        {/* Sources Grid */}
        <section className="grid md:grid-cols-2 gap-4">
          {sources.map((source, index) => (
            <SourceCard key={index} {...source} />
          ))}
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 mt-16 bg-white/10 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center text-gray-800">
          <a 
            href="https://www.harvestflow.ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors duration-200"
          >
            Harvest Flow
          </a>
          {' '}— aus Liebe zur Technologie und Innovation
        </div>
      </footer>

      {/* Lead Form Modal */}
      {showForm && (
        <LeadForm onClose={() => setShowForm(false)} />
      )}
    </div>
  );
}

export default App;
