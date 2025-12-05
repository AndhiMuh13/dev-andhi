import { useState } from "react";

// Assets
import bg from "@/assets/background.jpg";
import logo from "@/assets/logos/Habits-Tracker-Logo.svg";
import googleIcon from "@/assets/icons/google.svg";

// Components
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center md:bg-gray-100 md:p-8">
      {/* Container register */}
      <main className="grid w-full max-w-5xl grid-cols-1 md:rounded-2xl md:border border-gray-300 md:grid-cols-3">
        {/* Kolom kiri */}
        <div className="hidden md:block md:cols-span-1">
          <img src={bg} alt="" className="object-cover h-full w-full" />
        </div>
        {/* Kolom kanan */}
        <div className="p-8 col-span-2 bg-white md:rounded-2xl">
          <div className="flex w-full max-w-md flex-col justify-center min-h-full gap-8 mx-auto">
            {/* Header */}
            <header className="flex flex-col items-center gap-4 text-center">
              <img src={logo} alt="Logo Habit Office" className="h-12 w-12" />
              <h1 className="text-3xl font-medium text-zinc-700">
                Create an account
              </h1>
              <p className="text-base text-zinc-700">
                Already have an account?&nbsp;
                <a
                  href="/login"
                  className="font-medium underline hover:text-green-400"
                >
                  Sign in
                </a>
              </p>
            </header>

            {/* Form */}
            <form action="" className="flex flex-col gap-5">
              {/* Radio Button */}
              <RadioGroup
                defaultValue="pm"
                className="mb-4 flex justify-center gap-4 md:gap-14"
              >
                {/* Option 1 */}
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="pm" id="role-pm" />
                  <Label
                    htmlFor="role-pm"
                    className="text-sm md:text-base font-normal"
                  >
                    Project Manager
                  </Label>
                </div>
                {/* Option 2 */}
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="karyawan" id="role-karyawan" />
                  <Label
                    htmlFor="role-karyawan"
                    className="text-sm md:text-base font-normal"
                  >
                    Karyawan
                  </Label>
                </div>
              </RadioGroup>

              {/* Input fields */}
              <div className="grid w-full items-center gap-1">
                <Label
                  htmlFor="username"
                  className="text-base font-normal text-zinc-700"
                >
                  Username
                </Label>
                <Input type="text" id="username" className="shadow-none" />
              </div>

              <div className="grid w-full items-center gap-1">
                <Label
                  htmlFor="email"
                  className="text-base font-normal text-zinc-700"
                >
                  Email
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
                    type="button" // agar button tidak men-submit form dan melakukan reload page
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

              {/* Button submit form */}
              <Button
                type="submit"
                className="mt-4 w-full rounded-full bg-green-500 text-base font-normal hover:bg-green-600 cursor-pointer"
              >
                Sign Up
              </Button>

              <div className="flex items-center gap-6">
                <hr className="grow border-gray-300" />
                <span className="text-base text-gray-500">OR</span>
                <hr className="grow border-gray-300" />
              </div>

              <Button
                type="button"
                variant="outline"
                className="w-full rounded-full border-zinc-800 text-base font-normal text-zinc-800"
              >
                <img src={googleIcon} className="mr-2 h-5 w-5" />
                Continue with Google
              </Button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
