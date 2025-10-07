"use client";
import { useState, ChangeEvent } from "react";
import {
  RiRocketFill,
  RiCpuFill,
  RiShieldStarFill,
  RiSettings4Fill,
  RiSpaceShipFill,
  RiDatabase2Fill,
  RiUser3Line,
  RiLockLine,
  RiAlertFill,
} from "react-icons/ri";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTetryxAuth } from "@/lib/providers/auth";
import Input from "@/components/Shared/Input";
import PasswordInput from "@/components/Shared/Input/PasswordInput";
import DefaultButton from "@/components/Shared/Button/DefaultButton";
import { useRouter } from "next/navigation";
import { ImSpinner8 } from "react-icons/im";

const Landing = ({ initialAgentData: agent_data }) => {
  const router = useRouter();
  const { signInWithPassword, authenticated } = useTetryxAuth();

  const [auth, setAuth] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    email: "",
    password: "",
    general: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setError({
      email: "",
      password: "",
      general: "",
    });
    const { name, value } = event.target;
    setAuth({
      ...auth,
      [name]: value,
    });
  };

  const onLogin = async () => {
    setLoading(true);
    const { status, message } = await signInWithPassword(auth);

    if (status) {
      router.push("/home");
    } else {
      setError({
        ...error,
        general: message,
      });
    }
    setLoading(false);
  }; 

  return (
    <div
      className="min-h-screen w-full flex relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.85)), url('https://images.unsplash.com/photo-1457364887197-9150188c107b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Left Side - Login Component */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12">
        <div className="w-full max-w-md">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl"
          >
            {/* Logo/Header */}
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome back</h1>
              <p className="text-gray-600">Sign in to your account</p>
            </div>

            {!authenticated ? (
              <>

                <div
                  className="space-y-4"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") onLogin();
                  }}
                >
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    value={auth.email}
                    iconLeft={<RiUser3Line className="mt-2.5 opacity-60" size={18} />}
                    onChange={handleChange}
                  />
                  {error.email && (
                    <div className="text-red-500 text-sm">{error.email}</div>
                  )}

                  <PasswordInput
                    type="password"
                    name="password"
                    placeholder="Password"
                    iconLeft={<RiLockLine className="mt-2.5 opacity-60" size={18} />}
                    value={auth.password}
                    onChange={handleChange}
                  />
                  {error.password && (
                    <div className="text-red-500 text-sm">{error.password}</div>
                  )}

                  {error.general && (
                    <div className="bg-red-50 text-red-600 flex items-center gap-2 text-sm font-medium py-3 px-4 rounded-lg">
                      <RiAlertFill size={16}/>
                      {error.general}
                    </div>
                  )}

                  <DefaultButton
                    label="Sign In"
                    variant="primary"
                    size="medium"
                    styleClass="w-full"
                    iconRight={
                      loading && (
                        <ImSpinner8
                          className="animate-spin"
                          size={16}
                          color="white"
                        />
                      )
                    }
                    onClick={onLogin}
                    disabled={loading}
                  />
                </div>

                <div className="mt-6 text-center">
                  <Link
                    href="/auth/signup"
                    className="text-sm text-gray-600 hover:text-gray-700"
                  >
                    Need an account? <span className="text-blue-600 hover:text-blue-700 font-medium">Sign up</span>
                  </Link>
                </div>
              </>
            ) : (
              <div className="text-center">
                <div className="text-green-600 mb-4">
                  <RiShieldStarFill size={48} className="mx-auto" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Welcome back!</h2>
                <p className="text-gray-600 mb-6">You're already signed in.</p>
                <DefaultButton
                  label="Go to Dashboard"
                  variant="primary"
                  size="medium"
                  styleClass="w-full"
                  onClick={() => router.push("/home")}
                />
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Right Side - Clean Content */}
      <div className="hidden lg:flex w-1/2 relative items-center justify-center">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-lg text-center text-white px-12"
        >
          {/* Hero Section */}
          <div className="mb-12">
            <div className="flex items-center justify-center gap-3 mb-8">
              <RiRocketFill className="text-orange-400" size={40} />
              <h1 className="text-3xl font-bold text-white">Tetryx</h1>
            </div>
            <p className="text-lg text-gray-100 leading-relaxed mb-8">
              The open source modular stack for defense, aerospace, and space companies building autonomous systems.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <span className="inline-flex items-center gap-2 bg-orange-500/30 text-orange-200 px-3 py-1 rounded-full text-sm border border-orange-400/30">
                <RiSpaceShipFill size={14} />
                Space
              </span>
              <span className="inline-flex items-center gap-2 bg-cyan-500/30 text-cyan-200 px-3 py-1 rounded-full text-sm border border-cyan-400/30">
                <RiShieldStarFill size={14} />
                Defense
              </span>
              <span className="inline-flex items-center gap-2 bg-emerald-500/30 text-emerald-200 px-3 py-1 rounded-full text-sm border border-emerald-400/30">
                <RiCpuFill size={14} />
                Autonomous
              </span>
            </div>
          </div>

          {/* Testimonial */}
          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-gray-600/30">
            <blockquote className="text-gray-100 italic mb-4">
              "Tetryx has transformed how we deploy and manage our satellite constellation. The binary cache system ensures our space-grade components are distributed efficiently across our global operations."
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-cyan-400 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold text-white">A</span>
              </div>
              <div>
                <p className="font-medium text-white text-sm">Dr. Sarah Chen</p>
                <p className="text-gray-300 text-xs">Mission Director, AeroSpace Dynamics</p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-12">
            <p className="text-sm text-gray-300">
              Trusted by organizations worldwide
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Landing;


