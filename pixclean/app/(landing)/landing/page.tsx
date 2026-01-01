'use client';
import { Button } from "@/components/ui/button";
import { ArrowRight, Upload, Zap } from "lucide-react";
import { useRouter } from "next/router";

export default function LandingPage() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-linear-to-br from-orange-50 to-white dark:from-gray-900 dark:to-gray-800">

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Remove Backgrounds with{" "}
              <span className="bg-linear-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                AI Power
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Upload your images and let our advanced AI remove backgrounds instantly.
              Perfect for e-commerce, marketing, and creative projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                <Upload className="mr-2 h-5 w-5" />
                Start Removing
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                Learn More
              </Button>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <section className="py-24 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Why Choose PixClean?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Fast, accurate, and easy-to-use background removal
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-orange-600 dark:text-orange-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Lightning Fast
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Process images in seconds with our optimized AI models
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Upload className="h-8 w-8 text-orange-600 dark:text-orange-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  High Quality
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Precise edge detection and natural-looking results
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ArrowRight className="h-8 w-8 text-orange-600 dark:text-orange-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Easy to Use
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Simple drag-and-drop interface, no technical skills required
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-linear-to-r from-orange-400 to-orange-600">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Clean Your Images?
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Join thousands of users who trust PixClean for their background removal needs
            </p>
            <Button size="lg" 
              variant="secondary" 
              className="text-lg px-8"
              onClick={() => router.push("/app/signup")}
            >
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5 animate-pulse" />
            </Button>
          </div>
        </section>
      </section>
    </div>
  );
}