import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto text-center px-4">
                <p>&copy; {new Date().getFullYear()} MyApp. All rights reserved.</p>
                <div className="mt-2">
                    <a href="#" className="mx-2 hover:underline">
                        Privacy Policy
                    </a>
                    <a href="#" className="mx-2 hover:underline">
                        Terms of Service
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer