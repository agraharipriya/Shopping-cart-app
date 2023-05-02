import React from 'react'

const Footer = () => {
  return (
   <>
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <p>&copy; 2023 Ecomzy All Rights Reserved.</p>
          <div className="flex">
            <a href="#" className="mx-4 hover:text-gray-500">About</a>
            <a href="#" className="mx-4 hover:text-gray-500">Contact</a>
            <a href="#" className="mx-4 hover:text-gray-500">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
   </>
  )
}

export default Footer