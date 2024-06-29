import React from 'react';
import { motion } from 'framer-motion';
import { Footer, Navbar } from '../components';
import styles from '../style.js';
import { blogs } from '../constants'; // Assuming you import your blog data
import { Link } from 'react-router-dom'; // Assuming you use react-router-dom for navigation

const BlogCard = ({ title, author, date, image, excerpt, link }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white text-black p-6 rounded-lg shadow-md m-4 max-w-sm w-full h-auto flex flex-col"
  >
    <img src={image} alt={title} className="w-full h-48 object-cover mb-4 rounded-lg" />
    <div className="flex-grow">
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-gray-600 mb-2">{author}</p>
      <p className="text-gray-600 mb-2">{date}</p>
      <p className="text-sm">{excerpt}</p>
    </div>
    <Link to={link} className="text-blue-600 font-bold mt-4">Read more</Link>
  </motion.div>
);

const Blogs = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      {/* Hero Section (You can customize this based on your design) */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center h-1/4 text-white text-center py-8 bg-hero-gradient"
      >
        <h1 className="text-4xl font-semibold mb-4">Our Blog</h1>
        <p className="text-lg max-w-md text-center">
          Explore our latest articles and stay updated with industry trends.
        </p>
      </motion.div>

      {/* Main Content */}
      <div className={`bg-black-gradient-2 ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <div className={`flex flex-col ${styles.paddingY} text-white bg-discount-gradient`}>
            <div className={`flex ${styles.section}`}>
              <div className="w-full">
                <h2 className="text-3xl font-semibold mb-4 text-center text-gradient">Latest Articles</h2>
                <div className="flex flex-wrap justify-center">
                  {blogs.map((blog) => (
                    <BlogCard
                      key={blog.id}
                      title={blog.title}
                      author={blog.author}
                      date={blog.date}
                      image={blog.image}
                      excerpt={blog.excerpt}
                      link={blog.link}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
