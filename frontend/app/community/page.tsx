"use client"
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/navigation/navbar';

interface Blog {
  id: number;
  title: string;
  description: string;
  likes: number;
  comments: string[];
}

const blogsData: Blog[] = [
  { id: 1, title: 'React Code Editor', description: 'Build your own code editor that compiles and runs 40+ programming languages.', likes: 57, comments: [] },
  { id: 2, title: 'Simple Developer Portfolio', description: 'A simple portfolio for developers to showcase their skills and projects.', likes: 116, comments: [] },
  { id: 3, title: 'Devmedium', description: 'A Dev.to & Medium-like blogging platform with custom usernames in Next.js.', likes: 1, comments: [] },
  // Add more blogs as needed
];

const BlogCard: React.FC<{ blog: Blog; onClick: () => void }> = ({ blog, onClick }) => (
  <Card
    onClick={onClick}
    className="bg-white hover:bg-gray-100 transition-transform transform hover:scale-105 p-4 rounded-2xl shadow-md cursor-pointer"
  >
    <CardContent>
      <h3 className="text-lg font-bold mb-2">{blog.title}</h3>
      <p className="text-sm text-gray-600">{blog.description}</p>
      <div className="mt-4 text-sm text-gray-500">Likes: {blog.likes}</div>
    </CardContent>
  </Card>
);

const BlogDetails: React.FC<{ blog: Blog; onBack: () => void; onComment: (comment: string) => void }> = ({ blog, onBack, onComment }) => {
  const [comment, setComment] = useState('');

  return (
    <div className="p-4 bg-white rounded-2xl shadow-md">
      <Button onClick={onBack} className="mb-4">Back to Blogs</Button>
      <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
      <p className="text-gray-700 mb-4">{blog.description}</p>

      <div className="mb-4">
        <h3 className="text-lg font-semibold">Comments:</h3>
        <ul className="list-disc pl-5">
          {blog.comments.map((comment, index) => (
            <li key={index} className="text-gray-600">{comment}</li>
          ))}
        </ul>
      </div>

      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Add a comment"
        className="border p-2 w-full rounded-md mb-2"
      />
      <Button onClick={() => { onComment(comment); setComment(''); }}>Post Comment</Button>
    </div>
  );
};

const AddBlogForm: React.FC<{ onAdd: (newBlog: Blog) => void }> = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    const newBlog: Blog = {
      id: Date.now(),
      title,
      description,
      likes: 0,
      comments: []
    };
    onAdd(newBlog);
    setTitle('');
    setDescription('');
  };

  return (
    <div className="p-4 bg-white rounded-2xl shadow-md mb-4">
      <h2 className="text-xl font-bold mb-2">Add a New Blog</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Blog Title"
        className="border p-2 w-full rounded-md mb-2"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Blog Description"
        className="border p-2 w-full rounded-md mb-2"
      />
      <Button onClick={handleSubmit}>Add Blog</Button>
    </div>
  );
};

const BlogPage: React.FC = () => {
  const [blogs, setBlogs] = useState(blogsData);
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);

  const handleAddBlog = (newBlog: Blog) => {
    setBlogs([newBlog, ...blogs]);
  };

  const handleComment = (comment: string) => {
    if (selectedBlog) {
      const updatedBlogs = blogs.map(blog =>
        blog.id === selectedBlog.id ? { ...blog, comments: [...blog.comments, comment] } : blog
      );
      setBlogs(updatedBlogs);
      setSelectedBlog({ ...selectedBlog, comments: [...selectedBlog.comments, comment] });
    }
  };

  return (
    
    <div className="min-h-screen bg-gradient-to-b from-purple-100 via-pink-100 to-blue-100 p-6">
      <Navbar />
      {selectedBlog ? (
        <BlogDetails blog={selectedBlog} onBack={() => setSelectedBlog(null)} onComment={handleComment} />
      ) : (
        <>
          <AddBlogForm onAdd={handleAddBlog} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map(blog => (
              <BlogCard key={blog.id} blog={blog} onClick={() => setSelectedBlog(blog)} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default BlogPage;
