export default function TheFooter() {
  return (
    <footer id="contact" className="bg-white dark:bg-gray-800 w-full py-8">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-gray-200">
          <h5 className="text-lg">Contact Us</h5>

          <ul className="mt-3 font-light flex flex-col gap-y-2">
            <li>Instagram: <a href="https://www.instagram.com/hmteuns/" target="_blank" className="text-blue-300 hover:underline">@hmteuns</a></li>
            <li>Whatsapp :</li>
            <li>- <a href="https://wa.me/6285888313945" target="_blank" className="text-blue-300 hover:underline">+62 858 8831 3945</a> (Foreigner)</li>
            <li>- <a href="https://wa.me/6289693553019" target="_blank" className="text-blue-300 hover:underline">+62 896 9355 3019</a> (Indonesian)</li>
            <li>Email: <a href="mailto:iotlab@ft.uns.ac.id" target="_blank" className="text-blue-300 hover:underline">iotlab@ft.uns.ac.id</a></li>
          </ul>
        </div>

        <div className="text-center text-gray-500 dark:text-gray-200 pt-4 sm:pt-6 font-light flex items-center justify-center">
          Copyright © 2021 All rights reserved
        </div>
      </div>
    </footer>
  );
}
