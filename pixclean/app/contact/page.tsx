export default function ContactPage() {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Contact Us
        </h1>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Have questions or need support? We'd love to hear from you.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Get in Touch
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Email: support@pixclean.com
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Phone: +1 (555) 123-4567
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Address: 123 AI Street, Tech City, TC 12345
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Follow Us
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Stay updated with our latest features and tips on social media.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}