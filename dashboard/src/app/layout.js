import "./globals.css"

export const metadata = {
  title: "VroomGo - Rent a Car, Embar Your Jouney",
  description: 'Find and book premium cars quickly and easily.',
  icons: {
    icon: '/images/logo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}