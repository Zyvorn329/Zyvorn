import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function GamingWebsite() {
  const [isLogin, setIsLogin] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    playerName: "",
    freeFireUID: "",
    gameLevel: "",
    email: "",
    whatsapp: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const [authData, setAuthData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAuthChange = (e) => {
    const { name, value } = e.target;
    setAuthData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    // Validation
    if (
      !formData.playerName ||
      !formData.freeFireUID ||
      !formData.email ||
      !formData.whatsapp
    ) {
      setSubmitMessage("❌ कृपया सभी जरूरी फील्ड भरें");
      setIsSubmitting(false);
      return;
    }

    try {
      // Formspree के लिए form data तैयार करें
      const form = new FormData();
      form.append("playerName", formData.playerName);
      form.append("freeFireUID", formData.freeFireUID);
      form.append("gameLevel", formData.gameLevel);
      form.append("email", formData.email);
      form.append("whatsapp", formData.whatsapp);
      form.append("message", formData.message);

      const response = await fetch(
        "https://formspree.io/f/xyzdefgh",
        {
          method: "POST",
          body: form,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        setSubmitMessage("✅ आवेदन सफलतापूर्वक जमा हो गया 🚀");
        setFormData({
          playerName: "",
          freeFireUID: "",
          gameLevel: "",
          email: "",
          whatsapp: "",
          message: "",
        });
      } else {
        setSubmitMessage("❌ कुछ गलत हुआ। फिर से कोशिश करें");
      }
    } catch (error) {
      setSubmitMessage("❌ नेटवर्क त्रुटि। कृपया फिर से कोशिश करें");
    }

    setIsSubmitting(false);
  };

  const handleAuthSubmit = (e) => {
    e.preventDefault();

    if (!authData.email || !authData.password) {
      alert("❌ सभी फील्ड भरें");
      return;
    }

    if (!isLogin && !authData.username) {
      alert("❌ यूजरनेम भरें");
      return;
    }

    if (isLogin) {
      alert(`✅ स्वागत है! ${authData.email}`);
    } else {
      alert(`✅ खाता बनाया गया! ${authData.username}`);
    }

    setAuthData({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900 via-black to-blue-900 opacity-90"></div>

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-500 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20"></div>

      <div className="relative z-10">
        {/* Header */}
        <header className="flex items-center justify-between px-8 py-6 border-b border-white/10 backdrop-blur-md">
          <div>
            <h1 className="text-4xl font-extrabold tracking-widest text-red-500 drop-shadow-lg">
              ZYVORN
            </h1>
            <p className="text-sm text-gray-300">Free Fire Esports Clan</p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 text-lg font-semibold">
            <a href="#home" className="hover:text-red-400 transition">
              Home
            </a>
            <a href="#about" className="hover:text-blue-400 transition">
              About
            </a>
            <a href="#join" className="hover:text-red-400 transition">
              Join Clan
            </a>
            <a href="#contact" className="hover:text-blue-400 transition">
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </header>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden bg-black/80 backdrop-blur-lg border-b border-white/10 py-6 px-8 space-y-4 flex flex-col text-lg font-semibold">
            <a href="#home" className="hover:text-red-400 transition">
              Home
            </a>
            <a href="#about" className="hover:text-blue-400 transition">
              About
            </a>
            <a href="#join" className="hover:text-red-400 transition">
              Join Clan
            </a>
            <a href="#contact" className="hover:text-blue-400 transition">
              Contact
            </a>
          </nav>
        )}

        {/* Hero Section */}
        <section
          id="home"
          className="flex flex-col items-center justify-center text-center px-6 py-28"
        >
          <h2 className="text-6xl md:text-8xl font-black leading-tight bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent drop-shadow-xl">
            DOMINATE THE BATTLEFIELD
          </h2>

          <p className="mt-6 max-w-2xl text-lg md:text-xl text-gray-300">
            Join the ultimate Free Fire esports squad. Compete in tournaments,
            build your squad, and become a legend.
          </p>

          <button
            onClick={() => document.getElementById("join").scrollIntoView()}
            className="mt-10 px-10 py-4 rounded-2xl bg-gradient-to-r from-red-600 to-blue-600 hover:scale-105 transition-all duration-300 shadow-2xl text-xl font-bold"
          >
            JOIN NOW
          </button>
        </section>

        {/* About Section */}
        <section id="about" className="px-8 py-20 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 shadow-xl">
              <h3 className="text-4xl font-bold text-red-400 mb-4">
                About Our Clan
              </h3>
              <p className="text-gray-300 leading-8 text-lg">
                ZYVORN is a competitive Free Fire gaming clan built for skilled
                players who want to dominate ranked matches and esports events.
                We focus on teamwork, strategy, and becoming champions.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 shadow-xl">
              <h3 className="text-4xl font-bold text-blue-400 mb-4">
                What We Offer
              </h3>
              <ul className="space-y-4 text-lg text-gray-300">
                <li>🔥 Daily Custom Rooms</li>
                <li>⚔️ Tournament Participation</li>
                <li>🎮 Pro Team Gameplay</li>
                <li>🏆 Clan Ranking Push</li>
                <li>💎 Friendly Gaming Community</li>
                <li>📲 Instant WhatsApp Team Join</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Join Form */}
        <section id="join" className="px-6 py-20">
          <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-2xl">
            <h2 className="text-5xl font-black text-center bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent mb-10">
              Player Registration
            </h2>

            <form onSubmit={handleFormSubmit} className="space-y-6">
              <input
                type="text"
                name="playerName"
                placeholder="Player Name"
                value={formData.playerName}
                onChange={handleFormChange}
                className="w-full p-4 rounded-2xl bg-black/40 border border-gray-700 focus:outline-none focus:border-red-500"
                required
              />

              <input
                type="text"
                name="freeFireUID"
                placeholder="Free Fire UID"
                value={formData.freeFireUID}
                onChange={handleFormChange}
                className="w-full p-4 rounded-2xl bg-black/40 border border-gray-700 focus:outline-none focus:border-blue-500"
                required
              />

              <input
                type="number"
                name="gameLevel"
                placeholder="In-Game Level"
                value={formData.gameLevel}
                onChange={handleFormChange}
                className="w-full p-4 rounded-2xl bg-black/40 border border-gray-700 focus:outline-none focus:border-red-500"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleFormChange}
                className="w-full p-4 rounded-2xl bg-black/40 border border-gray-700 focus:outline-none focus:border-blue-500"
                required
              />

              <input
                type="tel"
                name="whatsapp"
                placeholder="WhatsApp Number (10 अंक)"
                value={formData.whatsapp}
                onChange={handleFormChange}
                className="w-full p-4 rounded-2xl bg-black/40 border border-gray-700 focus:outline-none focus:border-red-500"
                required
              />

              <textarea
                name="message"
                placeholder="Why do you want to join our clan?"
                rows="5"
                value={formData.message}
                onChange={handleFormChange}
                className="w-full p-4 rounded-2xl bg-black/40 border border-gray-700 focus:outline-none focus:border-blue-500"
              ></textarea>

              {submitMessage && (
                <div className="text-center text-lg font-bold p-4 rounded-2xl bg-black/40 border border-gray-700">
                  {submitMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-2xl text-2xl font-bold bg-gradient-to-r from-red-600 to-blue-600 hover:scale-[1.02] transition-all duration-300 shadow-xl disabled:opacity-50"
              >
                {isSubmitting ? "जमा हो रहा है..." : "SUBMIT APPLICATION 🚀"}
              </button>
            </form>

            <a
              href="https://wa.me/918879292668?text=Hello%20ZYVORN%20Team%2C%20I%20want%20to%20join%20the%20clan!"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-8 text-center w-full py-4 rounded-2xl text-2xl font-bold bg-green-600 hover:scale-[1.02] transition-all duration-300 shadow-xl"
            >
              JOIN WHATSAPP GROUP 📲
            </a>
          </div>
        </section>

        {/* Login Signup Section */}
        <section className="px-6 py-20">
          <div className="max-w-2xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-2xl">
            <h2 className="text-5xl font-black text-center bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent mb-10">
              {isLogin ? "LOGIN" : "SIGN UP"}
            </h2>

            <form onSubmit={handleAuthSubmit} className="space-y-6">
              {!isLogin && (
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={authData.username}
                  onChange={handleAuthChange}
                  className="w-full p-4 rounded-2xl bg-black/40 border border-gray-700 focus:outline-none focus:border-red-500"
                />
              )}

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={authData.email}
                onChange={handleAuthChange}
                className="w-full p-4 rounded-2xl bg-black/40 border border-gray-700 focus:outline-none focus:border-blue-500"
              />

              <input
                type="password"
                name="password"
                placeholder="Password"
                value={authData.password}
                onChange={handleAuthChange}
                className="w-full p-4 rounded-2xl bg-black/40 border border-gray-700 focus:outline-none focus:border-red-500"
              />

              <button
                type="submit"
                className="w-full py-4 rounded-2xl text-2xl font-bold bg-gradient-to-r from-red-600 to-blue-600 hover:scale-[1.02] transition-all duration-300 shadow-xl"
              >
                {isLogin ? "LOGIN 🚀" : "CREATE ACCOUNT 🔥"}
              </button>
            </form>

            <div className="text-center mt-6 text-gray-300">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="ml-2 text-red-400 hover:text-blue-400 font-bold"
              >
                {isLogin ? "Sign Up" : "Login"}
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer
          id="contact"
          className="border-t border-white/10 text-center py-8 text-gray-400"
        >
          <p className="text-lg">© 2026 ZYVORN Esports Clan • All Rights Reserved</p>
          <p className="mt-4 text-sm">
            WhatsApp: <a href="https://wa.me/918879292668" className="text-green-400 hover:underline">+91 8879292668</a>
          </p>
        </footer>
      </div>
    </div>
  );
}
