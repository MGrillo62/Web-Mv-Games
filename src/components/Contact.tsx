"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Check, Send, AlertCircle, Dices, ChevronUp, RefreshCw } from "lucide-react";

// Custom SVG path for official WhatsApp Logo
const WhatsAppIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={`${className} fill-current shrink-0`} xmlns="http://www.w3.org/2000/svg">
    <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.333 4.982L2 22l5.202-1.362a9.92 9.92 0 0 0 4.81 1.233h.005c5.505 0 9.99-4.477 9.99-9.983A9.97 9.97 0 0 0 12.012 2zm5.72 13.905c-.247.696-1.229 1.296-1.74 1.346-.466.046-1.077.228-3.15-.623-2.651-1.087-4.362-3.784-4.495-3.96-.133-.177-1.082-1.439-1.082-2.744 0-1.305.682-1.947.925-2.207.243-.26.533-.326.711-.326l.51.004c.163.003.385-.062.602.463.224.542.766 1.868.833 2.003.067.135.112.293.023.473-.09.18-.135.292-.27.45l-.427.5c-.135.158-.278.33-.12.603.158.273.702 1.155 1.503 1.87.103.092.207.185.313.273.924.764 1.637.994 1.956 1.154.27.135.428.112.585-.068.158-.18.675-.788.855-1.058.18-.27.36-.225.608-.135.247.09 1.575.743 1.845.878.27.135.45.203.518.315.068.112.068.653-.18 1.349z" />
  </svg>
);

