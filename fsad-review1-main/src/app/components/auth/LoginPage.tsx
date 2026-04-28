import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { GraduationCap, LogIn, UserPlus, Eye, EyeOff, AlertCircle, ArrowRight, Check } from 'lucide-react';
import { User } from '../../types';
import { mockUsers } from '../../lib/mock-data';
import { Logo } from '../shared/Logo';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../ui/utils';

interface LoginPageProps {
  onLogin: (user: User) => void;
}

export function LoginPage({ onLogin }: LoginPageProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  // Form States
  const [role, setRole] = useState<'student' | 'educator'>('student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // UI States
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const validateForm = () => {
    if (!email || !password) {
      setError('Please fill in all required fields.');
      return false;
    }
    if (!email.includes('@')) {
      setError('Please enter a valid email address.');
      return false;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return false;
    }
    if (!isLogin) {
      if (!name) {
        setError('Please enter your full name.');
        return false;
      }
      if (password !== confirmPassword) {
        setError('Passwords do not match.');
        return false;
      }
    }
    setError(null);
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);

    // Simulate network delay
    setTimeout(() => {
      setIsLoading(false);

      if (isLogin) {
        // Extract name from email for display
        const emailName = email.split('@')[0];
        const formattedName = emailName
          .split(/[._-]/)
          .map(part => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
          .join(' ');

        // Use a fixed ID based on role to ensure mock data (courses/enrollments) is visible
        // In a real app, this ID would come from the backend
        const userId = role === 'educator' ? 'edu-1' : 'stu-1';

        const user: User = {
          id: userId,
          name: formattedName,
          email: email,
          role: role,
          avatar: `https://ui-avatars.com/api/?name=${formattedName}&background=0D9488&color=fff`,
        };

        onLogin(user);
      } else {
        // Mock Signup Logic
        const newUser: User = {
          id: Math.random().toString(36).substr(2, 9),
          name: name,
          email: email,
          role: role,
          avatar: `https://ui-avatars.com/api/?name=${name}&background=0D9488&color=fff`, // indigo background
        };
        onLogin(newUser);
      }
    }, 1000);
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setError(null);
    setEmail('');
    setPassword('');
    setName('');
    setConfirmPassword('');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-indigo-100/40 blur-3xl" />
        <div className="absolute top-[40%] -right-[10%] w-[60%] h-[60%] rounded-full bg-violet-100/40 blur-3xl" />
        <div className="absolute -bottom-[20%] left-[20%] w-[50%] h-[50%] rounded-full bg-blue-100/40 blur-3xl" />
      </div>

      <div className="w-full max-w-5xl grid lg:grid-cols-2 gap-8 items-center z-10">
        {/* Left Side - Branding */}
        <div className="hidden lg:flex flex-col space-y-8 p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Logo size="lg" />
          </motion.div>

          <div className="space-y-6">
            <motion.h1
              className="text-5xl font-extrabold tracking-tight text-gray-900 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Master New Skills <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
                Shape Your Future
              </span>
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 max-w-md leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Join thousands of learners and educators on a journey of discovery. Access world-class courses or share your expertise today.
            </motion.p>
          </div>

          <motion.div
            className="grid grid-cols-2 gap-6 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-white/50 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-indigo-100 rounded-lg">
                  <GraduationCap className="size-6 text-indigo-600" />
                </div>
                <p className="text-3xl font-bold text-gray-900">500+</p>
              </div>
              <p className="text-sm font-medium text-gray-500">Expert-led Courses</p>
            </div>
            <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-white/50 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <UserPlus className="size-6 text-blue-600" />
                </div>
                <p className="text-3xl font-bold text-gray-900">10k+</p>
              </div>
              <p className="text-sm font-medium text-gray-500">Active Learners</p>
            </div>
          </motion.div>
        </div>

        {/* Right Side - Auth Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-xl">
            <CardHeader className="space-y-1 pb-6">
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl font-bold">
                  {isLogin ? 'Welcome back' : 'Create an account'}
                </CardTitle>
                {/* Mobile Logo for small screens */}
                <div className="lg:hidden">
                  <Logo size="sm" />
                </div>
              </div>
              <CardDescription>
                {isLogin
                  ? 'Enter your credentials to access your account'
                  : 'Enter your details to get started with EduLearn'}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Role Selection */}
                <div className="p-1 bg-gray-100 rounded-xl grid grid-cols-2 gap-1">
                  <button
                    type="button"
                    onClick={() => setRole('student')}
                    className={cn(
                      "py-2 px-4 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2",
                      role === 'student'
                        ? "bg-white text-indigo-700 shadow-sm ring-1 ring-black/5"
                        : "text-gray-500 hover:text-gray-900 hover:bg-gray-200/50"
                    )}
                  >
                    <UserPlus className="size-4" />
                    Student
                  </button>
                  <button
                    type="button"
                    onClick={() => setRole('educator')}
                    className={cn(
                      "py-2 px-4 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2",
                      role === 'educator'
                        ? "bg-white text-indigo-700 shadow-sm ring-1 ring-black/5"
                        : "text-gray-500 hover:text-gray-900 hover:bg-gray-200/50"
                    )}
                  >
                    <GraduationCap className="size-4" />
                    Educator
                  </button>
                </div>

                <AnimatePresence mode="wait">
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="bg-red-50 text-red-600 text-sm p-3 rounded-lg flex items-center gap-2"
                    >
                      <AlertCircle className="size-4 shrink-0" />
                      <p>{error}</p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="space-y-4">
                  {!isLogin && (
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <div className="relative">
                        <Input
                          id="name"
                          placeholder="John Doe"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="pl-10"
                        />
                        <UserPlus className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
                      </div>
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <div className="relative">
                      <Input
                        id="email"
                        type="email"
                        placeholder="name@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-10"
                      />
                      <div className="absolute left-3 top-1/2 -translate-y-1/2">
                        <svg className="size-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Password</Label>
                      {isLogin && (
                        <a href="#" className="text-xs font-medium text-indigo-600 hover:text-indigo-700 hover:underline">
                          Forgot password?
                        </a>
                      )}
                    </div>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="pl-10 pr-10"
                      />
                      <div className="absolute left-3 top-1/2 -translate-y-1/2">
                        <svg className="size-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </div>
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
                      >
                        {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                      </button>
                    </div>
                  </div>

                  {!isLogin && (
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Confirm Password</Label>
                      <div className="relative">
                        <Input
                          id="confirm-password"
                          type="password"
                          placeholder="••••••••"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          className="pl-10"
                        />
                        <div className="absolute left-3 top-1/2 -translate-y-1/2">
                          <Check className="size-4 text-gray-400" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 h-11 text-base shadow-lg shadow-indigo-200" disabled={isLoading}>
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      {isLogin ? 'Signing in...' : 'Creating account...'}
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      {isLogin ? <LogIn className="size-4" /> : <UserPlus className="size-4" />}
                      {isLogin ? 'Sign In' : 'Create Account'}
                      <ArrowRight className="size-4 opacity-70" />
                    </div>
                  )}
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500">
                  {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
                  <button
                    onClick={toggleMode}
                    className="text-indigo-600 hover:text-indigo-700 font-semibold hover:underline transition-all"
                  >
                    {isLogin ? 'Sign up' : 'Log in'}
                  </button>
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

