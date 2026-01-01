import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  return (
    <div className="min-h-screen pt-16 flex items-center justify-center">
      <div className="max-w-md w-full space-y-8 p-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Sign In to PixClean
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Access your account to start removing backgrounds
          </p>
        </div>
        <form className="mt-8 space-y-6">
          <div>
            <Label htmlFor="email">Email address</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              required
              className="mt-1"
              placeholder="Enter your password"
            />
          </div>
          <Button type="submit" className="w-full">
            Sign In
          </Button>
        </form>
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-300">
            Don't have an account?{" "}
            <a href="#" className="text-orange-600 hover:text-orange-500">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}