export default function Contact() {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    country: "",
    mobile: "",
    email: "",
    website: "",
    socialMedia: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [captchaCode, setCaptchaCode] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const [captchaError, setCaptchaError] = useState("");

  const generateNewCaptcha = () => {
    const chars = "23456789ABCDEFGHJKLMNPQRSTUVWXYZ"; // exclude 0, 1, O, I for clarity
    let code = "";
    for (let i = 0; i < 5; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaCode(code);
    setCaptchaInput("");
    setCaptchaError("");
  };

  useEffect(() => {
    generateNewCaptcha();
  }, []);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "El nombre completo es requerido.";
    if (!formData.company.trim()) newErrors.company = "El nombre de la empresa es requerido.";
    if (!formData.country.trim()) newErrors.country = "El país es requerido.";
    if (!formData.mobile.trim()) {
      newErrors.mobile = "El número de celular es requerido.";
    } else if (!/^\+?[0-9\s-]{7,15}$/.test(formData.mobile.trim())) {
      newErrors.mobile = "Introduce un formato de celular válido.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "El correo electrónico es requerido.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "El correo electrónico no es válido.";
    }

    let isCaptchaValid = true;
    if (!captchaInput.trim()) {
      setCaptchaError("Por favor, ingresa el código captcha.");
      isCaptchaValid = false;
    } else if (captchaInput.trim().toUpperCase() !== captchaCode) {
      setCaptchaError("El código captcha ingresado es incorrecto.");
      isCaptchaValid = false;
    } else {
      setCaptchaError("");
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0 && isCaptchaValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");

    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      
      const message = encodeURIComponent(
        `Hola MV Games, solicito la apertura de una Cuenta Mayorista B2B con los siguientes datos:\n\n` +
        `• Nombre completo: ${formData.name}\n` +
        `• Nombre de la empresa: ${formData.company}\n` +
        `• País: ${formData.country}\n` +
        `• Celular/Teléfono: ${formData.mobile}\n` +
        `• Correo Electrónico: ${formData.email}\n` +
        `• Página Web: ${formData.website || 'No especificado'}\n` +
        `• Redes Sociales: ${formData.socialMedia || 'No especificado'}`
      );
      
      window.open(`https://wa.me/51997767558?text=${message}`, "_blank");
      
      setStatus("success");
      setFormData({
        name: "",
        company: "",
        country: "",
        mobile: "",
        email: "",
        website: "",
        socialMedia: "",
      });
      setCaptchaInput("");
    } catch {
      setStatus("error");
      generateNewCaptcha();
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contacto" className="relative pt-24 pb-12 overflow-hidden bg-white border-t border-slate-100">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-[30rem] h-[30rem] rounded-full bg-slate-50 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Main Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-slate-100 mb-12">
          
          {/* Left Block: Brand Statement & Contact Info */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-brand-forest/10 border border-brand-forest/20">
                  <Dices className="h-6 w-6 text-brand-forest" />
                </div>
                <span className="text-xl font-extrabold tracking-tight text-slate-900">
                  MV <span className="text-brand-forest">Games</span>
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 leading-snug font-display">
                ¿Listo para abastecer tu tienda o publicar tu juego?
              </h3>
              
              <p className="text-sm text-slate-800 font-medium leading-relaxed">
                Completa el formulario comercial de solicitud de apertura de cuenta B2B. Evaluamos tu postulación en menos de 48 horas hábiles para darte de alta en nuestra plataforma de distribución.
              </p>
            </div>

            {/* Direct Channels */}
            <div className="space-y-4 pt-4">
              <a 
                href="mailto:admin@myv-investments.com"
                className="flex items-center gap-3.5 text-sm text-slate-800 hover:text-brand-forest transition-colors group"
              >
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/50 group-hover:border-brand-forest transition-colors">
                  <Mail className="h-4 w-4 text-slate-800" />
                </div>
                <span className="font-bold">admin@myv-investments.com</span>
              </a>

              <a 
                href="https://wa.me/51997767558"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 text-sm text-slate-800 hover:text-brand-forest transition-colors group"
              >
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/50 group-hover:border-brand-forest transition-colors">
                  <WhatsAppIcon className="h-4 w-4 text-slate-800" />
                </div>
                <span className="font-bold">+51 997 767 558</span>
              </a>

              <div className="flex items-center gap-3.5 text-sm text-slate-800">
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/50">
                  <MapPin className="h-4 w-4 text-slate-800" />
                </div>
                <span className="font-bold">Lima, Perú (Despachos nacionales e internacionales)</span>
              </div>
            </div>
          </div>

          {/* Right Block: Application Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-xl relative">
              
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-12 text-center flex flex-col items-center justify-center space-y-5"
                  >
                    <div className="h-16 w-16 rounded-full bg-emerald-50 border border-brand-forest flex items-center justify-center text-brand-forest shadow-lg shadow-emerald-100 animate-bounce">
                      <Check className="h-8 w-8" />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 font-display">¡Solicitud Recibida!</h4>
                    <p className="text-xs text-slate-700 max-w-sm mx-auto leading-relaxed font-bold">
                      Gracias por postular. Se ha abierto tu chat de WhatsApp para enviar tu solicitud con los datos estructurados. Nos pondremos en contacto contigo en breve para proceder con la apertura de tu cuenta mayorista.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <div>
                      <h4 className="text-base font-bold text-slate-800 font-display">Apertura de Cuenta Mayorista</h4>
                      <p className="text-[11px] text-slate-800 font-semibold">Los distribuidores autorizados de MV Games obtienen tarifas B2B especiales y reservas automáticas.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-700 uppercase tracking-wider block">Nombre Completo *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Ej: Juan Pérez"
                          className={`w-full px-4 py-2.5 bg-slate-50 hover:bg-slate-100/30 border rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-mint focus:ring-1 focus:ring-brand-mint/10 transition-colors font-bold ${
                            errors.name ? "border-red-400" : "border-slate-200"
                          }`}
                        />
                        {errors.name && <p className="text-[10px] text-red-500 flex items-center gap-1 font-semibold"><AlertCircle className="h-3.5 w-3.5" /> {errors.name}</p>}
                      </div>

                      {/* Company */}
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-700 uppercase tracking-wider block">Nombre de la Empresa *</label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Ej: Tienda Lúdica SAC"
                          className={`w-full px-4 py-2.5 bg-slate-50 hover:bg-slate-100/30 border rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-mint focus:ring-1 focus:ring-brand-mint/10 transition-colors font-bold ${
                            errors.company ? "border-red-400" : "border-slate-200"
                          }`}
                        />
                        {errors.company && <p className="text-[10px] text-red-500 flex items-center gap-1 font-semibold"><AlertCircle className="h-3.5 w-3.5" /> {errors.company}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Country */}
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-700 uppercase tracking-wider block">País *</label>
                        <input
                          type="text"
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          placeholder="Ej: Perú"
                          className={`w-full px-4 py-2.5 bg-slate-50 hover:bg-slate-100/30 border rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-mint focus:ring-1 focus:ring-brand-mint/10 transition-colors font-bold ${
                            errors.country ? "border-red-400" : "border-slate-200"
                          }`}
                        />
                        {errors.country && <p className="text-[10px] text-red-500 flex items-center gap-1 font-semibold"><AlertCircle className="h-3.5 w-3.5" /> {errors.country}</p>}
                      </div>

                      {/* Cellphone */}
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-700 uppercase tracking-wider block">Celular / Teléfono *</label>
                        <input
                          type="text"
                          name="mobile"
                          value={formData.mobile}
                          onChange={handleChange}
                          placeholder="Ej: +51 987 654 321"
                          className={`w-full px-4 py-2.5 bg-slate-50 hover:bg-slate-100/30 border rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-mint focus:ring-1 focus:ring-brand-mint/10 transition-colors font-bold ${
                            errors.mobile ? "border-red-400" : "border-slate-200"
                          }`}
                        />
                        {errors.mobile && <p className="text-[10px] text-red-500 flex items-center gap-1 font-semibold"><AlertCircle className="h-3.5 w-3.5" /> {errors.mobile}</p>}
                      </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-700 uppercase tracking-wider block">Correo Electrónico *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Ej: contacto@tienda.com"
                        className={`w-full px-4 py-2.5 bg-slate-50 hover:bg-slate-100/30 border rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-mint focus:ring-1 focus:ring-brand-mint/10 transition-colors font-bold ${
                          errors.email ? "border-red-400" : "border-slate-200"
                        }`}
                      />
                      {errors.email && <p className="text-[10px] text-red-500 flex items-center gap-1 font-semibold"><AlertCircle className="h-3.5 w-3.5" /> {errors.email}</p>}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Website */}
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-700 uppercase tracking-wider block">Página Web (Opcional)</label>
                        <input
                          type="text"
                          name="website"
                          value={formData.website}
                          onChange={handleChange}
                          placeholder="Ej: www.tienda.com"
                          className="w-full px-4 py-2.5 bg-slate-50 hover:bg-slate-100/30 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-mint transition-colors font-bold"
                        />
                      </div>

                      {/* Social Media */}
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-700 uppercase tracking-wider block">Redes Sociales (Opcional)</label>
                        <input
                          type="text"
                          name="socialMedia"
                          value={formData.socialMedia}
                          onChange={handleChange}
                          placeholder="Ej: @tienda (Facebook/Instagram)"
                          className="w-full px-4 py-2.5 bg-slate-50 hover:bg-slate-100/30 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-mint transition-colors font-bold"
                        />
                      </div>
                    </div>

                    {/* Captcha anti-bots interactivo */}
                    <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
                      <div className="flex items-center justify-between">
                        <label className="text-[10px] font-bold text-slate-700 uppercase tracking-wider">Verificación de seguridad (Anti-Bots) *</label>
                        <button
                          type="button"
                          onClick={generateNewCaptcha}
                          className="text-slate-700 hover:text-brand-forest transition-colors p-1"
                          title="Generar nuevo código"
                        >
                          <RefreshCw className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-4 items-center">
                        {/* Código de verificación visual con ruido */}
                        <div className="relative overflow-hidden bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 select-none flex items-center justify-center tracking-widest font-mono text-base font-extrabold text-brand-mint w-32 h-11 shadow-inner">
                          {/* Noise lines */}
                          <svg className="absolute inset-0 w-full h-full opacity-40 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="0" y1="8" x2="120" y2="35" stroke="#AB82FF" strokeWidth="2" />
                            <line x1="10" y1="35" x2="110" y2="5" stroke="#2957FF" strokeWidth="1.5" />
                            <line x1="20" y1="0" x2="90" y2="40" stroke="#2FD696" strokeWidth="2" />
                          </svg>
                          {/* Distorted characters */}
                          <span className="skew-x-12 inline-block drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] select-none pointer-events-none tracking-widest">
                            {captchaCode}
                          </span>
                        </div>
                        
                        {/* Input de respuesta */}
                        <input
                          type="text"
                          value={captchaInput}
                          onChange={(e) => {
                            setCaptchaInput(e.target.value);
                            if (captchaError) setCaptchaError("");
                          }}
                          placeholder="Introduce el código"
                          className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-brand-mint focus:ring-1 focus:ring-brand-mint/10 transition-colors font-bold uppercase placeholder-slate-450"
                        />
                      </div>
                    </div>
                    {captchaError && <p className="text-[10px] text-red-500 flex items-center gap-1 font-semibold"><AlertCircle className="h-3.5 w-3.5" /> {captchaError}</p>}

                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="flex items-center justify-center gap-2 w-full bg-brand-mint hover:bg-brand-mint/90 text-brand-purple font-extrabold text-xs py-4 rounded-xl transition-all shadow-md shadow-brand-mint/10 disabled:bg-brand-mint/50 disabled:cursor-not-allowed group uppercase tracking-wider"
                    >
                      {status === "submitting" ? (
                        <div className="h-5 w-5 border-2 border-brand-purple border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          Enviar Solicitud Mayorista
                        </>
                      )}
                    </button>

                    {status === "error" && (
                      <p className="text-xs text-red-500 text-center flex items-center justify-center gap-1 pt-1 font-semibold">
                        <AlertCircle className="h-4.5 w-4.5" /> Hubo un error de red. Por favor, inténtalo de nuevo.
                      </p>
                    )}
                  </motion.form>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

        {/* Footer Sub-Links & Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-4 text-xs text-slate-700 font-semibold border-t border-slate-100">
          <p>© {new Date().getFullYear()} MV Games. Todos los derechos reservados. Distribuidora y Editorial de juegos de mesa modernos.</p>
          <div className="flex gap-6">
            <a href="#servicios" className="hover:text-slate-900 transition-colors">Servicios</a>
            <a href="#novedades" className="hover:text-slate-900 transition-colors">Novedades</a>
            <a href="#catalogo" className="hover:text-slate-900 transition-colors">Catálogo B2B</a>
            <button 
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-brand-forest hover:text-brand-mint transition-colors"
            >
              Volver arriba
              <ChevronUp className="h-4 w-4" />
            </button>
          </div>
        </div>

      </div>

      {/* Floating WhatsApp Button (Mint Green, target number S/ ) */}
      <motion.a
        href="https://wa.me/51997767558?text=Hola%20MV%20Games.%20Quiero%20hacer%20una%20consulta%20comercial."
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.3 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full bg-brand-mint text-brand-purple shadow-lg shadow-brand-mint/30 flex items-center justify-center cursor-pointer border border-brand-mint/35 focus:outline-none"
        title="Contáctanos por WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-brand-mint/30 animate-ping opacity-60 pointer-events-none" />
        <WhatsAppIcon className="h-7 w-7 text-brand-purple" />
      </motion.a>
    </footer>
  );
}
