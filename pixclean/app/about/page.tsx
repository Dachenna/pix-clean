export default function AboutPage() {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          About PixClean
        </h1>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            PixClean is an AI-powered background removal tool designed to make image editing
            simple and efficient for everyone.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Our advanced machine learning models can automatically detect and remove backgrounds
            from images with high precision, saving you time and effort in your creative projects.
          </p>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            To democratize professional image editing tools by making them accessible,
            affordable, and easy to use for individuals and businesses alike.
          </p>
        </div>
      </div>
    </div>
  );
}