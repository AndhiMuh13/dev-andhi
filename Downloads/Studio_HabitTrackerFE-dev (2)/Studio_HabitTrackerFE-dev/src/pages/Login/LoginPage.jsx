import { useState } from "react";

// Assets
import bg from "@/assets/background.jpg";
import logo from "@/assets/logos/Habits-Tracker-Logo.svg";
import googleIcon from "@/assets/icons/google.svg";

// Components
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/Button";
import { Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-8">
      {/* Container login */}
      <main className="grid w-full max-w-5xl grid-cols-1 rounded-2xl border border-gray-300 md:grid-cols-3">
        {/* Kolom kiri */}
        <div className="hidden md:block md:cols-span-1">
          <img src={bg} alt="" className="object-cover h-full w-full" />
        </div>

        {/* Kolom kanan */}
        <div className="p-8 col-span-2 bg-white rounded-2xl">
          <div className="flex w-full max-w-md flex-col justify-center min-h-full gap-8 mx-auto">
            {/* Header */}
            <header className="flex flex-col items-center gap-4 text-center">
              <img src={logo} alt="Logo Habit Office" className="h-12 w-12" />
              <h1 className="text-3xl font-medium text-zinc-700">Sign in</h1>
              <p className="text-base text-zinc-700">
                Don’t have an account?&nbsp;
                <a
                  href="/register"
                  className="font-medium hover:underline text-green-400"
                >
                  Sign up
                </a>
              </p>
            </header>

            {/* Form */}
            <form action="" className="flex flex-col gap-5">
              {/* Radio Button */}
              <RadioGroup
                defaultValue="admin"
                className="mb-4 flex justify-center md:gap-10"
              >
                {/* Admin */}
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="admin" id="role-admin" />
                  <Label htmlFor="role-admin" className="text-base font-normal">
                    Admin
                  </Label>
                </div>

                {/* PM */}
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="pm" id="role-pm" />
                  <Label htmlFor="role-pm" className="text-base font-normal">
                    Project Manager
                  </Label>
                </div>

                {/* Karyawan */}
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="karyawan" id="role-karyawan" />
                  <Label
                    htmlFor="role-karyawan"
                    className="text-base font-normal"
                  >
                    Karyawan
                  </Label>
                </div>
              </RadioGroup>

              {/* Input fields */}
              <div className="grid w-full items-center gap-1">
                <Label
                  htmlFor="email"
                  className="text-base font-normal text-zinc-700"
                >
                  Email address
                </Label>
                <Input type="email" id="email" className="shadow-none" />
              </div>

              <div className="grid w-full items-center gap-1">
                <div className="flex justify-between">
                  <Label
                    htmlFor="password"
                    className="text-base font-normal text-zinc-700"
                  >
                    Password
                  </Label>

                  <Button
                    type="button"
                    variant="ghost"
                    className="h-auto px-2 py-1 text-xs text-zinc-500 hover:bg-zinc-100"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 mr-1" />
                    ) : (
                      <Eye className="h-4 w-4 mr-1" />
                    )}
                    {showPassword ? "Hide" : "Show"}
                  </Button>
                </div>
                <Input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="shadow-none"
                />
              </div>

              {/* Forgot password */}
              <div className="text-right -mt-2">
                <a href="#" className="text-sm text-zinc-500 hover:underline">
                  Forgot Password?
                </a>
              </div>

              {/* Login button */}
              <Button
                type="submit"
                className="mt-2 w-full rounded-full bg-green-500 text-xl font-normal hover:bg-green-600 cursor-pointer"
              >
                Login
              </Button>

              {/* OR */}
              <div className="flex items-center gap-6">
                <hr className="grow border-gray-300" />
                <span className="text-xl text-gray-500">OR</span>
                <hr className="grow border-gray-300" />
              </div>

              {/* Google */}
              <Button
                type="button"
                variant="outline"
                className="w-full rounded-full border-zinc-800 text-xl font-normal text-zinc-800"
              >
                <img src={googleIcon} className="mr-2 h-5 w-5" />
                <span className="block md:hidden">Google</span>
                <span className="hidden md:block">Continue with Google</span>
              </Button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
