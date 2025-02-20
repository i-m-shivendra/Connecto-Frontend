import axios from "axios";
import React, { FC, useState } from "react";

// Post form interface
interface PostFormDTO {
  userId: number; // Added userId here
  content: string;
  privacy: string;
  mediaUrl: FileList | null;
  mediaType: string;
}

const CreatePost: FC = () => {
  // Assuming the userId is hardcoded or fetched from some global state or session.
  const userId = 1; // You can replace this with dynamic user ID

  // State management
  const [content, setContent] = useState<string>('');
  const [privacy, setPrivacy] = useState<string>('public'); // Default privacy is public
  const [mediaUrl, setMediaUrl] = useState<FileList | null>(null);
  const [mediaType, setMediaType] = useState<string>('photo'); // Default media type is photo
  const [loading, setLoading] = useState<boolean>(false);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Create FormData object to send media and text content
    const formData = new FormData();
    formData.append('userId', String(userId)); // Added userId
    formData.append('content', content);
    formData.append('privacy', privacy);
    formData.append('mediaType', mediaType);

    // Append media files to FormData
    if (mediaUrl) {
      Array.from(mediaUrl).forEach((file) => {
        formData.append('mediaUrl', file);
      });
    }

    try {
      // Sending data to the backend via POST request
      const response = await axios.post('http://localhost:9100/posts-api/create-post', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Post created successfully:', response.data);
      // Reset form fields after successful submission
      setContent('');
      setPrivacy('public');
      setMediaUrl(null);
      setMediaType('photo');
    } catch (error) {
      console.error('Error creating post:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="card" style={{ width: '100%', maxWidth: '600px' }}>
        <div className="card-header">
          <h4>Create a New Post</h4>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            {/* Content */}
            <div className="form-group mb-3">
              <label htmlFor="content">Content:</label>
              <textarea
                id="content"
                className="form-control"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="What's on your mind?"
                required
              />
            </div>

            {/* Privacy */}
            <div className="form-group mb-3">
              <label htmlFor="privacy">Privacy:</label>
              <select
                id="privacy"
                className="form-control"
                value={privacy}
                onChange={(e) => setPrivacy(e.target.value)}
              >
                <option value="public">Public</option>
                <option value="friends">Friends</option>
                <option value="custom">Custom</option>
              </select>
            </div>

            {/* Media Type */}
            <div className="form-group mb-3">
              <label htmlFor="mediaType">Media Type:</label>
              <select
                id="mediaType"
                className="form-control"
                value={mediaType}
                onChange={(e) => setMediaType(e.target.value)}
              >
                <option value="photo">Photo</option>
                <option value="video">Video</option>
              </select>
            </div>

            {/* File Upload for Media */}
            <div className="form-group mb-3">
              <label htmlFor="mediaUrl">Upload Media (images/videos):</label>
              <input
                type="file"
                id="mediaUrl"
                className="form-control"
                accept={mediaType === 'photo' ? 'image/*' : 'video/*'}
                multiple
                onChange={(e) => setMediaUrl(e.target.files)}
              />
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-primary w-100" disabled={loading}>
              {loading ? 'Submitting...' : 'Create Post'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
