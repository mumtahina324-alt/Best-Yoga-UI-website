import { Lock, Mail, User, X } from "lucide-react";
import { useState } from "react";

export default function AuthModal({ onClose }) {
  const [isLogin, setIsLogin] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      alert("Please enter both email and password!");
      return;
    }
    console.log("--- Form Submitted ---");
    console.log("Mode:", isLogin ? "Login" : "Sign Up");
    console.log("User Data:", formData);
    alert(isLogin ? "Login Successful!" : "Account Created Successfully!");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-zinc-950/60 backdrop-blur-sm p-4">
      <div className="bg-white w-full max-w-100 rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 bg-zinc-50 hover:bg-zinc-100 rounded-full transition-all text-zinc-400 z-10"
        >
          <X size={18} />
        </button>

        <div className="p-6 md:p-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-black text-zinc-800 mb-1">
              {isLogin ? "Welcome Back" : "Create Account"}
            </h2>
            <p className="text-zinc-500 text-xs font-medium">
              Join our yoga community today.
            </p>
          </div>

          <div className="space-y-3">
            {!isLogin && (
              <div className="relative">
                <User
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
                  size={16}
                />
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full pl-10 pr-4 py-3 bg-zinc-50 border-none rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none text-sm transition-all"
                />
              </div>
            )}

            <div className="relative">
              <Mail
                className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
                size={16}
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full pl-10 pr-4 py-3 bg-zinc-50 border-none rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none text-sm transition-all"
              />
            </div>

            <div className="relative">
              <Lock
                className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
                size={16}
              />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full pl-10 pr-4 py-3 bg-zinc-50 border-none rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none text-sm transition-all"
              />
            </div>

            <button
              onClick={handleSubmit}
              className="w-full py-2 bg-primary hover:bg-emerald-600 text-white font-bold rounded-xl shadow-lg shadow-emerald-100 transition-all active:scale-[0.98] mt-2 text-sm"
            >
              {isLogin ? "Sign In" : "Sign Up"}
            </button>
          </div>

          <div className="flex items-center my-5">
            <div className="flex-1 h-px bg-zinc-100"></div>
            <span className="px-3 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
              Or
            </span>
            <div className="flex-1 h-px bg-zinc-100"></div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-2 py-2.5 border border-zinc-100 rounded-xl hover:bg-zinc-50 transition-all font-bold text-xs text-zinc-600">
              Github
            </button>
            <button className="flex items-center justify-center gap-2 py-2.5 border border-zinc-100 rounded-xl hover:bg-zinc-50 transition-all font-bold text-xs text-zinc-600">
              <img
                src="https://www.google.com/favicon.ico"
                className="w-3.5 h-3.5"
                alt="google"
              />
              Google
            </button>
          </div>

          <p className="text-center mt-6 text-xs font-medium text-zinc-500">
            {isLogin ? "New here?" : "Joined already?"}{" "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-emerald-600 font-bold hover:underline ml-1 outline-none"
            >
              {isLogin ? "Sign Up" : "Log In"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
