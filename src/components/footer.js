import { Link } from "gatsby"
import React from "react"

const Footer = () => (
  <footer class="mx-4 border-t-2 border-gray-200 flex lg:mx-64 flex justify-center pt-6 pb-8 mt-24">
    <ul class="flex">
      <li><a href="/" class="text-sm text-gray-600 mr-6">Home</a></li>
      <li><a href="/articles" class="text-sm text-gray-600 mr-6">Articles</a></li>
      <li><a href="/contact" class="text-sm text-gray-600 mr-6">Contact</a></li>
    </ul> 
  </footer>
)

export default Footer